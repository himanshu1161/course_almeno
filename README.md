# CourseCraft

## Project Description

CourseCraft is a web application designed to streamline course management for students. The application provides an intuitive interface to browse available courses, view detailed course information, and manage enrolled courses through a personalized student dashboard. The dashboard allows students to track their progress, see due dates, and mark courses as completed.

## Table of Contents

- [Installation](#installation)
- [Starting the Development Server](#starting-the-development-server)
- [Starting the API Server](#starting-the-api-server)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/himanshu1161/CourseCraft
   cd coursecraft

2. Install Dependencies:
   npm install

## Starting the Development Server
-  To run the development server:
   npm start

## Starting the API Server

1. Run the API Server:
   npx json-server --watch db.json --port 3001

## Features

Course Page

- View Courses: Browse all available courses with brief details.

- Course Details: Click on a course to view detailed information including instructor, duration, description, syllabus, and real-time likes count.

Student Dashboard

- Enrolled Courses: View all enrolled courses with information such as progress bar, due date, and a button to mark courses as completed.

- Mark as Completed: Mark a course as completed and update its status instantly.

- Progress Bar: Track progress with a visual progress bar for each course.


## Technologies Used

- React: Frontend framework for building user interfaces.

- Redux: State management for managing course and student data.

- json-server: Mock API server for development.

- Tailwind CSS: Utility-first CSS framework for styling.

## Project Structure

coursecraft/
├── public/
├── src/
│   ├── actions/
│   ├── components/
│   ├── reducers/
│   ├── store/
│   ├── App.js
│   └── index.js
├── db.json
├── package.json
└── README.md

## API ROUTES

- GET /courses: Fetch all courses.
- GET /courses/id
: Fetch a specific course by ID.

- Example Requests
  Fetch All Courses:
  curl http://localhost:3001/courses

  Fetch Specific Course:
  curl http://localhost:3001/courses/1



