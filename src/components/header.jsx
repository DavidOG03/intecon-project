import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./dropdown";
import { Cross as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  // const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsDropdownVisible(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsDropdownVisible(false);

  // };

  const navbarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);



  return (
    <>
      <header className="flex flex-row justify-between items-end w-full absolute top-0 left-[50%] -translate-x-[50%] pt:0 md:pt-8 pb-4 px-6 z-[100] bg-[#1c1c1c] border-b border-b-[#413F3E]">
        <Link to="/" className="logo">
          <img src="/images/intecon-logo.png" alt="intecon's logo" />
        </Link>
        <nav className="navbar desktop hidden md:block">
          <ul className="uppercase text-[#fff]">
            <li className="inline-block mx-4">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-[#fff]  font-jakarta text-[14px] md:text-[12px] tracking-[0.6px]"
                    : "nav-link text-[#fff]  font-jakarta text-[14px] tracking-[0.6px]"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-[#fff]  font-jakarta text-[14px] tracking-[0.6px]"
                    : "nav-link text-[#fff]  font-jakarta text-[14px] tracking-[0.6px]"
                }
              >
                About US
              </NavLink>
            </li>
            <li className="inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-[#fff]  font-jakarta text-[14px] tracking-[0.6px]"
                    : "nav-link text-[#fff]  font-jakarta text-[14px] tracking-[0.6px]"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className="inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-[#fff]  font-jakarta text-[14px] tracking-[0.6px]"
                    : "nav-link text-[#fff]  font-jakarta text-[14px] tracking-[0.6px]"
                }
              >
                services
              </NavLink>
            </li>
            {/* <li className='inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]'><NavLink to="/projects">projects</NavLink></li> */}
            <Dropdown />
          </ul>
        </nav>

        <nav
          className={`navbar-mobile absolute bg-[#1c1c1c] transition-all ease-in-out duration-500 md:hidden top-0 -right-[100%] h-[100vh] w-[50%] border-l border-l-[#413F3E] ${
            isOpen === true ? "active" : ""
          }`}
          ref={navbarRef}
        >
          <ul className="uppercase text-[#fff] flex flex-col justify-center items-start h-full">
            <li className="inline-block mx-4 my-3 hover:cursor-pointer">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-[#fff] font-jakarta text-[12px] tracking-[0.6px]"
                    : "nav-link text-[#fff]  font-jakarta text-[12px] tracking-[0.6px]"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="inline-block mx-4 my-3 hover:cursor-pointer font-jakarta text-[12px] tracking-[0.6px]">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-[#fff]  font-jakarta text-[12px] tracking-[0.6px]"
                    : "nav-link text-[#fff]  font-jakarta text-[12px] tracking-[0.6px]"
                }
              >
                About US
              </NavLink>
            </li>
            <li className="inline-block mx-4 my-3 hover:cursor-pointer font-jakarta text-[12px] tracking-[0.6px]">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-[#fff]  font-jakarta text-[12px] tracking-[0.6px]"
                    : "nav-link text-[#fff]  font-jakarta text-[12px] tracking-[0.6px]"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className="inline-block mx-4 my-3 hover:cursor-pointer font-jakarta text-[12px] tracking-[0.6px]">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-[#fff]  font-jakarta text-[12px] tracking-[0.6px]"
                    : "nav-link text-[#fff]  font-jakarta text-[12px] tracking-[0.6px]"
                }
              >
                services
              </NavLink>
            </li>
            <Dropdown/>
            {/* <li
              className="inline-block mx-4 my-3 hover:cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p className="font-jakarta text-[14px] tracking-[0.6px]">
                projects
              </p>
              {isDropdownVisible && (
                <ul className="dropdown">
                  <li className="dropdown-item inline-block ml-2 text-left font-jakarta text-[14px] tracking-[0.6px]">
                    <NavLink to="/highway-bridges-design" className="project">
                      Highway and Bridges Design
                    </NavLink>
                  </li>
                  <li className="dropdown-item inline-block ml-2 text-left font-jakarta text-[14px] tracking-[0.6px]">
                    <NavLink to="/structural-design" className="project">
                      Structural Design
                    </NavLink>
                  </li>
                  <li className="dropdown-item inline-block ml-2 text-left font-jakarta text-[14px] tracking-[0.6px]">
                    <NavLink to="/geosciences" className="project">
                      Geosciences
                    </NavLink>
                  </li>
                  <li className="dropdown-item inline-block ml-2 text-left font-jakarta text-[14px] tracking-[0.6px]">
                    <NavLink to="/non-destructive-testing" className="project">
                      Non-Destructive Testing
                    </NavLink>
                  </li>
                </ul>
              )}
            </li> */}
          </ul>
        </nav>

        <div className="contact-info absolute  flex-row justify-end items-center gap-6 top-2 right-10 hidden md:flex">
          <div className="email flex flex-row items-center gap-2">
            <img
              src="/images/envelope.svg"
              alt="envelope.svg"
              className="inline-block w-4"
            />
            <a
              href="mailto:intecon@intecon.com.ng"
              target="blank"
              className=" text-[#fff] font-inter text-[12px]"
            >
              intecon@intecon.com.ng
            </a>
          </div>
          <div className="email flex flex-row gap-2">
            <img
              src="/images/phone-too.svg"
              alt="contact icon"
              className="inline-block w-4"
            />{" "}
            <a href="tel:+2348033242026" className=" text-[#fff] font-inter text-[12px]">
              Call +234 803 324 2026
            </a>
            <a href="tel:+2348033283101" className=" text-[#fff] font-inter text-[12px]">
              +234 803 328 3101
            </a>
          </div>
        </div>
        <Hamburger
          size={34}
          toggled={isOpen}
          toggle={setOpen}
          color="#ffffff"
        />
      </header>
    </>
  );
};

export default Header;
