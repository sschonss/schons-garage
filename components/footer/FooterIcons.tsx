import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

const routes = [
  {
    path: "/about",
    icon: <FontAwesome5 name="info-circle" size={24} color="gray" />,
    text_help: "Sobre",
  },
  {
    path: "/",
    icon: <FontAwesome name="user" size={20} color="gray" />,
    text_help: "Logout",
  },
];

export default function FooterWithIcons({ show }) {
  if (!show) return null;

  return (
    <View style={styles.footerStyle}>
      {routes.map((route, index) => (
        <Link href={route.path} key={index}>
          <View style={styles.textStyles}>
            <Text>{route.icon}</Text>
            <Text>{route.text_help}</Text>
          </View>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  footerStyle: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  textStyles: {
    fontSize: 12,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
