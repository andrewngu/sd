export function callApi(URL, obj = {}) {
  const options = { ...obj, credentials: 'same-origin', headers: { 'Authorization': 'Bearer 8aef9517-3070-4090-b55e-83296cee8cd1' } };
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
