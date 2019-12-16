import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const HomeScreen = props => {
  const {loadUserData} = props;
  const [something, setSomething] = useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!-{something}</Text>
      <TextInput
        style={{
          borderRadius: 40,
          marginTop: 10,
          marginBottom: 10,
          height: 50,
          width: '80%',
          borderColor: 'white',
          borderWidth: 1,
          padding: 10,
        }}
        placeholder="Write something..."
        onChangeText={value => setSomething(value)}
        value={something}
      />
      <Button
        title="Upload something..."
        onPress={() => loadUserData(value)}
        color="black"
      />
    </View>
  );
};

export default HomeScreen;
