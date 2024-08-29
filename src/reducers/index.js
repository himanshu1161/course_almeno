import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import studentReducer from './studentReducer';

export default combineReducers({
  courses: courseReducer,
  students: studentReducer,
});
