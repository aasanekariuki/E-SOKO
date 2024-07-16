import React, { useState } from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.post('/search', { query: searchQuery });
    if (response.data.results) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navb">
      <div className="container-fluid">
        <NavLink className="navbar-brand navt" to="/">
          <b>E-SOKO</b>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={`nav-link navs ${isActive('/') ? 'active' : ''}`}>
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className={`nav-link navs ${isActive('/products') ? 'active' : ''}`}>
                PRODUCTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/orders" className={`nav-link navs ${isActive('/orders') ? 'active' : ''}`}>
                ORDERS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className={`nav-link navs ${isActive('/cart') ? 'active' : ''}`}>
                CART
              </NavLink>
            </li>
            <li className="nav-item dropdown navs">
              <NavLink to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                SIGN IN
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/register" className="dropdown-item">
                    SIGN UP
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="dropdown-item">
                    LOG IN
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/logout" className="dropdown-item">
                    LOGOUT
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;