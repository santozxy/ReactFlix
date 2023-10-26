import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import { Platform } from "react-native";

import StackRoutes from "./StackRoutes";
import Movies from "../pages/Movies";
import Search from "../pages/Search";

const Tab = createBottomTabNavigator();

function Routes() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 8,
          paddingBottom: 8,
          height: 60,
          backgroundColor: colors.primary,
          borderColor: colors.textColor,
          justifyContent: "center",
          alignItems: "center",
          borderTopWidth: 0,
          elevation: 0,
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
}

export default Routes;
