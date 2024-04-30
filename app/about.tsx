import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import FullScreen from "@/components/containers/FullScreen";
import FooterWithIcons from "@/components/footer/FooterIcons";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";

export default function AboutScreen() {
  const handleGithubLink = () => {
    const githubURL = "https://github.com/sschonss";
    Linking.openURL(githubURL);
  };

  return (
    <FullScreen>
      <HeaderWithTitle title="Sobre" />
      <View style={styles.container}>
        <Text style={styles.title}>Sobre o Schons Garage</Text>
        <Text style={styles.text}>Versão: 1.0.0</Text>
        <Text style={styles.text}>Desenvolvido por Luiz Schons</Text>
        <TouchableOpacity onPress={handleGithubLink}>
          <Text style={[styles.text, styles.link]}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
