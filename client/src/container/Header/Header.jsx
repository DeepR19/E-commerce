import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faBars, faXmark, faSignIn, faSignOut, faPersonDotsFromLine} from '@fortawesome/free-solid-svg-icons';
import "./header.css";

export default function Header() {
    const [ac, setAc]= useState(faBars);
    const [size, setSize] = useState(window.innerWidth);

    const user= true;

    useEffect(()=>{
        const ham = document.querySelector(".hamburgar");

        if(size < 611){
            ham.classList.add("active");
        }
        if(size > 611){
            ham.classList.remove("active");
        }

    },[size]);

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
    };

    const logout = async()=>{
        try{
            const res = await fetch('/user/logout',{
                method: "GET",
                headers: {
                    'Content-Type': "application/json"
                }
            });
            const data = await res.json();
            console.log(data)
        }catch(err){
            console.log(err)
        }
    };

    const UserStatus =()=>{
        if(user){
            return(
                <>
                    <NavLink to ='/cart' className="cartLink1" style={{"textDecoration": "none", "color": "#0008"}}>
                        <li>
                            Cart
                            <FontAwesomeIcon icon={faCartShopping} className='fa-header'></FontAwesomeIcon>
                        </li>
                    </NavLink>
                    <li onClick={logout} className="cartLink1" style={{"cursor": "pointer" , "color": "#0008", "fontWeight": "bold"}}>
                        Logout
                        <FontAwesomeIcon icon={faSignOut} className='fa-header'></FontAwesomeIcon>
                    </li>
                </>
            )
        }else{
            return(<>
                <NavLink to ='/login' style={{"textDecoration": "none", "color": "#0009", "fontWeight": "bolder"}}>
                    <li>
                        Login
                        <FontAwesomeIcon icon={faPersonDotsFromLine} className='fa-header'></FontAwesomeIcon>
                    </li>
                </NavLink>
                <NavLink to ='/signup' style={{"textDecoration": "none", "color": "#0009", "fontWeight": "bolder"}}>
                    <li>
                        SignUp
                        <FontAwesomeIcon icon={faSignIn} className='fa-header'></FontAwesomeIcon>
                    </li>
                </NavLink>
                </>
            )
        }
    }


  return (
    <div className="header-container">
        <div className="header-link">
            <NavLink to="/" className='header-nav'>
                <div className="header-logo">
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
                <UserStatus/>
            </div>
        </div>

        <div className="hamburgar" onClick={NavActive}>
            <FontAwesomeIcon icon={ac} className='ham'></FontAwesomeIcon>
        </div>
    </div>
  )
}
