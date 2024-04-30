import React from "react";
import { FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CarList({ data, onPress }) {
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => onPress(item.brand)}
        >
          <Text>{item.brand}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.brand}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "85%",
    padding: 10,
  },
  item: {
    padding: 10,
    margin: 5,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
});
