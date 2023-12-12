import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import InputArea from "../components/inputArea";
import { AntDesign } from "@expo/vector-icons";
import { firebase } from "../firebase/firebase";
import "firebase/compat/auth";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const Signup = () => {
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

  // setting the values for the signup
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.quadrant_up}></View>
        <View style={styles.quadrant_down}></View>
        <Text style={styles.bold}>Create an account</Text>
        <View style={styles.form}>
          <InputArea label=" Name" onValueChange={setName} setValue={name} />
          <InputArea label="Email" onValueChange={setEmail} setValue={email} />
          <InputArea
            label="Address"
            onValueChange={setAddress}
            setValue={address}
          />
          <InputArea label="City" onValueChange={setCity} setValue={city} />
          <InputArea
            isPassword={true}
            label="Enter Password"
            onValueChange={setPassword}
            setValue={password}
          />
          <InputArea isPassword={true} label="Re-enter Password" />
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
            onPress={handleSignup}
          >
            <View style={styles.signupBtn}>
              <Text style={styles.signupText}>Sign up</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.googleBtn}>
            <AntDesign name="google" size={24} color="black" />
            <Text style={{ fontSize: 17 }}>Sign up with Google</Text>
          </View>

          <View style={styles.signAlt}>
            <Text style={{ fontSize: 17 }}>Already have an account?</Text>
            <Text style={{ color: "brown", fontSize: 17 }}>Sign in</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// this is the styling for the signup page

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
    marginTop: 5,
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
  signAlt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    gap: 5,
  },
});

export default Signup;
