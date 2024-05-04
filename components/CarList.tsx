import React from "react";
import { SectionList, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Car {
  brand: string;
  model: string;
}

interface CarListProps {
  data: { title: string; data: Car[] }[];
  onPress: (brand: string) => void;
}

export default function CarList({ data, onPress }: CarListProps) {
  return (
    <SectionList
      style={styles.container}
      sections={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => onPress(item.brand)}
        >
          <Text>{item.brand}</Text>
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
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
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#ccc",
    padding: 10,
  },
});
