import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };
  return (
    <div
      className="nav-item max-w-[160px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="nav-link inline-block mx-4 text-[#f0f0f0] font-jakarta text-[12px] md:text-[14px] tracking-[0.6px] hover:cursor-pointer">
        Projects
      </p>
      {isDropdownVisible && (
        <ul className="dropdown ">
          <li className="dropdown-item inline-block ml-2 text-left font-jakarta text-[12px] md:text-[14px] tracking-[0.6px]">
            <NavLink to="/highway-bridges-design" className="project">
              Highway and Bridges Design
            </NavLink>
          </li>
          <li className="dropdown-item inline-block ml-2 text-left font-jakarta text-[12px] md:text-[14px] tracking-[0.6px]">
            <NavLink to="/structural-design" className="project">Structural Design</NavLink>
          </li>
          <li className="dropdown-item inline-block ml-2 text-left font-jakarta text-[12px] md:text-[14px] tracking-[0.6px]">
            <NavLink to="/geosciences" className="project">Geosciences</NavLink>
          </li>
          <li className="dropdown-item inline-block ml-2 text-left font-jakarta text-[12px] md:text-[14px] tracking-[0.6px]">
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
