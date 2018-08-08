import { Navigation } from "react-native-navigation";

import AuthScreen from "./screens/AuthScreen";
import RegisterScreen from './screens/RegisterScreen';
import PrivateScreen from './screens/PrivateScreen';

Navigation.registerComponent("client.AuthScreen", () => AuthScreen);
Navigation.registerComponent("client.RegisterScreen", () => RegisterScreen);
Navigation.registerComponent("client.PrivateScreen", () => PrivateScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "client.AuthScreen",
    title: "Auth Screen",
  },
});
