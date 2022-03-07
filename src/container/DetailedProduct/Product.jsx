import React from 'react';
import Header from "../Header/Header";
import Footer from "../mainFooter/Footer";
import Img1 from "../../images/alarm.PNG";

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import "./Product.css";

export default function Product() {
  return (
    <>
        <Header/>

        <div className="sProduct-container">
            <div className="sProduct-img">
                <div className="main-sProd">
                    <img src={Img1} alt="main" className='sProd-main'/>
                </div>

                <div className="sProduct-side-img">
                    <img src={Img1} alt="side1" />
                    <img src={Img1} alt="side2" />
                    <img src={Img1} alt="side3" />
                </div>
            </div>
            <div className="sProduct-details">
                <h1>Modern Bookself</h1>

                <div className="rating">
                    <div className="rating-star">
                        <FontAwesomeIcon icon={faStar} className='ratingStar'/>
                        <FontAwesomeIcon icon={faStar} className='ratingStar'/>
                        <FontAwesomeIcon icon={faStar} className='ratingStar'/>
                        <FontAwesomeIcon icon={faStar} className='ratingStar'/>
                        <FontAwesomeIcon icon={faStar} className='ratingStar'/>
                    </div>
                    ( 27 customer reviews )
                </div>

                <h3>$399.99</h3>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum soluta magni repellendus optio ducimus ipsa omnis ipsum dicta dolorem id voluptates deserunt ratione aperiam ea error atque, dolorum nesciunt maiores! Non beatae obcaecati veritatis. Nulla voluptatum voluptates iusto praesentium libero pariatur deleniti natus, atque quisquam tenetur non, quod corporis temporibus?</p>

                <div className="additional-details">
                    <div className="add-detail1">
                        <label htmlFor="available">Available:</label>
                        <label htmlFor="brand">Brand:</label>

                    </div>
                    <div className="add-detail2">
                        In Stock
                        Samsung
                    </div>
                </div>

                <hr />

                <div className="sProduct-colors">
                    <h4>Colors:</h4>
                    <div className="sProd-col">
                        <li>red</li>
                        <li>green</li>
                        <li>yellow</li>
                    </div>
                </div>

                <div className="sProduct-quantity">
                    <span>-</span>
                    1
                    <span>+</span>
                </div>

                <NavLink to="/cart">
                    <button>ADD TO CART</button>
                </NavLink>
            </div>
        </div>

        <Footer/>
    </>
  )
}
