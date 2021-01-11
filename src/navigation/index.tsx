import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MovieList} from '@screens';

const Stack = createStackNavigator();
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MovieList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export * from './StackParamList';
