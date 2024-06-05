import { useState } from "react";

import logo from "/images/logo.svg";
import humburgerMenu from "/images/icon-hamburger.svg";

const NavLinks = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleOpenMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <nav className="">
        <div className=" flex justify-between items-center ">
          <div className="logo">
            <img src={logo} alt="Sunnyside logo" />
          </div>
          <div>

            <ul className="nav-links hidden w-full md:w-1/3 md:flex md:flex-row md:space-x-6">
            {['about', 'services', 'projects', 'contacts'].map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={`nav-link ${activeLink === link ? 'active' : ''}`}
              onClick={() => handleLinkClick(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
            </ul>
          </div>
          <div className="md:hidden">
            <button type="button" onClick={handleOpenMenu}>
              <img src={humburgerMenu} alt="Humburger Menu" />
            </button>
          </div>
        </div>
        {isOpen && (
          <ul className="menu bg-white font-barlow font-semibold text-[20px] text-grayish-blue leading-6 tracking-[-0.14px] p-4 z-10 flex flex-col justify-around items-center transition ease-in-out duration-300 absolute right-6 mt-8 space-y-4 md:hidden">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contacts">Contact</a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default NavLinks;
