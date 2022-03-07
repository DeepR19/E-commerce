import React from 'react';
import Header from "../Header/Header";
import Data from "./featureData/Data";
import Footer from "../mainFooter/Footer"

import Img1 from "../../images/camera1.PNG";
import Img2 from "../../images/coffee1.PNG";
import Img3 from "../../images/alarm.PNG";

import { NavLink } from 'react-router-dom';

import "./home.css";
import "./featureData/data.css"

export default function Home() {
  return (
    <>
      <Header/>

      <div className="home-container">
        <div className="home-content">
          <div className="home-data">
            <h3>Design Your Comfort Zone</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, facere nihil adipisci praesentium quidem, hic vitae modi similique nam ad aspernatur labore perferendis eos tempora facilis iste! Soluta eaque aspernatur ex tenetur fugit neque delectus, corporis aliquam quasi veritatis eveniet iure quia dolor ducimus architecto tempore itaque, excepturi corrupti. Beatae?</p>

            <NavLink to="/products">
                <button>SHOP NOW</button>
            </NavLink>

          </div>
          <div className="home-image"></div>
        </div>
      </div>

      <div className="data-container">
        <h1>Featured Products</h1>
        <div className="data-content">
          <Data img={Img1} label="Camera" prize="$599.99"/>
          <Data img={Img2} label="Coffee Mug" prize="$199.99"/>
          <Data img={Img3} label="Alarm Clock" prize="$299.99"/>
        </div>
        
        <NavLink to="/products">
          <button>ALL PRODUCT</button>
        </NavLink>

      </div>


      <Footer/>
    </>

  )
}
