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
  showKey?: boolean; // Propriedade opcional para indicar se a chave deve ser exibida
} & TouchableOpacityProps;

export default function FormButton({
  title,
  showKey = false,
  ...rest
}: FormInput) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.content}>
        {showKey && ( // Renderiza a chave apenas se showKey for true
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
    flexDirection: "row", // Para alinhar o ícone e o texto lado a lado
    alignItems: "center", // Para centralizar verticalmente o ícone e o texto
  },
  title: {
    color: "black",
    textAlign: "center",
  },
  key: {
    width: 24, // Ajuste conforme necessário
    height: 24, // Ajuste conforme necessário
    marginRight: 8, // Espaçamento entre o ícone e o texto
  },
});
