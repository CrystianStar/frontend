import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// 👉 Olha a correção aqui no finalzinho da linha:
import AuthRoutes from './src/routes/auth.routes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}