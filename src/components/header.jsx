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
      <header className="flex flex-row justify-between items-center w-full fixed top-0 left-[50%] -translate-x-[50%] z-[100] bg-[#1c1c1c] border-b border-b-[#413F3E]">
        <Link to="/" className="logo h-[24px] lg:h-[34px] object-cover">
          <img src="/images/intecon-logo.png" alt="intecon's logo" className="h-full ml-6" />
        </Link>
        <nav className="navbar desktop hidden md:block pt-0 pb-2 md:pb-0 px-6">
          <ul className="uppercase text-[#fff]">
            <li className="inline-block mx-4">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-[#fff]  font-jakarta text-[12px] md:text-[12px] tracking-[0.6px]"
                    : "nav-link text-[#fff]  font-jakarta text-[12px] tracking-[0.6px]"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="inline-block mx-4 ">
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
            <li className="inline-block mx-4">
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
            <li className="inline-block mx-4 ">
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
            {/* <li className='inline-block mx-4 font-jakarta text-[12px] tracking-[0.6px]'><NavLink to="/projects">projects</NavLink></li> */}
            <Dropdown />
          </ul>
        </nav>

        <nav
          className={`navbar-mobile fixed bg-[#1c1c1c] transition-all ease-in-out duration-500 md:hidden top-0 -right-[100%] h-[100vh] w-[50%] border-l border-l-[#413F3E] ${
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
          </ul>
        </nav>

        <div className="contact-info border-l border-l-[#413F3E] flex-row justify-end items-stretch gap-6 hidden md:flex px-6 h-full">
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
          size={20}
          toggled={isOpen}
          toggle={setOpen}
          color="#ffffff"
        />
      </header>
    </>
  );
};

export default Header;
