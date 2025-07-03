import useDarkMode from '../hooks/useDarkMode';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 text-gray-200 hover:text-white"
      title="Toggle theme"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
