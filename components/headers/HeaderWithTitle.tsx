import { View, Text, Button } from "react-native";
import React from "react";
import { Stack } from "expo-router";

type HeaderWithTitleProps = {
  title: string;
};

export default function HeaderWithTitle({ title }: HeaderWithTitleProps) {
  return (
    <Stack.Screen
      options={{
        headerShown: true,
        title,
        headerRight: () => {
          return <Button title="A" />;
        },
      }}
    />
  );
}
