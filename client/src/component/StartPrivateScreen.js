import { Navigation } from "react-native-navigation";

const startPrivateScreen = () => {
  return Navigation.startSingleScreenApp({
    screen: {
      screen: "client.PrivateScreen",
      title: "Private Screen"
    }
  });
};

export default startPrivateScreen;
