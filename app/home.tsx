import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import React, { useState } from "react";
import Scrollable from "@/components/containers/Scrollable";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import FooterWithIcons from "@/components/footer/FooterIcons";
import data from "@/consts/data.json";
import CardCar from "@/components/containers/CardCar";

export default function Home() {
  const [expandedMarca, setExpandedMarca] = useState(null);

  const toggleMarca = (marca) => {
    setExpandedMarca((prevMarca) => (prevMarca === marca ? null : marca));
  };

  return (
    <Scrollable>
      <HeaderWithTitle title={"Schons Garage"} />

      <View style={styles.container}>
        {data.marcas.map((marca) => (
          <TouchableOpacity
            key={marca.marca}
            onPress={() => toggleMarca(marca)}
            activeOpacity={0.7}
          >
            <Animated.View
              style={[
                styles.marcaContainer,
                {
                  backgroundColor:
                    expandedMarca === marca ? "#f0f0f0" : "transparent",
                },
              ]}
            >
              <Animated.Text style={styles.marcaText}>
                {marca.marca}
              </Animated.Text>
            </Animated.View>
            {expandedMarca === marca &&
              marca.carros.map((carro, idx) => (
                <CardCar
                  key={idx}
                  nome={carro.nome}
                  ano={carro.ano}
                  valor={carro.valor}
                />
              ))}
          </TouchableOpacity>
        ))}
      </View>

      <FooterWithIcons show={true} />
    </Scrollable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  marcaContainer: {
    borderRadius: 10,
    marginBottom: 10,
  },
  marcaText: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
