import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Bhavani Industries" className="navbar__logo-image" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Bhavani Industries</span>
            <span className="navbar__logo-tagline">Water Treatment Solutions</span>
          </div>
        </Link>

        <nav className={`navbar__nav ${isMobileMenuOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`navbar__link ${location.pathname === path ? 'navbar__link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="navbar__cta">
            Get Quote
          </Link>
        </nav>

        <button
          className={`navbar__hamburger ${isMobileMenuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
