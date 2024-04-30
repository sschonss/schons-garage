import React from "react";
import { Modal, View, StyleSheet } from "react-native";
import CarModalContent from "./CarModalContent";

export default function CarModal({ visible, cars, brand, onClose }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <CarModalContent cars={cars} brand={brand} onClose={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
