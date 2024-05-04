import React from "react";
import { Text, View, ScrollView, Button, StyleSheet } from "react-native";

interface Car {
  id: number;
  model: string;
  year: number;
}

interface CarModalContentProps {
  cars: Car[];
  brand: string;
  onClose: () => void;
}

const CarModalContent: React.FC<CarModalContentProps> = ({
  cars,
  brand,
  onClose,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cars by {brand}</Text>
      <ScrollView>
        {cars.map((car) => (
          <View key={car.id} style={styles.carItem}>
            <Text style={styles.carModel}>{car.model}</Text>
            <Text>Year: {car.year}</Text>
          </View>
        ))}
      </ScrollView>
      <Button title="Close" onPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    maxHeight: "80%",
    width: "80%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  carItem: {
    marginBottom: 10,
  },
  carModel: {
    fontWeight: "bold",
  },
});

export default CarModalContent;
