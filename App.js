import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}
