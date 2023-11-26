import { useState, useTransition } from 'react';

const useTab = initialValue => {
  const [tab, setTab] = useState(initialValue);
  const [isPending, startTransition] = useTransition();

  const switchTab = nextTab => {
    startTransition(() => {
      if (nextTab !== tab) {
        setTab(nextTab);
      }
    });
  };

  return [tab, switchTab];
};

export default useTab;
