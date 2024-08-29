import React from 'react';
import { Link } from 'react-router-dom';

const CourseListItem = ({ course }) => (
  <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
    <Link to={`/courses/${course.id}`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.name}
          className="object-cover w-full h-full" 
        />
      </div>
      <div className="p-4">
        <h5 className="text-[1rem] font-semibold text-gray-800 mb-2">
          {course.name}
        </h5>
        <p className="text-sm text-gray-600 mb-4">
          {course.instructor}
        </p>
        <button
          className="w-full py-2 px-4 text-white bg-gray-900 rounded-lg transition-all hover:bg-gray-700"
        >
          {course.duration}
        </button>
      </div>
    </Link>
  </div>
);

export default CourseListItem;
