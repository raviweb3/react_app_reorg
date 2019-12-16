import React, {useEffect} from 'react';
import SplashScreen from '../Entities/Splash/SplashScreen';
import {AuthContext} from '../context/AuthProvider';
import {navigate} from '../framework/NavigationService';
import {LoaderContext} from '../context/LoaderProvider';

const SplashContainer = () => {
  // const [authState] = React.useContext(AuthContext);
  // const [loaderState, updateLoader] = React.useContext(LoaderContext);
  console.log('splashcontainer');
  // updateLoader(true);

  useEffect(() => {
    setTimeout(() => {
      if (authState.loggedIn) {
        navigate('Home');
      } else {
        // updateLoader({loaderStatus: true});
        navigate('Auth', {screen: 'Login', params: {status: 'successfull'}});
      }
    }, 2000);
  });
  return <SplashScreen />;
};

export default SplashContainer;
