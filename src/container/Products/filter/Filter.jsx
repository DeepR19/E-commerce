import React from 'react';
import "./filter.css";

export default function Filter() {
  return (
    <div className="product-filter">
        <input type="text" className='prod-search' placeholder='Search'/>

        <div className="product-category">
            <h3>Category</h3>

            <div className="prod-cat-list">
                <li className='active'>All</li>
                <li>Office</li>
                <li>Living Room</li>
                <li>Bedroom</li>
                <li>Kids</li>
            </div>
        </div>

        <div className="product-company">
            <h3>Company</h3>

            <select name="max" id="prod-company">
                <option value="none">all</option>
                <option value="sony">vivo</option>
                <option value="philips">philips</option>
                <option value="oppo">oppo</option>
                <option value="samsung">samsung</option>
            </select>
        </div>

        <div className="product-color">
            <h3>Color</h3>
            <div className="prod-color-list">
                <li className='active'>All</li>
                <li>red</li>
                <li>green</li>
                <li>black</li>
                <li>yellow</li>
            </div>
        </div>

        <div className="product-price">
            <h3>Price</h3>
            <div className="prod-price-detail">
                <p>$555.90</p>
                <input type="range" min="10" max="400" name="price" id="" />
            </div>
        </div>

        <div className="product-shipping">
            Free Shipping 
            
            <input type="checkbox" name="shipping" id="shipping" />
        </div>

        <button>Clear Filter</button>
    </div>
  )
}
