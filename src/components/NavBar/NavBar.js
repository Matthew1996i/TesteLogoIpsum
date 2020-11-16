import React, { useState } from "react";

import { Link } from "react-router-dom";

import NavBarToggle from "../NavBarToggle/NavBarToggle";

import "./NavBar.css";
import logo from "../../assets/images/Logo-01.png";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState("BR");

  const toggleLanguage = (value) => {
    setLanguage(value);
  };

  const showMoreProducts = () => {
    const asideNav = document.getElementById("divFortheListProd");
    const navBarDiv = document.getElementById("navbar-div");

    if (!show) {
      asideNav.style.display = "flex";
      navBarDiv.className = "navbar-div-with-submenu";
      setShow(true);
    } else if (show) {
      asideNav.style.display = "none";
      navBarDiv.className = "navbar-div";
      setShow(false);
    }
  };

  const hideMorePorducts = () => {
    const asideNav = document.getElementById("divFortheListProd");
    asideNav.style.display = "none";
    setShow(false);
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg">
        <div className="navbar-div" id="navbar-div">
          <Link className="navbar-brand contentLogo" to="/home">
            <img className="imgLogo" src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav" id="navbar-nav">
              <li className="nav-item">
                <Link
                  onClick={showMoreProducts}
                  className="nav-link"
                  to="/home"
                  style={{
                    color: show ? "green" : "white",
                    fontWeight: show ? "bold" : "none",
                  }}
                >
                  Nossos Produtos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/home"
                  style={{ color: show ? "#606395" : "white" }}
                >
                  Logo Ipsum Transforma
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/home"
                  style={{ color: show ? "#606395" : "white" }}
                >
                  Onde Encontrar
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-light buttonNav"
                  style={{
                    backgroundColor: show ? "white" : "#f8f9fa",
                    borderColor: show ? "white" : "#f8f9fa",
                  }}
                >
                  Comprar Agora
                </button>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/home"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: show ? "#606395" : "white" }}
                >
                  {language}
                  <i className="fas fa-angle-down"></i>
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    onClick={() => toggleLanguage("BR")}
                    value="BR"
                    className="dropdown-item"
                    to="/home"
                  >
                    BR
                  </Link>
                  <Link
                    onClick={() => toggleLanguage("US")}
                    className="dropdown-item"
                    to="/home"
                  >
                    US
                  </Link>
                  <Link
                    onClick={() => toggleLanguage("JP")}
                    className="dropdown-item"
                    to="/home"
                  >
                    JP
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <NavBarToggle />
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
