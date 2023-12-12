import React, { useState } from "react";
import InputArea from "../components/inputArea";
import { AntDesign } from "@expo/vector-icons";
import { firebase } from "../firebase/firebase";

import {
  Keyboard,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const Signin = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  // setting the values for the signin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.quadrant_up}></View>
      <View style={styles.quadrant_down}></View>
      <View style={styles.topImage}>
        <Image source={require("../assets/img1.png")} />
      </View>
      <View style={styles.form}>
        <Text style={styles.bold}>Sign In</Text>
        <Text style={styles.msg}>
          Sign In Enter your credentials below to log into your account
        </Text>
        <View style={styles.inputs}>
          <InputArea
            label={"Email"}
            onValueChange={setEmail}
            setValue={email}
          />
          <InputArea
            label={"Password"}
            onValueChange={setPassword}
            setValue={password}
            isPassword={true}
          />
        </View>
        <View style={styles.forgotPassword}>
          <Text style={{ color: "#C73349" }}>Forget Password?</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.touchableOpacity, isPressed && styles.pressed]}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          // onPress={handleSignIn}
        >
          <View style={styles.signupBtn}>
            <Text style={styles.signupText}>Sign In</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.googleBtn}>
          <AntDesign name="google" size={24} color="black" />
          <Text style={{ fontSize: 17 }}>Sign In with Google</Text>
        </View>

        <View style={styles.signAlt}>
          <Text style={{ fontSize: 17 }}>Already have an account?</Text>
          <Text
            style={{ color: "brown", fontSize: 17 }}
            onPress={() => navigation.navigate("Signin")}
          >
            Sign in
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: "center",
    backgroundColor: "#D399E6",
  },
  quadrant_up: {
    width: 225,
    height: 225,
    borderRadius: 230,
    backgroundColor: "#CE50FA",
    position: "absolute",
    top: -100,
    left: -100,
    opacity: 0.9,
  },
  quadrant_down: {
    width: 225,
    height: 225,
    borderRadius: 230,
    backgroundColor: "#481573",
    position: "absolute",
    bottom: -60,
    right: -100,
  },
  topImage: {
    zIndex: -1,
    width: "100%",
    alignItems: "center",
    marginTop: 30,
    height: "30%",
  },
  bold: {
    fontSize: 30,
    marginTop: 20,
    color: "#39115B",
    alignSelf: "center",
  },
  form: {
    backgroundColor: "white",
    width: "100%",
    height: "65%",
    zIndex: -1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  msg: {
    fontSize: 15,
    marginTop: 10,
    color: "#39115B",
    textAlign: "center",
    width: "70%",
    alignSelf: "center",
  },
  googleBtn: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    gap: 10,
  },
  signupBtn: {
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: "#7E25CA",
    padding: 11,
    width: "90%",
    alignSelf: "center",
  },
  signupText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  inputs: {
    alignItems: "center",
    marginTop: 10,
  },
  forgotPassword: {
    alignItems: "flex-end",
    marginTop: 30,
    marginRight: 40,
  },
  signAlt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    gap: 3,
  },
});

export default Signin;
