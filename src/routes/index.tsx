import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { InicialScreen } from '@/screens';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InicialScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="InicialScreen" component={InicialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
