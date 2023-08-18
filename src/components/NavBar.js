import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const handleClick = () => {
    setShowNavbar(false);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <h2 style={{ color: "#f9f4da", fontSize: "20px" }}>{"<SUBHAM />"}</h2>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <AiOutlineMenu size={30} />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a onClick={() => handleClick()} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={() => handleClick()} href="#skill">
                Skills
              </a>
            </li>
            <li>
              <a onClick={() => handleClick()} href="#project">
                Projects
              </a>
            </li>
            <li>
              <a onClick={() => handleClick()} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
