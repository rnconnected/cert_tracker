import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const InputArea = ({ label, isPassword, onValueChange, setValue }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (setValue) {
      setIsFocused(true);
      setText(setValue);
    }
  }, [setValue]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!text) {
      setIsFocused(false);
    }
  };

  const handleChangeText = (inputText) => {
    setText(inputText);
    onValueChange(inputText);
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          { top: isFocused || text ? 0 : 20 },
          { fontSize: isFocused || text ? 12 : 16 },
        ]}
      >
        {label}
      </Text>
      <TextInput
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        secureTextEntry={isPassword}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 80,
    height: 50,
    marginTop: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "baseline",
  },
  label: {
    position: "absolute",
    color: "#aaa",
    fontSize: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    fontSize: 16,
    width: "100%",
  },
});

export default InputArea;
