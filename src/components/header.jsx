import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./dropdown";
import { Cross as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);

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
      <header className="flex flex-row justify-between items-center w-full fixed top-0 left-[50%] -translate-x-[50%] z-[100] bg-[#1c1c1c] border-b border-b-[#413F3E] px-3 lg:px-8">
        <Link to="/" className="logo h-[34px] lg:h-[54px] object-cover">
          <img src="/images/intecon-logo.png" alt="intecon's logo" className="h-full " />
        </Link>
        <nav className="navbar desktop hidden lg:block ">
          <ul className="capitalize text-[#fff] pt-2 pb-2 px-6">
            <li className="inline-block mx-2 xl:mx-3 ">
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
            <li className="inline-block mx-2 xl:mx-3 ">
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
            <li className="inline-block mx-2 xl:mx-3">
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
            <li className="inline-block mx-2 xl:mx-3 ">
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
          className={`navbar-mobile fixed bg-[#1c1c1c] transition-all ease-in-out duration-500 lg:hidden top-0 ${
            isOpen ? "right-0" : "-right-full"
          } h-[100vh] w-[65%] border-l border-l-[#413F3E]`}
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
                Services
              </NavLink>
            </li>
            <Dropdown />
          </ul>
        </nav>

        <div className="contact-info md:border-l-[0px] lg:border-l border-l-[#413F3E] flex-row lg:flex-col xl:flex-row justify-end items-stretch gap-3 xl:gap-6 hidden md:flex px-6 h-full">
          <div className="email flex flex-row items-center gap-2">
            <img
              src="/images/envelope.svg"
              alt="envelope.svg"
              className="inline-block w-3"
            />
            <a
              href="mailto:intecon@intecon.com.ng"
              target="blank"
              className=" text-[#fff] font-inter text-[13px] xl:text-[12px]"
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
            <a href="tel:+2348033242026" className=" text-[#fff] font-inter text-[13px] xl:text-[12px]">
              Call +234 803 324 2026
            </a>
            <a href="tel:+2348033283101" className=" text-[#fff] font-inter text-[13px] xl:text-[12px]">
              +234 803 328 3101
            </a>
          </div>
        </div>
        <div ref={hamburgerRef}>
        <Hamburger
          size={20}
          toggled={isOpen}
          toggle={setOpen}
          color="#0499CF"
        />
        </div>
        
      </header>
    </>
  );
};

export default Header;
