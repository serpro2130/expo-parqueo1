import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import ParkingInfoScreen from './screens/ParkingInfoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Información de Contacto' }} />
        <Stack.Screen name="ParkingInfo" component={ParkingInfoScreen} options={{ title: 'Información de Parqueaderos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
