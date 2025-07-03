import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const linkClasses = 'px-3 py-2 rounded-md text-sm font-medium';
  const activeClass = `${linkClasses} bg-gray-900 text-white`;
  const defaultClass = `${linkClasses} text-gray-300 hover:bg-gray-700 hover:text-white`;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 dark:text-gray-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 dark:text-gray-200"
            }
          >
            Tasks
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? activeClass : defaultClass
            }
          >
            Posts
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 dark:text-gray-200"
            }
          >
            About
          </NavLink>
          <ThemeToggle />
        </div>

        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
