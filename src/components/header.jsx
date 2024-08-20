import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./dropdown";
import { Cross as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target) && hamburgerRef.current &&
    !hamburgerRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="flex flex-row justify-between items-center w-full fixed top-0 left-[50%] -translate-x-[50%] z-[100] bg-blue px-3 py-2 lg:px-8 lg:py-0">
      {/* border-b border-b-[#413F3E] */}
        <Link to="/" className="logo h-[44px] xl:h-[44px] object-cover">
          <img src="/images/intecon-logo.png" alt="intecon's logo" className="h-full " />
        </Link>
        <nav className="navbar desktop hidden lg:block lg:py-2 ">
          <ul className="capitalize text-[#fff] pt-2 pb-2 px-6">
            <li className="inline-block mx-2 ">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-[#fff]  font-jakarta text-[11px] xl:text-[13px] tracking-[0.6px]"
                    : "nav-link text-[#fff]  font-jakarta text-[11px] xl:text-[13px] tracking-[0.6px]"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="inline-block mx-2 ">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-[#fff]  font-jakarta text-[11px] xl:text-[13px] tracking-[0.6px]"
                    : "nav-link text-[#fff]  font-jakarta text-[11px] xl:text-[13px] tracking-[0.6px]"
                }
              >
                About Us
              </NavLink>
            </li>
            <li className="inline-block mx-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-[#fff]  font-jakarta text-[11px] xl:text-[13px] tracking-[0.6px]"
                    : "nav-link text-[#fff]  font-jakarta text-[11px] xl:text-[13px] tracking-[0.6px]"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className="inline-block mx-2 ">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-[#fff]  font-jakarta text-[11px] xl:text-[13px] tracking-[0.6px]"
                    : "nav-link text-[#fff]  font-jakarta text-[11px] xl:text-[13px] tracking-[0.6px]"
                }
              >
                Services
              </NavLink>
            </li>
            <Dropdown />
          </ul>
        </nav>

        <nav
          className={`navbar-mobile fixed bg-blue transition-all ease-in-out duration-500 lg:hidden top-0 shadow-2xl ${
            isOpen ? "right-0" : "-right-full"
          } h-[100vh] w-[65%] border-l border-l-blue`}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
              >
                Services
              </NavLink>
            </li>
            <Dropdown onLinkClick={handleLinkClick} />
          </ul>
        </nav>

        <div className="contact-info md:border-l-[0px] lg:border-l border-l-[#fff] flex-row lg:flex-col xl:flex-row justify-end items-stretch gap-3 xl:gap-6 md:flex px-6 h-full hidden">
          <div className="email flex flex-row items-center gap-2">
            <img
              src="/images/envelope.svg"
              alt="envelope.svg"
              className="inline-block w-3"
            />
            <a
              href="mailto:intecon@intecon.com.ng"
              target="blank"
              className=" text-[#fff] font-inter text-[11px] xl:text-[13px]"
            >
              intecon@intecon.com.ng
            </a>
          </div>
          <div className="email flex flex-row gap-2">
            <img
              src="/images/phone-too.svg"
              alt="contact icon"
              className="inline-block w-3"
            />{" "}
            <a href="tel:+2348033242026" className=" text-[#fff] font-inter text-[11px] xl:text-[13px]">
              Call +234 803 324 2026
            </a>
            <a href="tel:+2348033283101" className=" text-[#fff] font-inter text-[11px] xl:text-[13px]">
              +234 803 328 3101
            </a>
          </div>
        </div>
        <div ref={hamburgerRef}>
        <Hamburger
          size={20}
          toggled={isOpen}
          toggle={setOpen}
          color="#fff"
        />
        {/* #0499CF */}
        </div>
        
      </header>
    </>
  );
};

export default Header;
