import React from 'react';
import Header from "../Header/Header";
import { NavLink } from 'react-router-dom';
import "./about.css"

export default function About() {
  return (
      <>
      <Header/>
    <div className="about-container">
        <div className="about-img"></div>
        <div className="about-content">
            <h1>Our Story</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta harum voluptatibus assumenda error soluta distinctio rerum ullam dignissimos, quia excepturi pariatur. Praesentium cumque sint nesciunt commodi veritatis laudantium aspernatur maiores esse eligendi nisi rem exercitationem deserunt necessitatibus, dicta totam itaque non cupiditate minus earum nam possimus vero impedit rerum cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatum eum optio tempore deleniti fugit beatae quisquam consequatur eveniet iste nihil voluptates cum quod qui non ab excepturi, reiciendis tempora.</p>

            <NavLink to="/">
                <button>BACK TO HOME</button>
            </NavLink>
        </div>
    </div>
    </>

  )
}
