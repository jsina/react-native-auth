import React from "react";
import { StyleSheet, TextInput as Input, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export default (TextInput = props => (
  <Input underlineColorAndroid="transparent" style={styles.input} {...props} />
));

const styles = StyleSheet.create({
  input: {
    width: width * 0.9,
    height: height * 0.08,
    backgroundColor: "rgb(242,242,242)",
    color: "rgb(188,188,188)",
    borderRadius: 30,
    textAlign: "right",
    paddingRight: "3%",
    fontSize: 18,
    marginVertical: "2%"
  }
});
