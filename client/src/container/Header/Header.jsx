import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Img1 from "../../assets/objects/alarm.PNG"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faBars, faXmark, faSignIn, faSignOut, faPersonDotsFromLine} from '@fortawesome/free-solid-svg-icons';
import "./header.css";


export default function Header () {
    const [ac, setAc]= useState(faBars);
    const size =window.innerWidth;
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [Img, setImg] = useState();
    const [loginImg, setLoginImg] = useState();

    
    const navigate = useNavigate();

    useEffect(()=>{
        const ham = document.querySelector(".hamburgar");

        if(size < 611){
            ham.classList.add("active");
        }
        if(size > 611){
            ham.classList.remove("active");
        }

    },[size]);

    useEffect(()=>{
        const handle = async ()=>{
            try{
                const data = await fetch("/user/info", {
                    method : "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });
                const res = await data.json();

                setToken(res);
            }catch(err){
                setToken(null)
            }
        };
    
        handle();
    },[navigate]);

    useEffect(()=>{
        const getUser = ()=>{
          fetch("http://localhost:5000/auth/login/success",{
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials":true
            } 
          }).then((response)=>{
            if(response.status === 200) return response.json();
            throw new Error("authentication failed");
          }).then(resObj =>{
            setUser(resObj.user);
            setImg(resObj.user.photos[0].value);
          }).catch(error=>{
            console.log(error);
          })
        };
    
    
        getUser();
      },[])

    useEffect(()=>{
        if(user){
            setLoginImg(Img)
        }else{
            setLoginImg(Img1)
        }
    },[user, Img])

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

    const logout =async ()=>{
        try {
            setToken(null);
            
            if(token){
                const data = await fetch("/user/logout",{
                    method: "GET",
                    credentials: "include"
                });
                await data.json();
            }
            
            if(user){
                window.open("http://localhost:5000/auth/logout", "_self");
            }

        } catch (error) {
            console.log(error);
        }
    };

    const UserStatus =()=>{
        if(token || user){
            return(
                <>
                    <NavLink to ='/cart' className="cartLink1"  style={{"textDecoration": "none","color":"#0008"}}>
                        <li>
                            Cart
                            <FontAwesomeIcon icon={faCartShopping} className='fa-header'></FontAwesomeIcon>
                        </li>
                    </NavLink>

                    <div className="user-login-details">
                        <img src={loginImg} alt="user pic" className='login-user-image'/>
                        <div className="user-login-details2">
                            {user? user.displayName || user.username: null}
                            {token? token.user.Fname: null}

                            <li onClick={logout} className="cartLink1"  style={{"textDecoration": "none","background":"Red" ,"color":"#0008", "cursor": "pointer"}}>
                                Logout
                                <FontAwesomeIcon icon={faSignOut} className='fa-header'></FontAwesomeIcon>
                            </li>
                        </div>
                    </div>
                </>
            )
        }else{
            return(<>
            
                <NavLink to ='/login' style={{"textDecoration": "none","color":"#0008"}}>
                    <li>
                        Login
                        <FontAwesomeIcon icon={faPersonDotsFromLine} className='fa-header'></FontAwesomeIcon>
                    </li>
                </NavLink>
                <NavLink to ='/signup' style={{"textDecoration": "none","color":"#0008"}}>
                    <li>
                        SignUp
                        <FontAwesomeIcon icon={faSignIn} className='fa-header'></FontAwesomeIcon>
                    </li>
                </NavLink>
                </>
            )
        }
    };

    // console.log(user)
   

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
