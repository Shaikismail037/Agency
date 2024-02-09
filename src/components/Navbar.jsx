import { useEffect } from "react";
import { useState } from "react";
import { navLink } from "./constants";
import { logo } from "../assets/index";

import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // for when scrolling,navbar will be sticky
  useEffect(() => {
    const handleScrool = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScrool);

    return () => {
      window.addEventListener("scroll", handleScrool);
    };
  }, []);



  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 bg-dark transition-all duration-300 ease-in"
            : "transition-all duration-300 ease-in"
        }`}
      >
        {/* For large Devices */}
        <div className="flex justify-between items-center text-base gap-6">
          {/* logo */}
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          {/* menu for large Devices */}

              <ul className=" md:flex space-x-12 hidden navitems">
                {
                  navLink.map(({link,path})=> <Link to={path} key={path} activeClass="active" spy={true} smooth={true} offset={-100} className="block text-white uppercase hover:text-orange cursor-pointer">{link}</Link>)
                }

              </ul>

          <div className=" space-x-12 hidden lg:flex items-center">
            <button className=" bg-transparent text-white p-2 ">
              <FaBarsStaggered className="2-4 h-4 text-white hover:text-orange " />
            </button>
          </div>

          {/* {menu btn,visible on mobile screen only} */}
          <div className=" md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBarsStaggered className="text-white h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* { navitems for small devices } */}

        <div
          className={` list-none space-y-4 px-4 mt-14 py-7 bg-dark transition-all duration-300 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
                {
                  navLink.map(({link,path})=> <Link to={path} key={path} activeClass="active" spy={true} smooth={true} offset={-100} className="block text-white uppercase hover:text-orange cursor-pointer">{link}</Link>)
                }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
