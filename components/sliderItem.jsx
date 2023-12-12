import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
  Button,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("screen");

const SliderItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="contain" style={styles.image} />
      <View style={styles.textContent}>
        <Text style={styles.bold}>{item.bold}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

// this is the style sheet section xoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxooooooooooooxxxxxxoooooooxxxxooooooxoxoxoxox  this is the style sheet section
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: "90%",
    height: "100%",
    flex: 0.7,
    zIndex: -1,
  },
  textContent: {
    alignItems: "center",
  },

  bold: {
    fontSize: 28,
    textAlign: "center",
    padding: 10,
    marginBottom: 10,
    color: "#EE5F74",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    padding: 20,
  },
});

export default SliderItem;
