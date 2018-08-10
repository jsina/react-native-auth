import { Navigation } from "react-native-navigation";

export const startPrivateScreen = () => {
  return Navigation.startSingleScreenApp({
    screen: {
      screen: "client.PrivateScreen",
      title: "Private Screen"
    }
  });
};

export const startAuthScreen = () => {
  return Navigation.startSingleScreenApp({
    screen: {
      screen: "client.AuthScreen",
      title: "Auth Screen"
    }
  });
};

