import React from "react";
import { TouchableOpacity, Animated, StyleSheet, Text } from "react-native";

export default function MarcaItem({ marca, onPress, isExpanded }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Animated.View
        style={[
          styles.marcaContainer,
          {
            backgroundColor: isExpanded ? "#f0f0f0" : "transparent",
          },
        ]}
      >
        <Text style={styles.marcaText}>{marca.marca}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  marcaContainer: {
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  marcaText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
