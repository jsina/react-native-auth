import { Navigation } from "react-native-navigation";

import AuthScreen from "./screens/AuthScreen";

Navigation.registerComponent("client.AuthScreen", () => AuthScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "client.AuthScreen",
    title: "Auth Screen",
  },
});
