export const LOAD_FILTER = 'LOAD_FILTER';
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export function loadFilter(filter){
  return {
    type: LOAD_FILTER,
    filter,
  };
}

export function addFilter(filter) {
  return {
    type: ADD_FILTER,
    filter,
  };
}

export function removeFilter(filter) {
  return {
    type: REMOVE_FILTER,
    filter,
  };
}
