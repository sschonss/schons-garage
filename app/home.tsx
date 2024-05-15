import React, { useState } from "react";
import { View, SectionList } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useCarService } from "../services/CarService";
import data from "../services/data";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import BrandItem from "@/components/BrandItem";
import CarModal from "@/components/CarModal";

interface Car {
  brand: string;
  model: string;
}

interface GroupedDataItem {
  title: string;
  data: {
    brand: string;
    model: string;
  }[];
}

interface HomeProps {
  navigation: NavigationProp<any>;
}

export default function Home({ navigation }: HomeProps) {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedBrandCars, setSelectedBrandCars] = useState<Car[]>([]);

  const { groupedData } = useCarService(data);

  const handleBrandPress = (brand: string) => {
    setSelectedBrand(brand);
    setModalVisible(true);
    fetchCarsByBrand(brand);
  };

  const fetchCarsByBrand = (brand: string) => {
    const carsByBrand = data.filter((car) => car.brand === brand);
    carsByBrand.sort((a, b) => a.model.localeCompare(b.model));
    setSelectedBrandCars(carsByBrand);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedBrand(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderWithTitle title="Schons Garage" />
      <SectionList
        style={{
          flex: 1,
          maxHeight: "95%",
          padding: 10,
          marginBottom: 10,
        }}
        sections={[{ title: "Brands", data: groupedData }]}
        renderItem={({ item }) => (
          <BrandItem brand={item.brand} onPress={handleBrandPress} />
        )}
        renderSectionHeader={({ section }) => (
          <HeaderWithTitle title={section.title} />
        )}
        keyExtractor={(item, index) => `${item.brand}-${item.model}-${index}`}
      />
      <CarModal
        visible={modalVisible}
        cars={selectedBrandCars}
        brand={selectedBrand}
        onClose={closeModal}
      />
    </View>
  );
}
