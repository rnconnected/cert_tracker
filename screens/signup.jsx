import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import InputArea from "../components/inputArea";

const { width, height } = Dimensions.get("screen");

const Signup = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.quadrant_up}></View>
      <View style={styles.quadrant_down}></View>
      <Text style={styles.bold}>Create an account</Text>
      <View style={styles.form}>
        <InputArea label=" Name" />
        <InputArea label="Email" />
        <InputArea label="Address" />
        <InputArea label="City" />
        <InputArea label="Enter Password" />
        <InputArea label="Re-enter Password" />
        <CheckBox
          title="I agree to the terms and conditions"
          checked={isChecked}
          onPress={handleCheckboxToggle}
          containerStyle={styles.checkbox}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.touchableOpacity, isPressed && styles.pressed]}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <View style={styles.signupBtn}>
            <Text style={styles.signupText}>Sign up</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.googleBtn}>
          <AntDesign name="google" size={24} color="black" />
          <Text>Sign up with Google</Text>
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
    backgroundColor: "white",
  },
  quadrant_up: {
    width: 225,
    height: 225,
    borderRadius: 230,
    backgroundColor: "#CE50FA",
    position: "absolute",
    top: -100,
    left: -100,
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
  bold: {
    fontSize: 35,
    marginTop: 80,
    color: "#39115B",
  },
  form: {
    marginTop: 50,
  },
  checkbox: {
    marginTop: 30,
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
  googleBtn: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    gap: 10,
  },
});

export default Signup;
