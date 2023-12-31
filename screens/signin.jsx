import React, { useState, useEffect } from "react";
import InputArea from "../components/inputArea";
import { AntDesign } from "@expo/vector-icons";
import { firebase } from "../firebase/firebase";
import { useNavigation } from "@react-navigation/native";

import {
  Keyboard,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const Signin = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  // setting the values for the signin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          !isKeyboardVisible && styles.nonScrollable,
        ]}
        keyboardShouldPersistTaps="handled"
      >
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
              <Text
                style={{ color: "#C73349" }}
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                Forget Password?
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.touchableOpacity, isPressed && styles.pressed]}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              // onPress={handleSignIn}
            >
              <View style={styles.signupBtn}>
                <Text
                  style={styles.signupText}
                  onPress={() => navigation.navigate("Verify")}
                >
                  Sign In
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.googleBtn}>
              <AntDesign name="google" size={24} color="black" />
              <Text style={{ fontSize: 17 }}>Sign In with Google</Text>
            </View>

            <View style={styles.signAlt}>
              <Text style={{ fontSize: 17 }}>Don't have an account?</Text>
              <Text
                style={{ color: "brown", fontSize: 17 }}
                onPress={() => navigation.navigate("Signup")}
              >
                Sign Up
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
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
    height: "70%",
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
    borderRadius: 15,
    backgroundColor: "#7E25CA",
    padding: 11,
    width: "70%",
    alignSelf: "center",
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
  signupText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  scrollContainer: {
    flexGrow: 1,
  },
  nonScrollable: {
    height: height,
  },
});

export default Signin;
