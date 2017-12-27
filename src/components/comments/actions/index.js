export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UPDATE_COMMENT = 'EDIT_COMMENT';

export function loadComments(comments) {
  return {
    type: LOAD_COMMENTS,
    comments,
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}

export function removeComment(comment) {
  return {
    type: REMOVE_COMMENT,
    comment,
  };
}

export function editComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment,
  };
}
