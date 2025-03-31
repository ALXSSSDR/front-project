import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Header.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className="logo">
        <Link to="/">Zhukov</Link>
      </div>
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={isOpen ? 'open' : ''}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? (
          <img
            src="src/assets/sun-warm-icon.svg"
            alt="Day Mode"
            className="icon"
          />
        ) : (
          <img
            src="/src/assets/night-icon.svg"
            alt="Night Mode"
            className="icon"
          />
        )}
      </div>
    </header>
  );
};
