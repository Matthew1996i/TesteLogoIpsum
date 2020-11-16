import React from "react";

import "./Header.css";
import backgroundImg from "../../assets/images/thumb-1920-299834 1.jpg";

import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className="mainHeader">
      <NavBar className="navbarHome" />
    </div>
  );
};
export default Header;
