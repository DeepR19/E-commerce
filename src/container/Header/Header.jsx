import React from 'react';
import { NavLink } from 'react-router-dom';

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faPeopleArrows} from '@fortawesome/free-solid-svg-icons';
import "./header.css";

export default function Header() {
  return (
    <div className="header-container">
        <div className="header-link">
            <NavLink to="/" className='header-nav'>
                <div className="header-logo">
                    Deep<span>R19</span>
                </div>
            </NavLink>

            <div className="header-navigation">
                <NavLink to='/' className='head-nav-li'>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/about' className='head-nav-li'>
                    <li>About</li>
                </NavLink>
                <NavLink to='/products' className='head-nav-li'>
                    <li>Products</li>
                </NavLink>
                
            </div>

            <div className="header-cart-link">
                <NavLink to='/cart' style={{"textDecoration": "none", "color": "#000"}}>
                    <li>
                        Cart
                        <FontAwesomeIcon icon={faCartShopping} className='fa-header'></FontAwesomeIcon>
                    </li>
                </NavLink>
                <li>
                    Login
                    <FontAwesomeIcon icon={faPeopleArrows} className='fa-header'></FontAwesomeIcon>
                </li>
            </div>
        </div>

        <div className="header-pages-navigation"></div>
    </div>
  )
}
