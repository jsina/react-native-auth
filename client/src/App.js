// @flow
import { AsyncStorage } from "react-native";
import { Navigation } from "react-native-navigation";
import axios from "axios";

import AuthScreen from "./screens/AuthScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PrivateScreen from "./screens/PrivateScreen";
import {
  startAuthScreen,
  startPrivateScreen
} from './component/StartScreen'

Navigation.registerComponent("client.AuthScreen", () => AuthScreen);
Navigation.registerComponent("client.RegisterScreen", () => RegisterScreen);
Navigation.registerComponent("client.PrivateScreen", () => PrivateScreen);

AsyncStorage.getItem("token").then(token => {
  if (token) {
    axios
      .get("http://localhost:3000/auth/private", {
        headers: {
          "x-access-token": token
        }
      })
      .then(response => {
        startPrivateScreen();
      })
      .catch(err => {
        startAuthScreen();
      });
  } else {
    startAuthScreen();
  }
});
