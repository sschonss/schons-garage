import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function BrandItem({ brand, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(brand)}>
      <Text>{brand}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
});
