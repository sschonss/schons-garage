import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import FullScreen from "@/components/containers/FullScreen";
import FormInput from "@/components/form/FormInput";
import Card from "@/components/containers/Card";
import FormButton from "@/components/form/FormButton";
import { Spacing } from "@/consts/spacing";
import { Colors } from "@/consts/colors";

export default function index() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username == "teste" && password == "123") {
      router.push("/home");
    } else {
      alert("Usuário ou senha incorreto(s)");
    }
  };

  return (
    <FullScreen>
      <Card>
        <View style={styles.containerLogo}>
          <Image source={require("../assets/images/logo.png")} />
        </View>
        <FormInput
          label="Username"
          value={username}
          onChangeText={setUsername}
        />
        <FormInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <FormButton onPress={handleLogin} title="Login" showKey={true} />
      </Card>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: Spacing.xl,
  },
});
