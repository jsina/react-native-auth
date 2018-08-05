import React, { Component } from "react";
import { StyleSheet, Image, View } from "react-native";

import TextInput from "../component/TextInput";
import CustomButton from "../component/CustomButton";
import TextButton from "../component/TextButton";

export default class AuthScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  state = {
    username: "",
    password: ""
  };

  onChangeUsername = username => this.setState({ username });

  onChangePassword = password => this.setState({ password });

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require("../../assets/images/logo.png")}
        />
        <View>
          <TextInput
            onChangeText={this.onChangeUsername}
            value={this.state.username}
            on
            placeholder="نام کاربری"
          />
          <TextInput
            onChangeText={this.onChangePassword}
            value={this.state.password}
            secureTextEntry
            placeholder="رمز"
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="ثبت نام" />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginBottom: 30,
            padding: 20
          }}
        >
          <TextButton />
        </View>
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

  buttonContainer: {
    alignItems: "center",
    height: 150,
    justifyContent: "space-between"
  },
  img: {
    marginVertical: "5%"
  }
});
