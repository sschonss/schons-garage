import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useRouter } from "expo-router";
import FullScreen from "@/components/containers/FullScreen";
import FormInput from "@/components/form/FormInput";
import Card from "@/components/containers/Card";
import FormButton from "@/components/form/FormButton";
import { Spacing } from "@/consts/spacing";
import useAuth from "@/firebase/hooks/useAuth";

export default function index() {
  const router = useRouter();

  const { login, user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user]);

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <FullScreen>
      <Card>
        <View style={styles.containerLogo}>
          <Image source={require("../assets/images/logo.png")} />
        </View>
        <FormInput label="Email" value={email} onChangeText={setEmail} />
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
