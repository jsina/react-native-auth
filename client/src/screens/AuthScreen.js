import React, { Component } from "react";
import { StyleSheet, Image, View, AsyncStorage } from "react-native";
import axios from "axios";

import TextInput from "../component/TextInput";
import CustomButton from "../component/CustomButton";
import TextButton from "../component/TextButton";
import { startPrivateScreen } from "../component/StartScreen";

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

  goToRegister = () =>
    this.props.navigator.push({
      screen: "client.RegisterScreen",
      title: "ثبت نام"
    });

  saveAsync = async token => {
    try {
      await AsyncStorage.setItem("token", token);
      startPrivateScreen();
    } catch (err) {
      alert(err);
    }
  };

  login = () => {
    const { username, password } = this.state;
    if (username && password) {
      axios
        .post("http://localhost:3000/user/login", {
          username,
          password
        })
        .then(response => {
          const token = response.headers["x-access-token"];
          if (token) {
            this.saveAsync(token);
          } else {
            alert("no token");
          }
        })
        .catch(err => alert(err));
    } else {
      alert("fill the inputs.");
    }
  };

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
          <CustomButton title="ورود" onPress={this.login} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginBottom: 30,
            padding: 20
          }}
        >
          <TextButton title="ثبت نام" onPress={this.goToRegister} />
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
    marginVertical: "5%",
    width: 100,
    height: 100
  }
});
