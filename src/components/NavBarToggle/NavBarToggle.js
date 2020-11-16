import React from "react";
import { Link } from "react-router-dom";

import "./NavBarToggle.css";

import getProducts from "./listObject"; // this file is simulating a noSQL database request

const NavBarToggle = (props) => {
  return (
    <div className="divFortheListProd" id="divFortheListProd">
      <Link to="/" className="linkviewmore">
        Ver todos os produtos
      </Link>
      <ul className="toggleListProducts">
        {getProducts.map((product, index) => {
          return (
            <li key={index}>
              <Link to={product.url}>
                <img src={product.value} alt="" />
                <p>{product.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBarToggle;
