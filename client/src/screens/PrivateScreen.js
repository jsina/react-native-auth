import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";

class PrivateScreen extends Component {
  componentDidMount() {
    AsyncStorage.getItem("token").then(item => console.log(item, " item"));
  }
  render() {
    return (
      <View>
        <Text>Private Screen</Text>
      </View>
    );
  }
}

export default PrivateScreen;
