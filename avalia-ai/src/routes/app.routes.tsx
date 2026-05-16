import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importando as telas (garanta que esses arquivos existam na pasta src/screens/)
import Login from '../screens/Login';
import Favorites from '../screens/Favorites';
import Register from '../screens/Register';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false, 
        tabBarActiveTintColor: '#f1c40f', // Amarelo quando clicado
        tabBarStyle: { backgroundColor: '#333' } // Barra escura igual seu desenho
      }}
    >
      <Tab.Screen 
        name="Explorar" 
        component={Login} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="map-outline" size={24} color={color} />
        }} 
      />
      
      <Tab.Screen 
        name="Favoritos" 
        component={Favorites} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="heart-outline" size={24} color={color} />
        }} 
      />

      <Tab.Screen 
        name="Perfil" 
        component={Register} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />
        }} 
      />
    </Tab.Navigator>
  );
}