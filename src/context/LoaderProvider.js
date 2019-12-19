import React, {useReducer, useMemo} from 'react';
import PropTypes from 'prop-types';
import loaderReducer from '../reducers/loaderReducer';

const initialState = {
  loaderStatus: false,
};

const initialContext = [{...initialState}, () => {}];

export const LoaderContext = React.createContext(initialContext);

const updater = (state, update) => {
  return {...state, ...update};
};

export function LoaderProvider(props) {
  const [loaderState, dispatch] = useReducer(loaderReducer, initialState);
  const value = useMemo(() => [loaderState, dispatch], [loaderState]);

  return (
    <LoaderContext.Provider value={value}>
      {props.children}
    </LoaderContext.Provider>
  );
}

LoaderProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
