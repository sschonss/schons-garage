import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
} from "react-native";
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
    <View style={styles.container}>
      <Scrollable>
        <HeaderWithTitle title={"Schons Garage"} />

        <ScrollView contentContainerStyle={styles.scrollContent}>
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
    paddingBottom: 80,
    paddingHorizontal: 16,
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
