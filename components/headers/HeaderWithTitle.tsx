import { ActionSheetIOS, Platform, Alert } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Stack } from "expo-router";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

type HeaderWithTitleProps = {
  title: string;
};

export default function HeaderWithTitle({ title }: HeaderWithTitleProps) {
  const navigation = useNavigation();
  const route = useRoute();

  const currentRoute = route.name;

  const handleAction = useCallback(
    (index: number) => {
      switch (index) {
        case 0:
          navigation.navigate("index");
          break;
        case 1:
          navigation.navigate(currentRoute !== "about" ? "about" : "home");
          break;
        default:
          break;
      }
    },
    [currentRoute, navigation]
  );

  const showActionSheet = useCallback(() => {
    const options = [
      "Logout",
      currentRoute === "about" ? "Marcas" : "Sobre",
      "Cancelar",
    ];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = options.length - 1;

    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options,
          cancelButtonIndex,
          destructiveButtonIndex,
        },
        (buttonIndex) => {
          handleAction(buttonIndex);
        }
      );
    } else {
      Alert.alert(
        "Opções",
        "Escolha uma opção",
        options.map((option, index) => ({
          text: option,
          onPress: () => handleAction(index),
          style: index === cancelButtonIndex ? "cancel" : "default",
        })),
        { cancelable: false }
      );
    }
  }, [currentRoute, handleAction]);

  return (
    <Stack.Screen
      options={{
        headerShown: true,
        title,
        headerRight: () => (
          <Ionicons
            name="menu"
            size={24}
            color="#000"
            onPress={showActionSheet}
          />
        ),
      }}
    />
  );
}
