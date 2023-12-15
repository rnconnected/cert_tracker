import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);

const rootTag =
  document.getElementById("root") || document.getElementById("app");

AppRegistry.runApplication(appName, { rootTag });
