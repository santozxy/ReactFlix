import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Details from "../pages/Details";

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="Details"
        options={{ headerShown: false, title: "Detalhes" }}
        component={Details}
      />
    </Stack.Navigator>
  );
}
export default StackRoutes;
