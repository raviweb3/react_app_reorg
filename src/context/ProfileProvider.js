import React, {useReducer, useMemo} from 'react';
import PropTypes from 'prop-types';

const initialState = {
  userProfile: {},
};

const initialContext = [{...initialState}, () => {}];

export const ProfileContext = React.createContext(initialContext);

const updater = (state, update) => {
  return {...state, ...update};
};

export function ProfileProvider(props) {
  const [profileState, updateProfile] = useReducer(updater, initialState);
  const value = useMemo(() => [profileState, updateProfile], [profileState]);

  return (
    <ProfileContext.Provider value={value}>
      {props.children}
    </ProfileContext.Provider>
  );
}

ProfileProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
