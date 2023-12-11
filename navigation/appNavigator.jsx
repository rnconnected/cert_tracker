import { createStackNavigator } from "@react-navigation/stack";
import Slider from "../screens/slider";
import signup from "../screens/signup";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Slider">
      <Stack.Screen
        name="Slider"
        component={Slider}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={signup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;