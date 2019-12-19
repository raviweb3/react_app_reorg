import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';

import AppNavigation from './framework/AppNavigation';
import 'react-native-gesture-handler';
import apolloClient from './Adapters/getClient';
import Loader from './abstraction/Loader';
import {LoaderProvider} from './context/LoaderProvider';
import {ErrorProvider} from './context/ErrorProvider';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <LoaderProvider>
        <ErrorProvider>
          <Loader />
          <AppNavigation />
        </ErrorProvider>
      </LoaderProvider>
    </ApolloProvider>
  );
};

export default App;
