import { SET_FILTER, LOAD_FILTER } from '../actions';

const initialState = {
  filter: 'voteScore',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case LOAD_FILTER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
