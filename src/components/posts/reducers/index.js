import { LOAD_POSTS, LOAD_POST, ADD_POST, UPDATE_POST, REMOVE_POST } from '../actions';

const initialState = {
  posts: [],
  selectedPost: ' ',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.data,
      };
    case LOAD_POST:
      return {
        ...state,
        selectedPost: action.data,
      };
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.add(action.data),
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post => (post.id === action.data.id ? action.data : post)),
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          return (post.id !== action.data.id ? post : null);
        }),
      };
    default:
      return state;
  }
};
