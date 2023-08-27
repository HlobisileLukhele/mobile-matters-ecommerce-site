import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const MyNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand justify-content-start!">
            Mobile Matters
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex justify-content-center mr-4">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-end nav-icons .d-sm-none .d-md-block">
          <Link to="/profile">
            <AccountCircleIcon
             className="nav-icon .d-sm-none"
             onClick={toggleLoginForm}
            style={{ cursor: 'pointer' }}
              />
        </Link>
        <Link to="./WishList">
          <FavoriteIcon
           className="nav-icon .d-sm-none" 
           />
        </Link>
        <Link to="./Cart">
       <AddShoppingCartIcon 
       className="nav-icon .d-sm-none" 
       />
       </Link>

       <Link to="./TrackOrder">
       <LocalShippingIcon 
       className="nav-icon .d-sm-none" 
       />
       </Link>
        </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default MyNavbar;
