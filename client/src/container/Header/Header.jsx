import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faPeopleArrows ,faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import "./header.css";

export default function Header() {
    const [ac, setAc]= useState(faBars);
    const [size, setSize] = useState(window.innerWidth);
    useEffect(()=>{
        const ham = document.querySelector(".hamburgar");

        if(size < 611){
            ham.classList.add("active");
        }
        if(size > 611){
            ham.classList.remove("active");
        }

    },[size])
    const NavActive =()=>{
        if(size < 611){
            const nav = document.querySelector(".header-link");
            nav.classList.toggle('active');

            if(nav.classList.contains("active")){
                setAc(faXmark);
            }else{
                setAc(faBars);
            }

        }
    }
  return (
    <div className="header-container">
        <div className="header-link">
            <NavLink to="/" className='header-nav'>
                <div className="header-logo">
                    {/* Deep<span>R19</span> */}
                </div>
            </NavLink>

            <div className="header-navigation">
                <NavLink to='/' className='head-nav-li' onClick={NavActive}>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/about' className='head-nav-li' onClick={NavActive}>
                    <li>About</li>
                </NavLink>
                <NavLink to='/products' className='head-nav-li' onClick={NavActive}>
                    <li>Products</li>
                </NavLink>
                
            </div>

            <div className="header-cart-link">
                <NavLink to='/cart' className="ca" style={{"textDecoration": "none", "color": "#0008"}}>
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

        <div className="hamburgar" onClick={NavActive}>
            <FontAwesomeIcon icon={ac} className='ham'></FontAwesomeIcon>
        </div>
    </div>
  )
}
