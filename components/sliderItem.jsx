import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("screen");

const SliderItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.quadrant}>
        <Image source={item.logo} style={styles.slideLogo} />
      </View>
      <Image source={item.img} resizeMode="contain" style={styles.image} />
      <View style={styles.textContent}>
        <Text style={styles.bold}>{item.bold}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

// this is the style sheet section xoxoxoxoxoxoxoxo
const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
    backgroundColor: "white",
  },
  quadrant: {
    width: 225,
    height: 225,
    borderRadius: 230,
    backgroundColor: "#CE50FA",
    position: "absolute",
    top: -100,
    left: -100,
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

  slideLogo: {
    position: "absolute",
    bottom: -55,
    right: -10,
    zIndex: 1,
  },
  bold: {
    fontSize: 28,
    textAlign: "center",
    padding: 10,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },
});

export default SliderItem;
