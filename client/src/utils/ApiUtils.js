/* global fetch */
import { API_TOKEN } from '../constants/ApiConstants';

export function callApi(URL, obj = {}) {
  const options = { ...obj, credentials: 'same-origin', headers: { Authorization: `Bearer ${API_TOKEN}` } };
  return fetch(URL, options)
    .then((response) => {
      if (!response.ok) {
        return response.text()
          .then(text => Promise.reject(text));
      }

      return response.json();
    })
    .catch((err) => { throw err; });
}
