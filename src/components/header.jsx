import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./dropdown";

const Header = () => {
  const [isNavBar, setIsNavBar] = useState(false);

  return (
    <>
      <header className="flex flex-row justify-between items-end w-[95%] absolute top-0 left-[50%] -translate-x-[50%] pt-8 pb-4 z-[100] border-b-[0.5px] border-b-[#413F3E] ">
        <Link to="/" className="logo">
          <img src="/images/intecon-logo.png" alt="intecon's logo" />
        </Link>
        <nav className="navbar desktop hidden md:block">
          <ul className="uppercase text-[#f0f0f0]">
            <li className="inline-block mx-4">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]" : "nav-link text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                   isActive ? "nav-link active text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]" : "nav-link text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]"
                }
              >
                About US
              </NavLink>
            </li>
            <li className="inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                   isActive ? "nav-link active text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]" : "nav-link text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className="inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                   isActive ? "nav-link active text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]" : "nav-link text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]"
                }
              >
                services
              </NavLink>
            </li>
            {/* <li className='inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]'><NavLink to="/projects">projects</NavLink></li> */}
            <Dropdown />
          </ul>
        </nav>

        <nav className={`navbar mobile absolute bg-[#110F0E] hidden md:hidden top-0 -right-6 h-[100vh] w-[60%] border-l border-l-[#413F3E] ${isNavBar === true ? "active" : "" }`}>
          <ul className="uppercase text-[#f0f0f0] flex flex-col justify-center items-center h-full">
            <li className="inline-block mx-4 my-6">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]" : "nav-link text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="inline-block mx-4 my-6 font-jakarta text-[14px] tracking-[0.6px]">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                   isActive ? "nav-link active text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]" : "nav-link text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]"
                }
              >
                About US
              </NavLink>
            </li>
            <li className="inline-block mx-4 my-6 font-jakarta text-[14px] tracking-[0.6px]">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                   isActive ? "nav-link active text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]" : "nav-link text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className="inline-block mx-4 my-6 font-jakarta text-[14px] tracking-[0.6px]">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                   isActive ? "nav-link active text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]" : "nav-link text-[#f0f0f0]  font-jakarta text-[14px] tracking-[0.6px]"
                }
              >
                services
              </NavLink>
            </li>
            {/* <li className='inline-block mx-4 font-jakarta text-[14px] tracking-[0.6px]'><NavLink to="/projects">projects</NavLink></li> */}
            <Dropdown />
          </ul>
        </nav>

        <div className="contact-info absolute  flex-row justify-end items-center gap-6 top-2 right-6 hidden md:flex">
          <a
            href="mailto:intecon@intecon.com.ng"
            target="blank"
            className="email flex flex-row gap-2 text-[#f0f0f0] font-inter"
          >
            <img
              src="/images/envelope.svg"
              alt="envelope.svg"
              className="w-6"
            />{" "}
            intecon@intecon.com.ng
          </a>
          <a
            href="tel:+2348033242026"
            className="email flex flex-row gap-2 text-[#f0f0f0] font-inter"
          >
            <img
              src="/images/phone-too.svg"
              alt="contact icon"
              className="inline-block w-6"
            />{" "}
            Call +234 803 324 2026{" "}
            <a href="tel:+2348033283101">+234 803 328 3101</a>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
