import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../Entities/Settings/SettingsScreen';
import {UserProvider} from '../context/UserProvider';
import HomeContainer from '../UseCases/HomeContainer';

const Tab = createBottomTabNavigator();

export default BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeContainer} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
