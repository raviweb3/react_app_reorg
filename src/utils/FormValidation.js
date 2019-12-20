import { useState, useEffect, useCallback } from 'react';

function FormValidation(stateSchema, validationSchema = {}, callback) {
  const [state, setState] = useState(stateSchema);
  const [disableButton, setDisableButton] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  // Disable button in initial render.
  useEffect(() => {
    setDisableButton(true);
  }, []);

  // For every changed in our state this will be fired
  // To be able to disable the button
  useEffect(() => {
    if (isDirty) {
        setDisableButton(validateState());
    }
  }, [state, isDirty]);

  // Used to disable submit button if there's an error in state
  // or the required field in state has no value.
  // Wrapped in useCallback to cached the function to avoid intensive memory leaked
  // in every re-render in component
  const validateState = useCallback(() => {
    const hasErrorInState = Object.keys(validationSchema).some(key => {
      const isInputFieldRequired = validationSchema[key].required;
      const stateValue = state[key].value; // state value
      const stateError = state[key].error; // state error

      return (isInputFieldRequired && !stateValue) || stateError;
    });

    return hasErrorInState;
  }, [state, validationSchema]);

  // Used to handle every changes in every input
  const handleOnChange = useCallback(
    (object) => {
      setIsDirty(true);
      console.log(object);
      const name = object.name;
      const value = object.text;

      let error = '';
      if (validationSchema[name].required) {
        if (!value) {
          error = 'This is required field.';
        }
      }

      if (validationSchema[name].validator !== null &&
        typeof validationSchema[name].validator === 'object') {
          if(!!validationSchema[name].validator.regEx){
            if (value && !validationSchema[name].validator.regEx.value.test(value)) {
              error = validationSchema[name].validator.regEx.error;
            }
          }

          if(!!validationSchema[name].validator.type){
            if(validationSchema[name].validator.type.value.toString().toLowerCase() == "date"){
              const regEx = /\b[0-9]{4}-([0-1][0-2]|(0)[0-9])-([0-2][0-9]|(3)[0-1])T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}Z\b/
              if(value && !regEx.test(value.toJSON())){
                error = validationSchema[name].validator.type.error;
              }
            }

          }

          if(!!validationSchema[name].validator.minLength){
            if (!!value && value.length < validationSchema[name].validator.minLength.value) {
              error = validationSchema[name].validator.minLength.error;
            }
          }
      }

      setState(prevState => ({
        ...prevState,
        [name]: { value, error },
      }));
    },
    [validationSchema]
  );

  const handleOnSubmit = useCallback(
    event => {
      event.preventDefault();
      // Make sure that validateState returns false
      // Before calling the submit callback function
      if (!validateState()) {
        callback(state);
      }
    },
    [state]
  );

  return { state, disableButton, handleOnChange, handleOnSubmit };
}

export default FormValidation;