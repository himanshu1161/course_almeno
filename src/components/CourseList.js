import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../actions/courseActions';
import CourseListItem from './CourseListItem';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = courses.filter(course => {
      return (
        course.name.toLowerCase().includes(lowerCaseQuery) ||
        course.instructor.toLowerCase().includes(lowerCaseQuery)
      );
    });
    setFilteredCourses(filtered);
  }, [searchQuery, courses]);

  const displayedCourses = searchQuery ? filteredCourses : courses;


  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mt-2 mb-4">Course List</h1>
      <div className="w-[350px] md:w-[600px] flex mb-7">
        <input
          type="text"
          placeholder="Search by course name or instructor"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="flex-grow px-3 py-2 border rounded-md focus:outline-none"
        />
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {displayedCourses.map(course => (
          <CourseListItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
