import React from 'react';
import Img from "../../../../images/alarm.PNG"
import "./data.css";

export default function Data() {
  return (
    <div className='prod-page-data'>
        <div className="data-product-img prod-page-data-img">
            <img src={Img} alt="" />
        </div>

        <div className="prod-page-dats">
            <div className="prod-page-data-details">
                <h4>Deatils</h4>
                <h5>$599.90</h5>
            </div>

            <div className="prod-page-cont">
                <p>Lorem ipsum dol Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias. or sit amet consectetur adipisicing elit. Earum, dolor?</p>
                <button>DETAILS</button>
            </div>
        </div>

    </div>
  )
}
