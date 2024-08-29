import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markCourseCompleted } from '../actions/courseActions';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector(state => state.students.enrolledCourses);

  const [completedCourses, setCompletedCourses] = useState([]);

  const handleMarkCompleted = (courseId) => {
    dispatch(markCourseCompleted(courseId));
    setCompletedCourses([...completedCourses, courseId]);
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-10 text-center">Enrolled Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {enrolledCourses.map(course => (
          <div 
            key={course.id} 
            className="relative flex flex-col bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                className="h-full w-full object-cover" 
                src={course.thumbnail} 
                alt={course.name} 
              />
            </div>
            <div className="p-4">
              <h2 className="text-[1rem] font-semibold mb-2 text-gray-800">{course.name}</h2>
              <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Instructor:</span> {course.instructor}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Duration:</span> {course.duration}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Due Date:</span> {course.dueDate || 'N/A'}</p>
              
  
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-500 h-2.5 rounded-full" 
                    style={{ width: `${course.progress || 0}%` }} 
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1 text-center">
                  {course.progress || 0}% Completed
                </p>
              </div>

              {completedCourses.includes(course.id) ? (
                <p className="text-green-500 font-semibold text-center text-xl pt-4">Completed</p>
              ) : (
                <button 
                  onClick={() => handleMarkCompleted(course.id)}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md w-full"
                >
                  Mark as Completed
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
