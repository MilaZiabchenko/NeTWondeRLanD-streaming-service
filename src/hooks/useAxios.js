import axios from 'axios';
import { useRef, useReducer, useEffect } from 'react';

const initialState = {
  isLoading: false,
  data: [],
  error: null
};

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_init':
      return {
        ...initialState,
        isLoading: true
      };
    case 'fetch_success':
      return {
        ...initialState,
        data: action.payload
      };
    case 'fetch_failure':
      return {
        ...initialState,
        error: action.payload
      };
    default:
      return state;
  }
};

const useAxios = url => {
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);
  const cachedDataRef = useRef({});

  useEffect(() => {
    const controller = new AbortController();

    if (!url || !url.trim()) return;

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
