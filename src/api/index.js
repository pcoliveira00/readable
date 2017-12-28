const api = 'http://127.0.0.1:3001';


const headers = {
  Accept: 'application/json',
  Authorization: 'Readable-Project',
};

export const getCategories = () => {
  return fetch(`${api}/categories`, { headers }).then(res => res.json()).then(data => data.categories);
};

export const getPosts = () => {
  return fetch(`${api}/posts`, { headers }).then(res => res.json());
};

export const addPost = (post) => {
  console.log(post);
  console.log(fetch(`${api}/posts`, { headers, method: 'POST', body: JSON.stringify({ ...post }) }).then(res => res.json()).toString());
  return fetch(`${api}/posts`, { headers, method: 'POST', body: JSON.stringify({ ...post }) }).then(res => res.json());
};

