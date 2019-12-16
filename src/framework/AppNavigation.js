import React from 'react';

import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './AuthStack';
import BottomTabs from './BottomTabs';
import SplashContainer from '../UseCases/SplashContainer';
import {_navigation} from './NavigationService';
const Stack = createStackNavigator();

const AppNavigation = () => {
  console.log('appnavigation');
  return (
    <NavigationNativeContainer ref={_navigation}>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={SplashContainer} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

export default AppNavigation;
