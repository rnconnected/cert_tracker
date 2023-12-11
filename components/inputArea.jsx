import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const InputArea = ({ label }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
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
        onChangeText={(inputText) => setText(inputText)}
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
    // height: "100%",
  },
});

export default InputArea;
