import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default (TextButton = props => (
  <TouchableOpacity {...props} style={{ padding: 30 }}>
    <Text style={styles.text}>{props.title}</Text>
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  text: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    fontSize: 20,
    fontWeight: "bold"
  }
});
