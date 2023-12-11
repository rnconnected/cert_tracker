import React, { useState, useRef } from "react";
import { View, Text, Animated, FlatList, StyleSheet } from "react-native";
import Slides from "../data/data";
import SliderItem from "../components/sliderItem";

const Slider = () => {
  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <SliderItem item={item} key={item.id} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

export default Slider;
