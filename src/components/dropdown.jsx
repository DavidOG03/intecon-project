import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Dropdown = ({ onLinkClick }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const handleToggleClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const isActive = (paths) => paths.includes(location.pathname);

  return (
    <div
      className="nav-item max-w-[160px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to="#"
        onClick={handleToggleClick}
        className={`project-link hover:text-[#fff] nav-link mx-4 font-jakarta text-[12px] xl:text-[13px] tracking-[0.6px] hover:cursor-pointer flex items-center ${
          isActive([
            "/highway-bridges-design",
            "/structural-design",
            "/geosciences",
            "/non-destructive-testing",
          ])
            ? "active"
            : ""
        } ${isDropdownVisible ? "text-[#fff]" : "text-[#f0f0f0]"}`}
      >
        Projects
        <span className="ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className={` transition-all ${isDropdownVisible ? "rotate-180" : "rotate-0"}`}
          >
            <path
              fill="transparent"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m6 9l6 6l6-6"
            ></path>
          </svg>
        </span>
      </Link>
      {isDropdownVisible && (
        <ul className="dropdown bg-[#]">
          <li
            className="dropdown-item inline-block ml-2 text-left font-jakarta text-[12px] xl:text-[13px] tracking-[0.6px]"
            onClick={onLinkClick}
          >
            <NavLink to="/highway-bridges-design" className="project">
              Highway and Bridges Design
            </NavLink>
          </li>
          <li
            className="dropdown-item inline-block ml-2 text-left font-jakarta text-[12px] xl:text-[13px] tracking-[0.6px]"
            onClick={onLinkClick}
          >
            <NavLink to="/structural-design" className="project">
              Structural Design
            </NavLink>
          </li>
          <li
            className="dropdown-item inline-block ml-2 text-left font-jakarta text-[12px] xl:text-[13px] tracking-[0.6px]"
            onClick={onLinkClick}
          >
            <NavLink to="/geosciences" className="project">
              Geosciences
            </NavLink>
          </li>
          <li
            className="dropdown-item inline-block ml-2 text-left font-jakarta text-[12px] xl:text-[13px] tracking-[0.6px]"
            onClick={onLinkClick}
          >
            <NavLink to="/non-destructive-testing" className="project">
              Non-Destructive Testing
            </NavLink>
          </li>
          <li
            className="dropdown-item inline-block ml-2 text-left font-jakarta text-[12px] xl:text-[13px] tracking-[0.6px]"
            onClick={onLinkClick}
          >
            <NavLink to="/youtube-videos" className="project">
             Project Videos
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
