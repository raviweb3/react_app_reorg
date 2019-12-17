import React, {useEffect} from 'react';
import SplashScreen from '../Entities/Splash/SplashScreen';
import {navigate} from '../framework/NavigationService';

const SplashContainer = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('Auth');
    }, 2000);
  });
  return <SplashScreen />;
};

export default SplashContainer;
