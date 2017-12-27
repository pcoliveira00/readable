import {ADD_FILTER, LOAD_FILTER, REMOVE_FILTER} from '../actions';

const initialState = {
  filters: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FILTER:
      return {
        ...state,
        filters: action.data,
      };
    case ADD_FILTER:
      return {
        ...state,
        filters: state.filters.add(action.data),
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filters: state.filters.filter((filter) => {
          return (filter.name !== action.data.name ? filter : null);
        }),
      };
    default:
      return state;
  }
}