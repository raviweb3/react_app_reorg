import * as React from 'react';

const _navigation = React.createRef();

const navigate = (name, params) => {
  console.log(_navigation);
  _navigation.current && _navigation.current.navigate(name, params);
};

export {_navigation, navigate};
