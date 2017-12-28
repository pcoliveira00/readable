export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POST = 'LOAD_POSTS';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export function loadPosts(posts) {
  return {
    type: LOAD_POSTS,
    posts,
  };
}

export function loadPost(post) {
  return {
    type: LOAD_POST,
    post,
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function removePost(post) {
  return {
    type: REMOVE_POST,
    post,
  };
}

export function editPost(newPost) {
  return {
    type: UPDATE_POST,
    newPost,
  };
}
