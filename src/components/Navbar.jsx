import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav
          className="p-4 fixed  lg:sticky lg:ml-130  bottom-0 sm:m-10 h-15 rounded-xl lg:top-20 backdrop-blur border-1 border-amber-200 lg:w-[50%] w-[100%]"
          style={{
            // borderRadius: "0 20px 0 20px",
            backgroundColor: "rgba(221, 221, 221, 0.1)",
          }}>
          <ul className="flex justify-around">
            <li>about</li>
            <li>resume</li>
            <li>about</li>
            <li>resume</li>
            {/* <li><Link to="/">About</Link></li>
                    <li><Link to="/Resume">Resume</Link></li>
                    <li><Link to="Portfolio">Portfolio</Link></li>
                    <li><Link to="/Contact">Contact</Link></li> */}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
