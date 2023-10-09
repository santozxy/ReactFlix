import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
