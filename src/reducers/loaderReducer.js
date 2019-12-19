const loaderReducer = (state, action) => {
  switch (action.type) {
    case 'handleLoader':
      return {...state, loaderStatus: action.payload};
    default:
      throw new Error('Unrecognized action');
  }
};

export default loaderReducer;
