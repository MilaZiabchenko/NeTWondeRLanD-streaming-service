import { useState, useCallback } from 'react';

const useToggleIndex = initialValue => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(index => {
    setValue(index);
  }, []);

  return [value, toggle];
};

export default useToggleIndex;
