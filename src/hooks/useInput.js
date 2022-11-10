import { useState } from 'react';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    handleChange: e => setValue(e.target.value),
    clearInput: () => setValue(initialValue),
  };
};

export default useInput;
