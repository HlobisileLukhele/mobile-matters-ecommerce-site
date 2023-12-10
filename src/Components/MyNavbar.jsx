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

  return (
    <>
      <nav className=" d-flex  navbar navbar-expand-lg navbar-light bg-light text-black">
        <div className="container d-flex">
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand text-md text-black text-sm ml-0 mr-5 text-centered justify-content-center">
            Mobile Matters
          </Link>
          <div
            className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex justify-content-left mr-2 text-black">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Web Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex justify-content-end nav-icons  ">
              <Link to="./TrackOrder">
                <LocalShippingIcon
                  className="nav-icon d-none d-md-block d-lg-block"
                />
              </Link>
              <Link to="./WishList">
                <FavoriteIcon
                  className="nav-icon  d-none d-md-block d-lg-block d-md-block d-lg-block"
                />
              </Link>
              <Link to="./CartItem">
                <AddShoppingCartIcon className="nav-icon" />
              </Link>
              <Link to="/profile">
                <AccountCircleIcon
                  className="nav-icon d-none d-md-block d-lg-block"
                  style={{ cursor: 'pointer' }}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default MyNavbar;
