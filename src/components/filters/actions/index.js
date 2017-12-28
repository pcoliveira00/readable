export const LOAD_FILTER = 'LOAD_FILTER';
export const SET_FILTER = 'SET_FILTER';

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter,
  };
}

export function loadFilter() {
  return {
    type: LOAD_FILTER,
  };
}

