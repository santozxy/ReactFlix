import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackRoutes from './StackRoutes';
import Movies from '../pages/Movies';
import Categories from '../pages/Categories';
import { darkTheme } from '../../theme';

const Tab = createBottomTabNavigator();

const Routes = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: darkTheme.colors.secondary,
                borderColor: darkTheme.colors.textColor,
            },
            tabBarActiveTintColor: darkTheme.colors.textColor,
            tabBarInactiveTintColor: '#ccc'
        }}>
            <Tab.Screen
                name="HomeTab"
                options={{
                    title: 'Início',
                    tabBarIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'movie-open' : 'movie-outline'}
                            size={size}
                            color={focused ? darkTheme.colors.primary : color}
                        />
                    )
                }}
                component={StackRoutes}
            />

            <Tab.Screen
                name="Categories"
                options={{
                    title: 'Categorias',
                    tabBarIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'view-list' : 'view-list-outline'}
                            size={size}
                            color={focused ? darkTheme.colors.primary : color}
                        />
                    )
                }}
                component={Categories}
            />

            <Tab.Screen
                name="Movies"
                options={{
                    title: 'Meus filmes',
                    tabBarIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'archive' : 'archive-outline'}
                            size={size}
                            color={focused ? darkTheme.colors.primary : color}
                        />
                    )
                }}
                component={Movies}
            />
        </Tab.Navigator >
    );
}

export default Routes

