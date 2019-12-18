import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../Entities/themes/variables/colors';

import {Image} from 'react-native';
import ApplyScreen from '../Entities/Screens/Apply/ApplyScreen';
import CardsScreen from '../Entities/Screens/Cards/CardsScreen';
import DashBoardScreen from '../Entities/Screens/DashBoard/DashBoardScreen';
import OptionsScreen from '../Entities/Screens/Options/OptionsScreen';
import styles from '../styles/BottomNavStyle';

const Tab = createBottomTabNavigator();


export default BottomNavigation = () => {
  let applyCard_active = require("../../assets/images/apply_active.png");
  let applyCard_inactive = require("../../assets/images/apply_inactive.png");
  let dashboard_active = require("../../assets/images/dashboard_active.png");
  let dashboard_inactive = require("../../assets/images/dashboard_inactive.png");
  let card_active = require("../../assets/images/cards_active.png");
  let card_inactive = require("../../assets/images/cards_inactive.png");
  let options_active = require("../../assets/images/options_active.png");
  let options_inactive = require("../../assets/images/options_inactive.png");
  
  return (
    <Tab.Navigator
      initialRouteName="ApplyScreen"
      tabBarOptions=  {styles.tabBarStyle}
    >
      <Tab.Screen
        name="ApplyScreen"
        component={ApplyScreen}
        options={{
          tabBarLabel: 'Apply',
          tabBarIcon: ({focused }) => (
            focused ?
              <Image source={applyCard_active} style={styles.navBottomIcons} /> :
              <Image source={applyCard_inactive} style={styles.navBottomIcons} />
          )
        }}
      />
      <Tab.Screen
        name="DashBoardScreen"
        component={DashBoardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({focused }) => (
            focused ?
              <Image source={dashboard_active} style={styles.navBottomIcons} /> :
              <Image source={dashboard_inactive} style={styles.navBottomIcons} />
          ),
        }}
      />
      <Tab.Screen
        name="CardsScreen"
        component={CardsScreen}
        options={{
          tabBarLabel: 'Cards',
          tabBarIcon: ({focused }) => (
            focused ?
              <Image source={card_active} style={styles.navBottomIcons} /> :
              <Image source={card_inactive} style={styles.navBottomIcons} />
          ),
        }}
      />
       <Tab.Screen
        name="OptionsScreen"
        component={OptionsScreen}
        options={{
          tabBarLabel: 'Options',
          tabBarIcon: ({focused }) => (
            focused ?
              <Image source={options_active} style={styles.navBottomIcons} /> :
              <Image source={options_inactive} style={styles.navBottomIcons} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}