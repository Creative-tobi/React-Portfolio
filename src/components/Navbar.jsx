import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../components/comp.css";

const Navbar = () => {
  return (
    <>
      <header>
        <nav
          className="p-4 fixed  lg:sticky lg:ml-130  bottom-0 mt-10 h-15 rounded-xl lg:top-20 backdrop-blur border-1 border-amber-200 lg:w-[50%] w-[100%]"
          style={{
            // borderRadius: "0 20px 0 20px",
            backgroundColor: "rgba(221, 221, 221, 0.1)",
          }}>
          <ul className="flex justify-around">    
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-amber-200 font-bold" : "text-white"
            }>
            About
          </NavLink>

          <NavLink
            to="Resume"
            className={({ isActive }) =>
              isActive ? "text-amber-200 font-bold" : "text-white"
            }>
            Resume
          </NavLink>

          <NavLink
            to="Portfolio"
            className={({ isActive }) =>
              isActive ? "text-amber-200 font-bold" : "text-white"
            }>
            Portfolio
          </NavLink>

          <NavLink
            to="Contact"
            className={({ isActive }) =>
              isActive ? "text-amber-200 font-bold" : "text-white"
            }>
            Contact
          </NavLink>
          </ul>

        </nav>
      </header>
    </>
  );
};

export default Navbar;
