import React from 'react';
import {View, Text} from 'react-native';

const ErrorHandler = () => {
  const [errorState] = React.useContext(ErrorContext);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default ErrorHandler;
