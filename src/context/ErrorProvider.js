import React, {useReducer, useMemo} from 'react';
import PropTypes from 'prop-types';

const initialState = {
  errorStatus: false,
  errorMessage: '',
  errorCode: NaN,
};

const initialContext = [{...initialState}, () => {}];

export const ErrorContext = React.createContext(initialContext);

const updater = (state, update) => {
  return {...state, ...update};
};

export function ErrorProvider(props) {
  const [errorState, updateError] = useReducer(updater, initialState);
  const value = useMemo(() => [errorState, updateError], [errorState]);

  return (
    <ErrorContext.Provider value={value}>
      {props.children}
    </ErrorContext.Provider>
  );
}

ErrorProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
