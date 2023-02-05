import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { InitialScreen, LoginScreen } from '@/screens';
import { NavigationParamList } from '@/types/navigators';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer<NavigationParamList>>
      <Stack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
