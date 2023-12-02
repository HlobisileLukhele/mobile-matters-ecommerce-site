import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CategoryIcon from '@mui/icons-material/Category';
import FindInPageIcon from '@mui/icons-material/FindInPage';

const BottomNavigationBar = () => {
  const [value, setValue] = React.useState(0);

  return (
<div className="BottomNavigation container-fluid bottom-navbar d-xxl-none d-xl-none d-lg-none d-md-none">
    <Box sx={{ width:380, height:100, position: 'fixed', top:715 }}>
      <BottomNavigation
        showlabel={true}
        value={value}
        onChange={(event, newValue) => {
        setValue(newValue);
        }}
      >
        <Link to="/profile" className="nav-link">
          <BottomNavigationAction label="Acount" className="bottom-icon" icon={<AccountCircleIcon />} />
       </Link>

       <Link to="/WishList" className="nav-link">
          <BottomNavigationAction label="Wishlist" className="bottom-icon" icon={<FavoriteIcon />} />
       </Link>

       <Link to="/Categories" className="nav-link">
       <BottomNavigationAction label="Category" className="bottom-icon" icon={<CategoryIcon />} />
       </Link>

       <Link to="/TrackOrder" className="nav-link">
       <BottomNavigationAction label="Track Order" className="bottom-icon mt-4" icon={<LocalShippingIcon />} />
       </Link>

       <Link to="/SearchItem" className="nav-link">
       <BottomNavigationAction label="Search product" className="bottom-icon mt-4" icon={<FindInPageIcon />} />
       </Link>
      </BottomNavigation>
    </Box>
    </div>
  );
}

export default BottomNavigationBar;