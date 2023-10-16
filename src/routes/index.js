import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackRoutes from "./StackRoutes";
import Movies from "../pages/Movies";
import Search from "../pages/Search";
import { useTheme } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Routes = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: "4%",
          left: "12%",
          right: "12%",
          paddingTop: 8,
          paddingBottom: 8,
          borderRadius: 15,
          height: 70,
          backgroundColor: colors.primary,
          borderColor: colors.textColor,
          justifyContent: "center",
          alignItems: "center",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: colors.textColor,
        tabBarInactiveTintColor: "#ccc",
      }}
    >
      <Tab.Screen
        name="HomeTab"
        options={{
          title: "Início",
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={focused ? colors.textColor : color}
            />
          ),
        }}
        component={StackRoutes}
      />

      <Tab.Screen
        name="Search"
        options={{
          title: "Buscar",
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-search" : "movie-search-outline"}
              size={size}
              color={focused ? colors.textColor : color}
            />
          ),
        }}
        component={Search}
      />

      <Tab.Screen
        name="Movies"
        options={{
          title: "Meus filmes",
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open-star" : "movie-star-outline"}
              size={size}
              color={focused ? colors.textColor : color}
            />
          ),
        }}
        component={Movies}
      />
    </Tab.Navigator>
  );
};

export default Routes;
