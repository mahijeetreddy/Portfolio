import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (title) => {
    setActive(title);
    setToggle(false); 
  };

  return (
    <nav 
      className={`${styles.paddingX} w-full flex items-center py-3.5 fixed top-0 z-20 transition-colors duration-700 ${
        scrolled ? 'bg-black' : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/portfolio"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
          <p className="text-white text-[20px] font-bold cursor-pointer gradient-text">Mahijeet Reddy</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`relative ${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavClick(link.title)}
            >
              <a href={`#${link.id}`} className="relative inline-block px-4 py-2">
                {link.title}
                {active === link.title && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 rounded-lg transform scale-110"></div>
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`relative font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => handleNavClick(nav.title)}
                >
                  <a href={`#${nav.id}`} className="relative inline-block px-4 py-2">
                    {nav.title}
                    {active === nav.title && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 
                      to-pink-500 opacity-50 rounded-lg transform scale-110"></div>
                    )}
                  </a>  
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
