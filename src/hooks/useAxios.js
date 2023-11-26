import { useRef, useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  isLoading: false,
  error: null,
  data: []
};

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_init': {
      return {
        ...initialState,
        isLoading: true
      };
    }

    case 'fetch_success': {
      return {
        ...initialState,
        data: action.payload
      };
    }

    case 'fetch_failure': {
      return {
        ...initialState,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

const useAxios = url => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const cachedDataRef = useRef({});

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    const fetchData = async () => {
      dispatch({ type: 'fetch_init' });

      if (cachedDataRef.current[url]) {
        dispatch({
          type: 'fetch_success',
          payload: cachedDataRef.current[url]
        });

        return;
      }

      try {
        const response = await axios.get(url, { signal: controller.signal });

        cachedDataRef.current[url] = response.data;

        dispatch({
          type: 'fetch_success',
          payload: response.data
        });
      } catch (error) {
        dispatch({ type: 'fetch_failure', payload: error });
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return state;
};

export default useAxios;
