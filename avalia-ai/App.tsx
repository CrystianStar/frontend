import { NavigationContainer } from '@react-navigation/native'

import { AuthRoutes } from './src/routes/auth.routes'

export default function App() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}