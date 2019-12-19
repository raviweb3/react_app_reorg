import React, {useContext, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';

const ErrorHandler = () => {
  const [errorState] = useContext(ErrorContext);
  const [loaderState, dispatch] = React.useContext(LoaderContext);

  useEffect(() => {
    console.log(errorState);
    dispatch({type: 'handleLoader', payload: false});
    Alert.alert(
      'Alert Title',
      `Alert msg - ${errorState.errorMessage}`,
      {text: 'OK', onPress: () => console.log('OK Pressed')},

      {cancelable: false},
    );
  }, [errorState]);
  return null;
};

export default ErrorHandler;
