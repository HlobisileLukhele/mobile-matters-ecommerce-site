import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from './Components/MyNavbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Shop from './Components/Shop';
import Profile from './Components/Profile';
import WishList from './Components/WishList';
import CartItem from './Components/CartItem';
import TrackOrder from './Components/TrackOrder';
import BottomNavigationBar from './Components/BottomNavigationBar';
import SearchItem from "./Components/SearchItem";
import Categories from './Components/Categories';
import Andriods from './Components/Categories/Andriods'
import Iphones from './Components/Categories/Iphones';
import Watches from './Components/Categories/Watches';
import Accessories from './Components/Categories/Accessories';
import NotFound from './Components/NotFound';
import SignIn from './Components/GoogleSignIn/SignIn';  

const App = () => {
  return (
    <div className="App">
    <React.Fragment> 
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MyNavbar />}>
              <Route path="/NotFound" element={<NotFound/>} />
              <Route index exact element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Services" element={<Services />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="Shop" element={<Shop />} />
              <Route path="WishList" element={<WishList />} />
              <Route path="/TrackOrder" element={<TrackOrder />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/CartItem" element={<CartItem />} />
              <Route path="/Categories" element={<Categories />} />
              <Route path="/SearchItem" element={<SearchItem />} />
              <Route path="/Accessories" element={<Accessories />} />
              <Route path="/Iphones" element={<Iphones />} />
              <Route path="/Andriods" element={<Andriods />} />
              <Route path="/Watches" element={<Watches />} />
              <Route path="/SignIn" element={<SignIn />} />
            </Route> 
        </Routes>
        <BottomNavigationBar />
      </BrowserRouter>
      </React.Fragment>
    </div>
  );
};


export default App;
