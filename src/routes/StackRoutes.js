import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Search from '../pages/Search';

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home} />
      <Stack.Screen
        name="Details"
        options={{ headerShown: false, title: 'Detalhes' }}
        component={Details} />
      <Stack.Screen
        name="Search"
        options={({ route }) => ({
          title: `Buscar por "${route.params.name}"`,
          headerTintColor: "#FFF",
          headerStyle: {
            backgroundColor: "#141a29"
          },
          headerTitleStyle: {
            color: '#FFF',
            fontSize: 18
          }
        })}
        component={Search} />
    </Stack.Navigator>
  );
}
export default StackRoutes

