import React, { Component } from "react";
import { StyleSheet, Image, View } from "react-native";

import TextInput from "../component/TextInput";

export default class AuthScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require("../../assets/images/logo.png")} />
        <TextInput placeholder="نام کاربری" />
        <TextInput secureTextEntry placeholder="رمز" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(255,255,255)"
  },
  img: {
    marginVertical: "5%"
  }
});
