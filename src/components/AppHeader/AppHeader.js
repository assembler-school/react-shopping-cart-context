import React from "react";
import { NavLink } from "react-router-dom";

import "./AppHeader.scss";
import Button from "../Button";
import LoginModal from "../LoginModal";

function AppHeader({ showNewProductForm, ...props }) {
  return (
    <header className="bg-primary container-fluid mb-4" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark d-flex justify-content-between align-items-center">
            <div className="navbar-group left-nav">
              <NavLink
                exact
                activeClassName="active"
                className="navbar-brand"
                to="/"
              >
                Home
              </NavLink>

              {showNewProductForm && (
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="active"
                      className="nav-link"
                      to="/new-product"
                    >
                      New Product
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
            <div className="navbar-group right-nav">
              <Button
                type="button"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Log in
              </Button>
              <LoginModal />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
