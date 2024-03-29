import {useLazyQuery} from '@apollo/react-hooks';
import {
  readProfile,
  readKYCStatus,
  readCategory,
  readBrand,
} from './operations';

/**
   * useReadProfile: Wrapper function/hook to read the profile info from the server
   * @param {object} variables the name of the object to be passed
   * variables is a json object with filter, sort, order etc
   * below object is the generic representation of request params object
    const variables = {
      where: {
      profile info based(id, title, firstName, lastName etc),
      user: {
        user info based(id, loginID, password, role etc)
      },
      masterList_Some: 
      {
        profile info based(id, title, firstName, lastName etc),
        user: 
        {
        user info based(id, loginID, password, role etc)
        }
      },
      invitee_Some: {
        invitee info based(id, userNick)
        profile: {
          profile info based(id, title, firstName, lastName etc),
          user: 
          {
          user info based(id, loginID, password, role etc)
          }
        },
        card: {
          card info based(id, account number etc)
        }
      }
      },
      orderBy: {
        profile info based sorting(id, title ASC or DESC etc)
      },
      skip: Integer to skip the records,
      after: String,
      before: String,
      first: Integer,
      last: Integer
    }
   * @returns {object} params, the name of the object returned from the function/hook
   * example response from below function/hook would look like this
   params = {
    startApi: func,
    response: {
      loading: boolean( returns true if completed),
      error: Object( we can get the message by error.message){
        message: String
      },
      data: Object(response came from graphql server){
        readProfile: {
          id, title etc
        }
      }
    }
  }
**/

function useReadProfileQuery() {
  const params = {
    startApi: () => {},
    response: {},
  };
  try {
    const [doReadProfile, profileResponse] = useLazyQuery(readProfile);
    params.startApi = doReadProfile;
    params.response = profileResponse;
  } catch (e) {
    console.log('error in catch', e.message);
    params.response = {
      loading: false,
      error: e.message,
    };
  }

  return params;
}

/**
 * useReadKYCStatus: Wrapper function/hook, to read the Kyc status of current logged in user
 * @returns {object} params, the name of the object returned from the function/hook
 * example response from below function/hook would look like this
   params = {
    startApi: func,
    response: {
      loading: boolean( returns true if completed),
      error: Object( we can get the message by error.message){
        message: String
      },
      data: Object(response came from graphql server){
        readKYCStatus: {
          
        }
      }
    }
  }
 */
function useReadKYCStatusQuery() {
  const params = {
    startApi: () => {},
    response: {},
  };
  try {
    const [doReadKYCStatus, kycResponse] = useLazyQuery(readKYCStatus);
    params.startApi = doReadKYCStatus;
    params.response = kycResponse;
  } catch (e) {
    console.log('error in catch', e.message);
    params.response = {
      loading: false,
      error: e.message,
    };
  }

  return params;
}

/**
 * useReadCategory: Wrapper function/hook to read the categories info from the server
 * @param {object} variables the name of the object to be passed
 * variables is a json object with filter, sort, order etc
 * below object is the generic representation of request params object
 const variables = {
      where: {
      category info based(id, name, displayText etc),
      categoryDisplay: {
        Category Display info based(id, name, publicId etc)
      }
      },
      orderBy: {
        category info based sorting(id, name ASC or DESC etc)
      },
      skip: Integer to skip the records,
      after: String,
      before: String,
      first: Integer,
      last: Integer
    }
 * @returns {object} params, the name of the object returned from the function/hook
 * example response from below function/hook would look like this
 params = {
    startApi: func,
    response: {
      loading: boolean( returns true if completed),
      error: Object( we can get the message by error.message){
        message: String
      },
      data: Object(response came from graphql server){
        readCategory: {
          id, name etc
        }
      }
    }
  }
 **/

function useReadCategoriesQuery(variables) {
  const params = {
    startApi: () => {},
    response: {},
  };
  try {
    const [doReadCategory, categoryResponse] = useLazyQuery(readCategory, {
      variables,
    });
    params.startApi = doReadCategory;
    params.response = categoryResponse;
  } catch (e) {
    console.log('error in useReadCategoriesQuery catch', e.message);
    params.response = {
      loading: false,
      error: e.message,
    };
  }

  return params;
}

/**
 * useReadBrand: Wrapper function/hook to read the brands info from the server
 * @param {object} variables the name of the object to be passed
 * variables is a json object with filter, sort, order etc
 * below object is the generic representation of request params object
 const variables = {
      where: {
      brand info based(id, name, brandName etc),
      category: {
      category info based(id, name, displayText etc),
      categoryDisplay: {
        Category Display info based(id, name, publicId etc)
      }
      }
      },
      orderBy: {
        category info based sorting(id, name ASC or DESC etc)
      },
      skip: Integer to skip the records,
      after: String,
      before: String,
      first: Integer,
      last: Integer
    }
 * @returns {object} params, the name of the object returned from the function/hook
 * example response from below function/hook would look like this
 params = {
    startApi: func,
    response: {
      loading: boolean( returns true if completed),
      error: Object( we can get the message by error.message){
        message: String
      },
      data: Object(response came from graphql server){
        readBrand: {
          id, name etc
        }
      }
    }
  }
 **/

function useReadBrandsQuery(variables) {
  const params = {
    startApi: () => {},
    response: {},
  };
  try {
    const [doReadBrand, brandResponse] = useLazyQuery(readBrand, {
      variables,
    });
    params.startApi = doReadBrand;
    params.response = brandResponse;
  } catch (e) {
    console.log('error in useReadBrandsQuery catch', e.message);
    params.response = {
      loading: false,
      error: e.message,
    };
  }

  return params;
}

export {
  useReadProfileQuery,
  useReadKYCStatusQuery,
  useReadCategoriesQuery,
  useReadBrandsQuery,
};
