import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTableCellsLarge, faList}from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';
import Data from "./productData/Data";

import './list.css';

export default function List() {
  return (
    <div className="product-list">
        <div className="prod-list-header">
          
          <div className="prod-thumbnail">
           <div className='fa-thumb active'>
             <FontAwesomeIcon icon={faTableCellsLarge}></FontAwesomeIcon>
           </div>
           <div className='fa-thumb'>
             <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
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
              <Data/>
              <Data/>
              <Data/>
              <Data/>
              <Data/>
              <Data/>
              <Data/>
            </NavLink>

    </div>
  )
}
