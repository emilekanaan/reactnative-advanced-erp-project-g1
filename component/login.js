import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Text, View, Dimensions, TextInput } from "react-native";
import styles from "../styles";
import Svg, { Image } from "react-native-svg";
import axios from "axios";
import { useState } from "react";
import cookie from "cookie";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { height, width } = Dimensions.get("window");

  const navigation = useNavigation();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
   
        navigation.navigate('home')
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Svg height={height} width={width}>
          <Image
            href={require("../assets/login.png")}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid slice"
          />
        </Svg>
      </View>
      <View>
        <TextInput
          require
          placeholder="Email"
          placeholderTextColor="white"
          style={styles.textInput}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          require
          placeholder="password"
          placeholderTextColor="white"
          style={styles.textInput}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText} onClick={handleSubmit}>
            Log In
          </Text>
        </View>
      </View>
    </View>
  );
}
