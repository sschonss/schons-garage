import { View, Text, StyleSheet, StatusBar, Pressable } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import SearchBar from "../ui/SearchBar";
import { Colors } from "@/consts/colors";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";

type HeaderWithSearchBar = {
  headerBackVisible?: boolean;
};

export default function HeaderWithSearchBar({
  headerBackVisible = true,
}: HeaderWithSearchBar) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Stack.Screen
      options={{
        headerShown: true,
        header: () => (
          <View style={styles.headerStyle}>
            <StatusBar barStyle="light-content" />

            <Pressable onPress={handleBack}>
              <AntDesign name="arrowleft" size={20} color="white" />
            </Pressable>

            <SearchBar />
          </View>
        ),
        headerStyle: styles.headerStyle,
      }}
    />
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colors.primary,
    padding: 8,
  },
});
