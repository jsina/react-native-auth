import React, { Component } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import axios from 'axios';

import CustomButton from "../component/CustomButton";
import { startAuthScreen } from '../component/StartScreen';

export default class PrivateScreen extends Component {
  logout = () => {
    
    AsyncStorage.clear(() => {
      startAuthScreen();
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Private Screen</Text>
        <CustomButton onPress={this.logout} customStyle={styles.button} title="خروج" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "rgb(255, 189, 0)",
  }
});
