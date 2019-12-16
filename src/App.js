import React from 'react';
import AppNavigation from './framework/AppNavigation';
import 'react-native-gesture-handler';
import {AuthProvider} from './context/AuthProvider';
import {LoaderProvider} from './context/LoaderProvider';
import Loader from './abstraction/Loader';

const App = () => {
  return (
    <AuthProvider>
      <LoaderProvider>
        <Loader />
        <AppNavigation />
      </LoaderProvider>
    </AuthProvider>
  );
};

export default App;
