const api = 'http://127.0.0.1:3001';


const headers = {
  Accept: 'application/json',
  Authorization: '123456',
};

export const getCategories = () => {
  return fetch(`${api}/categories`, {headers}).then(res => res.json()).then((data) => data.categories);
};

