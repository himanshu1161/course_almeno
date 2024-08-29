import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="flex h-screen overflow-hidden font-poppins">
        <Header />
        <div className="flex-1 overflow-y-auto p-4 lg:ml-64 mt-16 lg:mt-0"> 
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  </Provider>
);

export default App;
