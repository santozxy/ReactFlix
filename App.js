import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components/native';
import { Theme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer  theme={Theme}>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
