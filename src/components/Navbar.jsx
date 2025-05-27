import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import logo from '../assets/logo.png';
import SkillsPopup from './SkillsPopup';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <nav 
     className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex items-center justify-start max-w-7xl mx-auto">
        <img src={logo} alt="logo" className="w-12 h-14 mr-2" />
        <p
          className="makeanote-font text-[42px] text-white font-bold cursor-pointer flex transition-colors duration-200 hover:text-blue-400"
          onClick={() => setIsPopupOpen(true)}
        >
          Tiya Verma
        </p>
      </div>
      <SkillsPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </nav>
  );
};

export default Navbar;