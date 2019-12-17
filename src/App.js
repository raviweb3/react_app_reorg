import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';

import AppNavigation from './framework/AppNavigation';
import 'react-native-gesture-handler';
import apolloClient from './Adapters/getClient';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <AppNavigation />
    </ApolloProvider>
  );
};

export default App;
