import React, { useRef } from "react";
import {
  View,
  Animated,
  FlatList,
  StyleSheet,
  Dimensions,
  Button,
  Text,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import Slides from "../data/data";
import SliderItem from "../components/sliderItem";

const Pagination = ({ slides, scrollX }) => {
  const navigation = useNavigation(); // Get navigation from the hook

  return (
    <View style={styles.paginationContainer}>
      {slides.map((_, i) => {
        const dotOpacity = scrollX.interpolate({
          inputRange: [
            (i - 1) * screenWidth,
            i * screenWidth,
            (i + 1) * screenWidth,
          ],
          outputRange: [0.5, 1, 0.5],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i}
            style={[styles.dot, { opacity: dotOpacity }]}
          />
        );
      })}
      <View style={styles.gotoSignupContainer}>
        <Text
          style={styles.gotoSignup}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          Get Started {">>"}
        </Text>
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get("window").width;
const { width, height } = Dimensions.get("screen");

const Slider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation(); // Get navigation from the hook

  return (
    <View style={styles.container}>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <SliderItem item={item} key={item.id} />}
        keyExtractor={(item) => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
      <Pagination slides={Slides} scrollX={scrollX} />
      <View style={styles.quadrant_down}></View>
      <View style={styles.quadrant_up}><Image
          source={require("../assets/logo.png")}
          style={styles.slideLogo}
        /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "grey",
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: "black",
  },
  paginationContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 35,
    alignSelf: "center",
  },
  gotoSignupContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: -17,
    bottom: 80,
    width: 100,
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
  slideLogo: {
    position: "absolute",
    bottom: -55,
    right: -10,
    zIndex: 1,
  },
  quadrant_down: {
    width: 225,
    height: 225,
    borderRadius: 230,
    backgroundColor: "#481573",
    position: "absolute",
    bottom: -100,
    right: -100,
  },
});

export default Slider;
