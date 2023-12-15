import React, { useState } from "react";
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

const Verify = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  // setting the values for the signin
  const [email, setEmail] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View style={styles.quadrant_up}></View>
          <View style={styles.quadrant_down}></View>
          <View style={styles.topImage}>
            <Image source={require("../assets/img1.png")} />
          </View>
          <View style={styles.form}>
            <Text style={styles.bold}>Verify your email</Text>
            <Text style={styles.msg}>
              Enter your credentials below to verify your account
            </Text>
            <View style={styles.inputs}>
              <InputArea
                label={"Email"}
                onValueChange={setEmail}
                setValue={email}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.touchableOpacity, isPressed && styles.pressed]}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              // onPress={handleSignIn}
            >
              <View style={styles.signupBtn}>
                <Text style={styles.signupText}>Verify Email Address</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
  signupBtn: {
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: "#7E25CA",
    padding: 11,
    width: "75%",
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
});

export default Verify;
