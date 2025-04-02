
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Plots & Villas', path: '/plots-and-villas' },
    { name: 'Resort', path: '/resort' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom mx-auto flex justify-between items-center">
        {/* Logo - Different versions based on scroll state */}
        <Link to="/" className="flex items-center">
          {isScrolled || location.pathname !== '/' ? (
            // Colored logo for scrolled state or non-home pages
            <img 
              src="/public/lovable-uploads/c7858a02-4cbe-484b-b0c6-1078109a9e7f.png" 
              alt="SVN Bay Parck Logo" 
              className="h-12 md:h-16"
            />
          ) : (
            // White logo for transparent header on home page
            <img 
              src="/public/lovable-uploads/36f81013-5426-4b51-859d-ca1fc7a945cd.png" 
              alt="SVN Bay Parck Logo" 
              className="h-12 md:h-16"
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link font-medium ${
                location.pathname === link.path ? 'text-bay-teal after:w-full' : 'text-bay-blue'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-bay-blue focus:outline-none"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block py-2 px-4 rounded-md ${
                      location.pathname === link.path
                        ? 'bg-bay-blue-light text-white'
                        : 'text-bay-blue hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
