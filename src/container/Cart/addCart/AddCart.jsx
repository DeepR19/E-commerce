import React from 'react';
import Img from "../../../assets/objects/alarm.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import "./addCart.css";

export default function AddCart() {
  return (
    <div className="addCart-container">
        <div className="addCart-item-detail">
            <img src={Img} alt="" />

            <div className="addCart-item">
                <h3>Leather Sofa</h3>
                <p>Color: <span>ABC</span> </p>
            </div>
        </div>

        <div className="addCart-price">
            $899.99
        </div>

        <div className="addCart-quantity">
            <span>-</span>
            1
            <span>+</span>
        </div>

        <div className="addCart-subtotal">
            $899.99
        </div>

        <FontAwesomeIcon icon={faTrashCan} className='addCart-trash'></FontAwesomeIcon>
    </div>
  )
}
