import { useState, useCallback } from 'react';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const clearInput = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return {
    value,
    handleChange,
    clearInput
  };
};

export default useInput;
