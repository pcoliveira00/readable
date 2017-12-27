import { LOAD_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, REMOVE_COMMENT } from '../actions';

const initialState = {
  comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        comments: action.data,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: state.comments.concat(action.data),
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment =>
          (comment.id === action.data.id ? action.data : comment)),
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter((comment) => {
          return (comment.id === action.data.id ?
            ({ ...comment, deleted: true }) :
            comment);
        }),
      };
    default:
      return state;
  }
};
