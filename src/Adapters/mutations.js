import {useMutation} from '@apollo/react-hooks';
import {login, updateProfile} from './operations';

/**
 * useLoginMutation: Wrapper function/hook, to to login into the application
 * doLogin function argument structure doLogin({
    variables: {
     data: {
       loginID,
       password
      }
  })
 * @returns {object} params, the name of the object returned from the function/hook
 * example response from below function/hook would look like this
 {
    startApi: func,
    response: {
      loading: boolean( returns true if completed),
      error: Object( we can get the message by error.message){
        message: String
      },
      data: Object(response came from graphql server){
        login: {
          token,
          user: {
              loginID
           },
          phoneVerified
        }
      }
    }
  }
 */
function useLoginMutation() {
  const params = {
    startApi: () => {},
    response: {},
  };
  try {
    const [doLogin, loginResponse] = useMutation(login);
    params.startApi = doLogin;
    params.response = loginResponse;
  } catch (e) {
    console.log('error in login hook', e.message);
    params.response = {
      loading: false,
      error: e.message,
    };
  }

  return params;
}

/**
 * useUpdateProfileMutation: Wrapper function/hook, to to login into the application
 * doUpdateProfile function argument structure doUpdateProfile({
        variables: {
          data: {
            id: profileId,(mandatory)
            firstName: fullName,
            lastName: lastName(empty),
            dateOfBirth: new Date(chosenDate),
            phone: phone (from registration),
            email: emailId,
            instantNotification: true,
            marketingNotification: true,
            avatarImage: base64 string,
            status: "KYC_1_STEP_1(2,3,4 etc)"
          }
        }
      })
 * @returns {object} params, the name of the object returned from the function/hook
 * example response from below function/hook would look like this
 {
    startApi: func,
    response: {
      loading: boolean( returns true if completed),
      error: Object( we can get the message by error.message){
        message: String
      },
      data: Object(response came from graphql server){
            id
            firstName
            lastName
            dateOfBirth
            phone
            phoneVerified
            hashDLT
            email
            avatarImage
        }
    }
  }
 */
function useUpdateProfileMutation() {
  const params = {
    startApi: () => {},
    response: {},
  };
  try {
    const [doUpdateProfile, profileResponse] = useMutation(updateProfile);
    params.startApi = doUpdateProfile;
    params.response = profileResponse;
  } catch (e) {
    console.log('error in updateProfile hook', e.message);
    params.response = {
      loading: false,
      error: e.message,
    };
  }

  return params;
}

export {useLoginMutation, useUpdateProfileMutation};
