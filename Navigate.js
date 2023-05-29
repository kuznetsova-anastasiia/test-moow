import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home';
import { MakeOrder } from './screens/MakeOrder';
import { SubmitOrder } from './screens/SubmitOrder';
import { gStyle } from './styles/style';

const Stack = createStackNavigator();

export function Navigate() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ 
          title: 'Головна',
          headerStyle: gStyle.header,
          headerTitleStyle: gStyle.headerHomeText
        }}
      />

      <Stack.Screen
        name="MakeOrder"
        component={MakeOrder}
        options={{ 
          title: 'Замовити',
          headerStyle: gStyle.header,
          headerTitleStyle: gStyle.headerTitle
        }}
      />

      <Stack.Screen
        name="SubmitOrder"
        component={SubmitOrder}
        options={{ 
          title: 'Дані замовлення',
          headerStyle: gStyle.header,
          headerTitleStyle: gStyle.headerTitle
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>;
}