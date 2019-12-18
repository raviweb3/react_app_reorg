import React, {useEffect} from 'react';
import SplashScreen from '../Entities/Splash/SplashScreen';
import {AuthContext} from '../context/AuthProvider';
import {UserContext} from '../context/userProvider';

const SplashContainer = ({navigation}) => {
  const [authState, updateAuth] = React.useContext(AuthContext);
  const [userState, updateUser] = React.useContext(UserContext);

  console.log('splash auth:', authState, updateAuth);
  console.log('splash user:', userState, updateUser);

  useEffect(() => {
    setTimeout(() => {
      if (authState.loggedIn) navigation.navigate('ApplyScreen');
      else navigation.navigate('ApplyScreen');
    }, 3000);
  });
  return <SplashScreen />;
};

export default SplashContainer;
