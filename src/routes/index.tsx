import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { InicialScreen, LoginScreen } from '@/screens';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationParamList } from '@/types/navigators';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer<NavigationParamList>>
      <Stack.Navigator
        initialRouteName="InicialScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="InicialScreen" component={InicialScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
