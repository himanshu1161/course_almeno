import { FETCH_COURSES, FETCH_COURSE_DETAILS, MARK_COURSE_COMPLETED } from './types';
import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const fetchCourses = () => async dispatch => {
  try {
    const response = await axios.get(`${API_URL}/courses`);
    dispatch({ type: FETCH_COURSES, payload: response.data });
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};

export const fetchCourseDetails = (courseId) => async dispatch => {
  try {
    const response = await axios.get(`${API_URL}/courses/${courseId}`);
    dispatch({ type: FETCH_COURSE_DETAILS, payload: response.data });
  } catch (error) {
    console.error('Error fetching course details:', error);
  }
};

export const markCourseCompleted = (courseId) => {
  return {
    type: MARK_COURSE_COMPLETED,
    payload: courseId,
  };
};
