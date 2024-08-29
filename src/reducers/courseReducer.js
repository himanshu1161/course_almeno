import { FETCH_COURSES, FETCH_COURSE_DETAILS } from '../actions/types';

const initialState = {
  courses: [],
  selectedCourse: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return { ...state, courses: action.payload };
    case FETCH_COURSE_DETAILS:
      return { ...state, selectedCourse: action.payload };
    default:
      return state;
  }
};

export default courseReducer;
