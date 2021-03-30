import { useState } from 'react';

const useForm = (initial = {}) => {
  // Create a state objet for our inputs
  const [inputs, setInputs] = useState(initial);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // Return the things we want to surface from tthis custom hook.
  return {
    inputs,
    handleChange,
  };
};

// We are creating a custom hook that will allow us to use as many inputs as we want with the same handleChange function.

export default useForm;
