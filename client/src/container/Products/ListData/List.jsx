import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTableCellsLarge, faList}from '@fortawesome/free-solid-svg-icons';

import coffee from "../../../assets/objects/coffee1.PNG";
import alarm from "../../../assets/objects/alarm.PNG";
import light from "../../../assets/objects/lamp1.PNG";
import compass from "../../../assets/objects/compass1.PNG";
import battery from "../../../assets/objects/battery.PNG";

import { NavLink } from 'react-router-dom';
import Data from "./productData/Data";

import './list.css';

export default function List() {

  const handleBars1 =()=>{
    const dov = document.querySelector(".product-list-content");
    dov.classList.remove("active");
  };
  const handleBars2 =()=>{
    const dov = document.querySelector(".product-list-content");
    dov.classList.add("active");
  };


  return (
    <div className="product-list">
        <div className="prod-list-header">
          
          <div className="prod-thumbnail">
           <div  onClick={handleBars1}>
             <FontAwesomeIcon className='fa-thumb' icon={faTableCellsLarge}></FontAwesomeIcon>
           </div>
           <div  onClick={handleBars2}>
             <FontAwesomeIcon className='fa-thumb' icon={faList}></FontAwesomeIcon>
           </div>
          </div>
          
          <h6>2 Products Found</h6>

          <hr />

          <div className="prod-list-sort">
            <p>Sort By</p>
            <select name="sort-price" id="">
              <option value="low">Price (Lowest)</option>
              <option value="high">Price (Highest)</option>
            </select>
          </div>
        </div>

      {/*active class for product-list-content  */}
        <NavLink to="/product" className='product-list-content'>
          <Data name="coffee"
            catogery="Bedroom"
            img={coffee}
            detail="Coffee"
            shipping="none"
            color="red"
            company="Oppo"
            price="505.99"/>

          <Data name="alarm"
            catogery="Office"
            img={alarm}
            company="boat"
            color="red"
            shipping="free"
            detail="alarm"
            price="405.99"/>

          <Data name="light"
            catogery="Office"
            img={light}
            company="Philips"
            shipping="none"
            color="green"
            detail="light"
            price="735.99"/>

          <Data name="battery"
            catogery="Bedroom"
            img={battery}
            company="Oppo"
            color="black"
            detail="battery"
            shipping="free"
            price="605.99"/>

          <Data name="compass"
            catogery="Bedroom"
            img={compass}
            company="samsung"
            shipping="free"
            color="yellow"
            detail="compass"
            price="903.99"/>
        </NavLink>

    </div>
  )
}
