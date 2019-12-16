import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {LoaderContext} from '../context/LoaderProvider';

const Loader = props => {
  const [loaderState] = React.useContext(LoaderContext);
  console.log("loader:",loaderState.loaderStatus);
  return loaderState.loaderStatus ? (
    <ActivityIndicator
      style={{
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 999,
      }}
      size="large"
      color="#0000ff"
    />
  ) : null;
};

export default Loader;
