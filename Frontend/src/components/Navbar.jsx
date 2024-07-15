import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary, navb">
      <div className="container-fluid">
        <NavLink className="navbar-brand, navt" to="/"><b><h1>E-SOKO</h1></b></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact className="nav-link, navs" activeClassName="active" to="/">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link, navs" to="./products">PRODUCTS</NavLink>
            </li>
            <li className="nav-item dropdown, navs">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                SIGN IN
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="./Register">SIGN UP</NavLink></li>
                <li><NavLink className="dropdown-item" to="./Login">LOG IN</NavLink></li>
                <li><NavLink className="dropdown-item" to="./Logout">LOGOUT</NavLink></li>
              </ul> 
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link disabled" aria-disabled="true">Disabled</NavLink>
            </li> */}
          </ul>
          <form className="d-flex" onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission logic here
          }}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
