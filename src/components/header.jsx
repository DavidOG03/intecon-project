import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./dropdown";

const Header = () => {
  const [isNavBar, setIsNavBar] = useState(false);

  return (
    <>
      <header className="flex flex-row justify-between items-end w-full absolute top-0 left-[50%] -translate-x-[50%] pt-8 pb-4 px-6 z-[100] bg-[#035891]">
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
                    ? "nav-link active text-[#fff]  font-jakarta text-[14px] tracking-[0.6px]"
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
          className={`navbar mobile absolute bg-[#110F0E] hidden md:hidden top-0 -right-6 h-[100vh] w-[60%] border-l border-l-[#413F3E] ${
            isNavBar === true ? "active" : ""
          }`}
        >
          <ul className="uppercase text-[#fff] flex flex-col justify-center items-center h-full">
            <li className="inline-block mx-4 my-6">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-[#fff] font-jakarta text-[14px] tracking-[0.6px]"
                    : "nav-link text-[#fff]  font-jakarta text-[14px] tracking-[0.6px]"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="inline-block mx-4 my-6 font-jakarta text-[14px] tracking-[0.6px]">
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
            <li className="inline-block mx-4 my-6 font-jakarta text-[14px] tracking-[0.6px]">
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
            <li className="inline-block mx-4 my-6 font-jakarta text-[14px] tracking-[0.6px]">
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

        <div className="contact-info absolute  flex-row justify-end items-center gap-6 top-2 right-10 hidden md:flex">
          <div className="email flex flex-row gap-2">
            <img
              src="/images/envelope.svg"
              alt="envelope.svg"
              className="w-6"
            />
            <a
              href="mailto:intecon@intecon.com.ng"
              target="blank"
              className=" text-[#fff] font-inter"
            >
              intecon@intecon.com.ng
            </a>
          </div>
          <div className="email flex flex-row gap-2">
            <img
              src="/images/phone-too.svg"
              alt="contact icon"
              className="inline-block w-6"
            />{" "}
            <a href="tel:+2348033242026" className=" text-[#fff] font-inter">
              Call +234 803 324 2026
            </a>
            <a href="tel:+2348033283101" className=" text-[#fff] font-inter">
              +234 803 328 3101
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
