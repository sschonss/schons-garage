import { Colors } from "@/consts/colors";
import { Spacing } from "@/consts/spacing";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  View,
} from "react-native";

type FormInput = {
  title: string;
  showKey?: boolean;
} & TouchableOpacityProps;

export default function FormButton({
  title,
  showKey = false,
  ...rest
}: FormInput) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.content}>
        {showKey && (
          <Image
            source={require("../../assets/images/key.png")}
            style={styles.key}
          />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.md,
    backgroundColor: Colors.primary,
    borderRadius: 2,
    padding: 16,
    width: "100%",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "black",
    textAlign: "center",
  },
  key: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});
