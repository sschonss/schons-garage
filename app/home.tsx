import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Scrollable from "@/components/containers/Scrollable";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import FooterWithIcons from "@/components/footer/FooterIcons";
import { useCarService } from "@/services/CarServices";
import MarcaItem from "@/components/MarcaItem";
import CardCar from "@/components/containers/CardCar";
import data from "@/consts/data.json";

export default function Home() {
  const { expandedMarca, toggleMarca, data: carData } = useCarService(data);

  return (
    <View style={styles.container}>
      <Scrollable>
        <HeaderWithTitle title={"Schons Garage"} />

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {carData.marcas.map((marca, index) => (
            <MarcaItem
              key={index}
              marca={marca}
              onPress={() => toggleMarca(marca)}
              isExpanded={expandedMarca === marca}
            />
          ))}
          {expandedMarca &&
            expandedMarca.carros.map((carro, idx) => (
              <CardCar
                key={idx}
                nome={carro.nome}
                ano={carro.ano}
                valor={carro.valor}
              />
            ))}
        </ScrollView>
      </Scrollable>

      <FooterWithIcons show={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
});
