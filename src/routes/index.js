import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import StackRoutes from './StackRoutes';
import Movies from '../pages/Movies';

const Drawer = createDrawerNavigator();

const Routes = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerStyle: {
                backgroundColor: "#090a0e",
                paddingTop: 20
            },
            drawerActiveBackgroundColor: '#e72f49',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff'
        }}>
            <Drawer.Screen
                name="HomeDrawer"
                options={{
                    title: 'Início',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'movie-open' : 'movie-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
                component={StackRoutes} />

            <Drawer.Screen
                name="Movies"
                options={{
                    title: 'Meus filmes',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'archive' : 'archive-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
                component={Movies} />
        </Drawer.Navigator>
    );
}

export default Routes

