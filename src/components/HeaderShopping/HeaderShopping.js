import React from "react";
// import { NavLink } from "react-router-dom";

import "./HeaderShopping.scss";

function HeaderShopping() {
  return (
    <header className="header__Shopping">
      <img
        className="assembler__logo"
        alt="assembler-logo"
        src="https://assets.website-files.com/5d7ac47d34aefe1ecf290ce6/5d7ac68da9740c393a589ee7_logo_org_1.png"
      />
      <ul className="header__ul">
        <li>No sé</li>
        <li>que chuchas</li>
        <li>poner aquí</li>
        <li>Ayuda</li>
        <li>plz</li>
        <li>
          <span role="img" aria-label="mi emoji">
            &#128561;
          </span>
        </li>
      </ul>
      <div className="header__icons">
        <span className="material-icons">search</span>
        <span className="material-icons">shopping_bag</span>
      </div>
    </header>
  );
}

export default HeaderShopping;
