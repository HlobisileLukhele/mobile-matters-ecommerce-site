import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CategoryIcon from '@mui/icons-material/Category';

const BottomNavigationBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div className="container-fluid bottom-navbar .d-xxl-none .d-xl-none .d-lg-none .d-md-none">
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/profile" className="nav-link">
          <BottomNavigationAction label="Profile" className="bottom-icon" icon={<AccountCircleIcon />} />
       </Link>

       <Link to="/WishList" className="nav-link">
          <BottomNavigationAction label="Wishlist" className="bottom-icon" icon={<FavoriteIcon />} />
       </Link>

       <Link to="/Cart" className="nav-link">
       <BottomNavigationAction label="Cart" className="bottom-icon" icon={<AddShoppingCartIcon />} />
       </Link>

       <Link to="/TrackOrder" className="nav-link">
       <BottomNavigationAction label="Track Order" className="bottom-icon" icon={<LocalShippingIcon />} />
       </Link>
       <Link to="/TrackOrder" className="nav-link">
       <BottomNavigationAction label="Track Order" className="bottom-icon" icon={<CategoryIcon />} />
       </Link>
      </BottomNavigation>
    </Box>
    </div>
  );
}

export default BottomNavigationBar;