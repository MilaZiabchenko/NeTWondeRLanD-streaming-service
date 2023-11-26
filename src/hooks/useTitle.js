import { useEffect } from 'react';

const useTitle = title => {
  const defaultTitle = 'NeTWondeRLanD';

  useEffect(() => {
    document.title = title ? `${title} — ${defaultTitle}` : defaultTitle;

    return () => {
      document.title = defaultTitle;
    };
  }, [title]);
};

export default useTitle;
