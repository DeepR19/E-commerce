import React from 'react';

export default function Data(data) {
  return (
    <div className="data-product">
        <div className="data-product-img">
            <img src={data.img} alt="alarm" />
        </div>
        <div className="data-product-details">
            <h5>{data.label}</h5>
            <h6>{data.prize}</h6>
        </div>
    </div>
  )
}
