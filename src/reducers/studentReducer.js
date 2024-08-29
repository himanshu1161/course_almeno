import { MARK_COURSE_COMPLETED } from '../actions/types';

const initialState = {
  enrolledCourses: [  
    {
      "id": 1,
      "name": "Introduction to React Native",
      "instructor": "John Doe",
      "description": "Learn the basics of React Native development and build your first mobile app.",
      "enrollmentStatus": "Open",
      "thumbnail": "/images/1.png",
      "duration": "8 weeks",
      "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
      "location": "Online",
      "prerequisites": ["Basic JavaScript knowledge", "Familiarity with React"],
      "syllabus": [
        {
          "week": 1,
          "topic": "Introduction to React Native",
          "content": "Overview of React Native, setting up your development environment."
        },
        {
          "week": 2,
          "topic": "Building Your First App",
          "content": "Creating a simple mobile app using React Native components."
        }
      ],
      "students": [
        {
          "id": 101,
          "name": "Alice Johnson",
          "email": "alice@example.com"
        },
        {
          "id": 102,
          "name": "Bob Smith",
          "email": "bob@example.com"
        }
      ],
      "progress": 85, 
      "dueDate": "2024-12-31"

    },
    {
      "id": 2,
      "name": "Introduction to Angular",
      "instructor": "Emily Clark",
      "description": "Get started with Angular for web development.",
      "enrollmentStatus": "Open",
      "thumbnail": "/images/2.png",
      "duration": "10 weeks",
      "schedule": "Wednesdays and Fridays, 7:00 PM - 9:00 PM",
      "location": "Online",
      "prerequisites": ["Basic JavaScript knowledge"],
      "syllabus": [
        {
          "week": 1,
          "topic": "Introduction to Angular",
          "content": "Overview of Angular and setting up your development environment."
        },
        {
          "week": 2,
          "topic": "Building Your First Angular App",
          "content": "Creating a basic web application using Angular components."
        }
      ],
      "students": [
        {
          "id": 104,
          "name": "Diana Prince",
          "email": "diana@example.com"
        },
        {
          "id": 105,
          "name": "Bruce Wayne",
          "email": "bruce@example.com"
        }
      ],"progress": 20, 
      "dueDate": "2024-12-31" 

    },
    {
      "id": 3,
      "name": "Advanced React Native",
      "instructor": "Jane Smith",
      "description": "Deep dive into advanced concepts of React Native.",
      "enrollmentStatus": "In Progress",
      "thumbnail": "/images/1.png",
      "duration": "6 weeks",
      "schedule": "Mondays and Wednesdays, 5:00 PM - 7:00 PM",
      "location": "Online",
      "prerequisites": ["Introduction to React Native"],
      "syllabus": [
        {
          "week": 1,
          "topic": "Advanced Components",
          "content": "Using advanced components in React Native."
        }
      ],
      "students": [
        {
          "id": 103,
          "name": "Charlie Brown",
          "email": "charlie@example.com"
        }
      ],"progress": 45, 
      "dueDate": "2024-12-31" 

    },
    {
      "id": 4,
      "name": "Mastering Vue.js",
      "instructor": "Samuel Johnson",
      "description": "Advanced techniques for developing with Vue.js.",
      "enrollmentStatus": "Open",
      "thumbnail": "/images/vue2.jpg",
      "duration": "8 weeks",
      "schedule": "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
      "location": "Online",
      "prerequisites": ["Basic JavaScript knowledge", "Familiarity with Vue.js"],
      "syllabus": [
        {
          "week": 1,
          "topic": "Advanced Vue.js Concepts",
          "content": "Understanding advanced concepts and patterns in Vue.js."
        },
        {
          "week": 2,
          "topic": "Vue.js State Management",
          "content": "Using Vuex for state management in Vue.js applications."
        }
      ],
      "students": [
        {
          "id": 106,
          "name": "Clark Kent",
          "email": "clark@example.com"
        },
        {
          "id": 107,
          "name": "Lois Lane",
          "email": "lois@example.com"
        }
      ], "progress": 70,
      "dueDate": "2024-12-31"

    },],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_COURSE_COMPLETED:
      return {
        ...state,
        enrolledCourses: state.enrolledCourses.map(course =>
          course.id === action.payload ? { ...course, completed: true } : course
        ),
      };
    default:
      return state;
  }
};

export default studentReducer;
