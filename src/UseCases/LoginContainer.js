import React, {useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import LoginScreen from '../Entities/Login/LoginScreen';
import {useLoginMutation} from '../Adapters/mutations';
import {useReadProfileQuery, useReadKYCStatusQuery} from '../Adapters/queries';
import {navigate} from '../framework/NavigationService';
import {LoaderContext} from '../context/LoaderProvider';
import {asyncStoreSave} from '../abstraction/AsyncStore';

const LoginContainer = () => {
  const [loaderState, dispatch] = React.useContext(LoaderContext);
  const loginParams = useLoginMutation();
  const profileParams = useReadProfileQuery();
  const kycParams = useReadKYCStatusQuery();
  // const [countryDetails, setCountryDetails] = useState(countryDetailsState);
  // console.log('check', profileParams.response);

  useEffect(() => {
    handleLoginResponse(loginParams);
  }, [loginParams.response]);

  useEffect(() => {
    handleProfileResponse(profileParams);
  }, [profileParams.response]);

  useEffect(() => {
    handleKycResponse(kycParams);
  }, [kycParams.response]);

  /**
   * handleLoginResponse: Handles the login response
   * @param {string} loginParams hold the login response data
   **/
  const handleLoginResponse = loginParams => {
    dispatch({type: 'handleLoader', payload: loginParams.response.loading});
    if (loginParams.response && loginParams.response.data) {
      console.log(loginParams.response);
      asyncStoreSave('jwtToken', loginParams.response.data.login.token);
      profileParams.startApi({
        variables: {
          where: {
            user: {
              id: loginParams.response.data.login.user.id,
            },
          },
        },
      });
    }
  };

  /**
   * handleProfileResponse: Handles the profile response
   * @param {string} profileParams hold the profile response data
   **/
  const handleProfileResponse = profileParams => {
    dispatch({type: 'handleLoader', payload: profileParams.response.loading});
    if (profileParams.response && profileParams.response.data) {
      console.log(profileParams.response);
      kycParams.startApi();
    }
  };

  /**
   * handleKycResponse: Handles the kyc response
   * @param {string} kycParams hold the kyc response data
   **/
  const handleKycResponse = kycParams => {
    dispatch({type: 'handleLoader', payload: kycParams.response.loading});
    if (kycParams.response && kycParams.response.data) {
      console.log(kycParams.response.data);
      navigate('Home');
    }
  };
  /**
   * handleLogin: Handles the login process
   * @param {string} phoneNumber user phone number
   * @param {string} countryCode user country code
   * @param {string} countryCCA2 user country code name
   * @param {string} password the secret key of the user to login
   **/
  const handleLogin = (
    phoneNumber = '9876543210',
    password = '123456',
    countryCode = '44',
    countryCCA2 = '',
  ) => {
    asyncStoreSave('phoneNumber', phoneNumber);
    asyncStoreSave('countryCode', countryCode);
    asyncStoreSave('cca2', countryCCA2);
    dispatch({type: 'handleLoader', payload: true});
    loginParams.startApi({
      variables: {
        data: {
          loginID: `+${countryCode}${phoneNumber}`,
          password: password,
        },
      },
    });
  };

  /**
   * handleRegisterUser: Handle the navigation flow from login to signup screen
   **/
  const handleRegisterUser = () => {
    navigate('SignUp');
  };

  /**
   * handleResetPassword: Handle the navigation flow from login to reset password screen
   **/
  const handleResetPassword = () => {
    navigate('SignUp');
  };

  return (
    <LoginScreen
      handleLogin={handleLogin}
      handleRegisterUser={handleRegisterUser}
      handleResetPassword={handleResetPassword}
    />
  );
};
export default LoginContainer;
