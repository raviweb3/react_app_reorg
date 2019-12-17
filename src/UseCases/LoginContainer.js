import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import LoginScreen from '../Entities/Login/LoginScreen';
import {useLoginMutation} from '../Adapters/mutations';
import {useReadProfileQuery} from '../Adapters/queries';

const LoginContainer = () => {
  const loginParams = useLoginMutation();
  const profileParams = useReadProfileQuery();
  console.log('check', profileParams.response);

  /**
   * hadleLogin: Handles the login process
   * @param {string} loginID the identity of the user to login
   * @param {string} password the secret key of the user to login
   **/

  const handleLogin = (loginID = '', password = '') => {
    // navigation.navigate('Home');
    loginParams
      .startApi({
        variables: {
          data: {
            loginID: '+449876543210',
            password: '123456',
          },
        },
      })
      .then(async res => {
        console.log('login:', res);
        await AsyncStorage.setItem('jwtToken', res.data.login.token);
        console.log(await AsyncStorage.getItem('jwtToken'));
        profileParams
          .startApi({
            variables: {
              where: {
                user: {
                  id: res.data.login.user.id,
                },
              },
            },
          })
          .then(res => console.log('read profile:', res))
          .catch(err => console.log(err));
      })
      .catch(() => {});
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return <LoginScreen handleLogin={handleLogin} handleSignUp={handleSignUp} />;
};
export default LoginContainer;
