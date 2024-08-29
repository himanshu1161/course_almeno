import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Import Heroicons for the hamburger menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 text-white fixed w-full lg:w-64 lg:h-screen lg:flex lg:flex-col lg:justify-between transition-all duration-300">
      <div className="flex items-center justify-between p-4 lg:p-8 lg:hidden">
        <h1 className="text-2xl font-semibold">CourseCraft</h1>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      
      <div className="hidden lg:flex flex-col h-full w-full p-4">
        <h1 className="text-2xl font-semibold mb-8">CourseCraft</h1>
        <nav className="flex flex-col flex-1 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Dashboard
              </Link>
            </li>
          
          </ul>
        </nav>
        <div className="mt-auto p-4">
          <p className="text-sm">&copy; 2024 CourseCraft</p>
        </div>
      </div>
      
      <nav
        className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul className="space-y-2 p-4">
          <li>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-700 rounded">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-700 rounded">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
