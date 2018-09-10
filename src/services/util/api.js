import axios from 'axios';
// import { API_URL } from './constants';

export const client = () => {
  // axios.defaults.baseURL = API_URL;
  const defaultOptions = [];
  // const defaultOptions = getAuthToken()
  //   ? {
  //     headers: {
  //       Authorization: `Bearer ${getAuthToken()}`
  //     }
  //   }
  //   : {};

  // axios.interceptors.response.use(function(response) {
  //   return response;
  // });

  return {
    get: (url, options = {}) =>
      axios.get(url, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) =>
      axios.post(url, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) =>
      axios.put(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) =>
      axios.delete(url, { ...defaultOptions, ...options })
  };
};

export const fetch = (url, params, method = 'get') => {
  const response = axios({
    method,
    url,
    params
  });
  return response;
};
