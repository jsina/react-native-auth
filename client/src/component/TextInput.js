import React from "react";
import { StyleSheet, TextInput as Input } from "react-native";

export default TextInput = props => <Input underlineColorAndroid='transparent' style={styles.input} {...props} />;

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: "8%",
    backgroundColor: "rgb(242,242,242)",
    color: "rgb(188,188,188)",
    borderRadius: 30,
    textAlign: "right",
    paddingRight: '3%',
    marginBottom: '1%'
  }
});
