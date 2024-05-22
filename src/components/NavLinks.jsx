import logo from "../assets/images/logo.svg";
import humburgerMenu from "../assets/images/icon-hamburger.svg";

const NavLinks = () => {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center ">
          <div className="logo">
            <img src={logo} alt="Sunnyside logo" />
          </div>
          <div>
            <img src={humburgerMenu} alt="Humburger Menu" />
          </div>
        </div>

        <ul className="hidden">
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
      </nav>
    </>
  );
};

export default NavLinks;
