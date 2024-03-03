import React, { useContext, useState } from 'react';
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';



const Navbar = () => {
  const [menu,setmunu]=useState("shop");

  const [showMenu, setShowMenu] = useState(false);
  const {getTotalCartItems}=useContext(ShopContext)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>MYSHOP</p>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

        <ul className={`nav-menu ${showMenu ? 'show' : ''}`}>
          <li onClick={()=>{setmunu("shop")}}><Link style={{textDecoration:"none"}} to="/"> Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setmunu("mens")}}><Link style={{textDecoration:"none"}} to="/mens"> Men</Link>  {menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setmunu("womens")}}><Link style={{textDecoration:"none"}} to="/womens"> Women</Link>  {menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setmunu("kids")}}><Link style={{textDecoration:"none"}} to="/kids"> Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login"><button>Login</button></Link>
          <Link to="/cart"><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
