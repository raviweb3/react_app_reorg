import React from 'react';
import HomeScreen from '../Entities/Home/HomeScreen';
import {AuthContext} from '../context/AuthProvider';
import {UserContext} from '../context/UserProvider';

const HomeContainer = ({navigation}) => {
  const [authState, updateAuth] = React.useContext(AuthContext);
  const [userState, updateUser] = React.useContext(UserContext);

  console.log(authState, updateAuth);
  console.log('login user:', userState, updateUser);
  const loadUserData = value => {
    // updateAuth({loggedIn: true});
    updateUser({
      user: {
        data: value,
      },
    });
  };

  return <HomeScreen loadUserData={loadUserData} hello={'hi'} />;
};

export default HomeContainer;
