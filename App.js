import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
