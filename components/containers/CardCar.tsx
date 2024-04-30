// CardCar.js
import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function CardCar({ nome, ano, valor }) {
  const formattedValue = `R$ ${valor.toFixed(2)}`;

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Text>Ano: {ano}</Text>
      <Text>Valor: {formattedValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },
  nome: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
});
