import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default (TextButton = props => (
  <TouchableOpacity>
    <Text style={styles.text}>ساخت حساب کاربری</Text>
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  text: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid"
  }
});
