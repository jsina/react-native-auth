import { Navigation } from "react-native-navigation";

import AuthScreen from "./screens/AuthScreen";
import RegisterScreen from './screens/RegisterScreen';

Navigation.registerComponent("client.AuthScreen", () => AuthScreen);
Navigation.registerComponent("client.RegisterScreen", () => RegisterScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "client.AuthScreen",
    title: "Auth Screen",
  },
});
