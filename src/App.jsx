import React from 'react';
import  './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services"
import Shop from "./Components/Shop";
import Profile from "./Components/Profile";
import WishList from "./Components/WishList"
import Cart from './Components/Cart';
import TrackOrder from './Components/TrackOrder';
import BottomNavigationBar from './Components/BottomNavigationBar';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyNavbar />}>
            <Route index element={<Home />} />
            <Route path="About" element= {<About/>} />
            <Route path="Services" element={<Services/>} />
            <Route path="Contact" element={<Contact />} />
            <Route path="sHOP" element={<Shop/>} />
            <Route path="WishList" element ={<WishList/>} />
            <Route path="/TrackOrder" element={<TrackOrder />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
        <BottomNavigationBar />
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);