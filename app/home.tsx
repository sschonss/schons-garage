import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCarService } from "../services/CarService";
import data from "../services/data";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import FooterWithIcons from "@/components/footer/FooterIcons";
import BrandItem from "@/components/BrandItem";
import CarModal from "@/components/CarModal";

export default function Home() {
  const navigation = useNavigation();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBrandCars, setSelectedBrandCars] = useState([]);

  const { groupedData } = useCarService(data);

  const handleBrandPress = (brand) => {
    setSelectedBrand(brand);
    setModalVisible(true);
    fetchCarsByBrand(brand);
  };

  const fetchCarsByBrand = (brand) => {
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
      <FlatList
        style={{
          flex: 1,
          maxHeight: "90%",
          padding: 10,
        }}
        data={groupedData}
        renderItem={({ item }) => (
          <BrandItem brand={item.brand} onPress={handleBrandPress} />
        )}
        keyExtractor={(item) => item.brand}
      />
      <CarModal
        visible={modalVisible}
        cars={selectedBrandCars}
        brand={selectedBrand}
        onClose={closeModal}
      />
      <FooterWithIcons show={true} />
    </View>
  );
}
