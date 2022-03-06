import React from 'react';
import Img from "../../../images/alarm.PNG"

export default function Data() {
  return (
    <div className="data-product">
        <div className="data-product-img">
            <img src={Img} alt="alarm" />
        </div>
        <div className="data-product-details">
            <h5>Radio</h5>
            <h6>$599.99</h6>
        </div>
    </div>
  )
}
