import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import courseReducer from '../reducers/courseReducer';
import studentReducer from '../reducers/studentReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  students: studentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
