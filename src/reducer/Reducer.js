import {combineReducers} from 'redux';

import categories from '../components/categories/reducers';
import posts from '../components/posts/reducers';
import comments from '../components/comments/reducers';
import filters from '../components/filters/reducers';

export default combineReducers({
  categories,
  posts,
  comments,
  filters,
});
