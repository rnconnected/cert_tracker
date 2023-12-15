import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const OtpInput = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value) => {
    // Ensure the value is a single digit
    const sanitizedValue = value.replace(/[^0-9]/g, "");

    // Update state with the sanitized value
    setOtp(sanitizedValue);

    // You can perform additional actions here, such as moving focus to the next input
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        value={otp}
        onChangeText={handleOtpChange}
      />
      {/* Add more TextInput components for multi-digit OTP */}
      {/* <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        value={otp2}
        onChangeText={handleOtp2Change}
      /> */}
      {/* Add more TextInput components as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    marginHorizontal: 5,
    fontSize: 20,
  },
});

export default OtpInput;
