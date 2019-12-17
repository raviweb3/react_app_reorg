import React from 'react';
import HomeScreen from '../Entities/Home/HomeScreen';

const HomeContainer = () => {
  const loadUserData = value => {
    // updateAuth({loggedIn: true});
    // updateUser({
    //   user: {
    //     data: value,
    //   },
    // });
  };

  return <HomeScreen loadUserData={loadUserData} />;
};

export default HomeContainer;
