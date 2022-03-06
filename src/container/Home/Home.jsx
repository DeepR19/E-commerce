import React from 'react';
import Header from "../Header/Header";
import Data from "./featureData/Data";
import Footer from "../mainFooter/Footer"
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

            <button className='home-to-product'>SHOP NOW</button>

          </div>
          <div className="home-image"></div>
        </div>
      </div>

      <div className="data-container">
        <h1>Featured Products</h1>
        <div className="data-content">
          <Data/>
          <Data/>
          <Data/>
        </div>
        
        <button>ALL PRODUCT</button>

      </div>


      <Footer/>
    </>

  )
}
