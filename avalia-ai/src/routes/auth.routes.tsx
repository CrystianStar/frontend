import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importe todas as telas juntas
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Favorites from '../screens/Favorites';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* Coloque o Login como a primeira tela para ele abrir primeiro */}
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
}