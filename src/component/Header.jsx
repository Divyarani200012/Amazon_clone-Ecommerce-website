import React from 'react';
import './style.css';
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Badge } from '@mui/material';



const Header = () => {
    const [value, setValue] = React.useState(false);
    
  return (
    <div>
       <header>
        <div class="navbar">
           <div class="nav-logo border">
                <div class="logo"></div>
            </div>
            <div class="nav-address border">
                <p class="add-first">Deliver to</p>
                <div class="add-icon">
                    <FaLocationPin/>
                    <p class="add-se">India</p>
                </div>
            </div>
            <div class="nav-search">
                <select class="search-select">
                    <option >All</option>
                </select>
                <input  placeholder="Search Amazon" class="search-input"/>
                <div class="search-icon">
                <FaSearch />
                </div>
            </div>

            <div class="nav-signin border">
            <p><span>Hello,sign in</span></p>
            <p class="nav-second">Account & Lists</p>
           </div>

           
           <div class="nav-return border">
            <p><span>Returns</span></p>
            <p class="nav-second"> & Orders</p>
           </div>
           <div class="nav-cart border">
            <Badge badgeContent={0} color='warning'>
            <FaShoppingCart/>
            </Badge>
            
             Cart
           </div>
        </div>
        <div class="panel">
            <div class="panel-all">
                <FiMenu/>
                All
            </div>
            <div class="panel-option">
                <p>Today's Deals</p>
                <p>customer Service</p>
                <p>Registry</p>
                <p>Gift Cards</p>
                <p>Sell</p>
            </div>
            <div class="panel-deals">
                Shop deals in Electronics
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header;
