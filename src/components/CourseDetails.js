import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourseDetails } from '../actions/courseActions';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

const CourseDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector(state => state.courses.selectedCourse);

  
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    dispatch(fetchCourseDetails(id));
  }, [dispatch, id]);

  if (!course) return <div className="text-center p-8">Loading...</div>;

  const toggleExpand = (index) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h1 className="text-center text-4xl font-bold mb-4">Course Details</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">{course.name}</h1>
        <div className="space-y-4 text-gray-700">
          <p>
            <span className="font-semibold text-gray-900">Instructor:</span> {course.instructor}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Description:</span> {course.description}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Status:</span> {course.enrollmentStatus}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Duration:</span> {course.duration}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Schedule:</span> {course.schedule}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Location:</span> {course.location}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Pre-requisites:</span> {course.prerequisites.join(', ')}
          </p>
        </div>
        <h2 className="text-2xl font-bold mt-6 text-gray-900">Syllabus</h2>
        <ul className="list-none pl-0 mt-4 space-y-4">
          {course.syllabus.map((item, index) => (
            <li 
              key={index} 
              className="text-gray-700 bg-gray-100 p-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-200"
              onClick={() => toggleExpand(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
                <span>Week {item.week}: {item.topic}</span>
                <span className="text-sm text-gray-500">{expandedItems[index] ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}</span>

              </h3>
              {expandedItems[index] && (
                <p className="text-base mt-2 bg-white rounded-lg p-4 shadow-inner">{item.content}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
