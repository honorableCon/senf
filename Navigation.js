import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// You can import from local files
import HomeScreen from './screen/HomeScreen';
import FavoritesScreen from './screen/FavoritesScreen';
import SearchScreen from './screen/SearchScreen';
import TvScreen from './screen/TvScreen';
import DetailsScreen from './screen/DetailsScreen';
import CategoryHighlightScreen from './screen/CategoryHighlightScreen';
import Header from './components/Header';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function StackNav() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{
          headerTitle: 'SENFLIX',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: 'black' },
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Sama details',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: 'black'},
        }}
      />
      <Stack.Screen
        name="CategoryHighlight"
        component={CategoryHighlightScreen}
        options={{
          title: 'Sama details',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: 'black'},
        }}
      />
    </Stack.Navigator>
  );
}
export function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Tv') {
            iconName = focused ? 'live-tv' : 'ondemand-video';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'favorite' : 'favorite-border';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          }
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        inactiveBackgroundColor:'black',
        activeBackgroundColor:'red',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{}} />
      <Tab.Screen name="Tv" component={TvScreen} options={{}} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={{}} />
      <Tab.Screen name="Search" component={SearchScreen} options={{}} />
    </Tab.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
