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

  const isActive = (paths) => paths.includes(location.pathname);

  return (
    <div
      className="nav-item max-w-[160px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to="#" className={`project-link hover:text-blue nav-link inline-block mx-4 font-jakarta text-[12px] xl:text-[13px] tracking-[0.6px] hover:cursor-pointer ${
          isActive([
            "/highway-bridges-design",
            "/structural-design",
            "/geosciences",
            "/non-destructive-testing",
          ])
            ? "active"
            : ""
        } ${isDropdownVisible === true ? "text-blue" : "text-[#f0f0f0]"}`}>
        Projects
      </Link>
      {isDropdownVisible && (
        <ul className="dropdown ">
          <li className="dropdown-item inline-block ml-2 text-left font-jakarta text-[12px] xl:text-[13px] tracking-[0.6px]" onClick={onLinkClick }>
            <NavLink to="/highway-bridges-design" className="project" >
              Highway and Bridges Design
            </NavLink>
          </li>
          <li className="dropdown-item inline-block ml-2 text-left font-jakarta text-[12px] xl:text-[13px] tracking-[0.6px]" onClick={onLinkClick }>
            <NavLink to="/structural-design" className="project" >Structural Design</NavLink>
          </li>
          <li className="dropdown-item inline-block ml-2 text-left font-jakarta text-[12px] xl:text-[13px] tracking-[0.6px]" onClick={onLinkClick }>
            <NavLink to="/geosciences" className="project" >Geosciences</NavLink>
          </li>
          <li className="dropdown-item inline-block ml-2 text-left font-jakarta text-[12px] xl:text-[13px] tracking-[0.6px]" onClick={onLinkClick }>
            <NavLink to="/non-destructive-testing" className="project">
              Non-Destructive Testing
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
