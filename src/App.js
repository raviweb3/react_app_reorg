import React from 'react';
import { ApolloProvider } from "@apollo/react-hooks";

import AppNavigation from './framework/AppNavigation';
import 'react-native-gesture-handler';
import {AuthProvider} from './context/AuthProvider';
import apolloClient from './Adapters/getClient';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <AppNavigation/>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
