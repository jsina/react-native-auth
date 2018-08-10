import React from "react";
import { StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export default (CustomButton = props => (
  <TouchableOpacity style={[styles.button, props.customStyle]} activeOpacity={0.7} {...props}>
    <Text style={styles.text}>{props.title}</Text>
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  button: {
    width: width * 0.9,
    height: height * 0.08,
    borderRadius: 30,
    backgroundColor: "rgb(132, 189, 0)",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  }
});
