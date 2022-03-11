import React,{useEffect, useState} from 'react';
import Header from "../Header/Header";
import Footer from "../mainFooter/Footer";

import AddCart from './addCart/AddCart';

import { NavLink } from 'react-router-dom';

import "./cart.css";

export default function Cart() {
  const [object, setObject] = useState([]);

    useEffect(()=>{
      const handleData = async()=>{
          try{
              const data = await fetch('/addToCart',{
                  "method": "GET",
                  headers: {
                      "Content-Type": "application/json"
                  } 
              });
              const res = await data.json();

              setObject(res);
              
          }catch(e){
              console.log(e);
          }
      };

      handleData();
      
     },[object]);
   
     
   
      

  return (
      <>
        <Header/>

        <div className="cart-container">
            <div className="cart-data">
              <li>Item</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </div>

            <hr />

            <div className="addCart">
              {
                object.map((item)=>{
                  return(
                    
                    <AddCart key={item.index}
                    data={item._id}
                    title={item.title}
                    price={item.price}
                    color={item.color}/>
                  )
                  
                })
              }
              
            </div>

            <hr />

            <div className="cart-buttons">
              <NavLink to='/products'>
                <button className='contShop'>Continue Shopping</button>
              </NavLink>
              <button className='clrShop'>Clear Shopping Cart</button>
            </div>
        </div>

        <div className="addCart-Box">

        <div className="addCart-img"></div>

          <div className="addCart-total">
            <div className="addCart-total-data">
              <div className="addCart-total-calc">
                <div className="addCart-total-calc-title">
                  <h5>Subtotal</h5>
                  <p>Shipping Fee:</p>
                </div>
                <div className="addCart-total-calc-price">
                  <h5>$1,232.90</h5>
                  <p>$5.90</p>
                </div>
              </div>
              <hr />
              <h2>Order Total : $1,234.87</h2>
            </div>
            <button className='addCart-total-button'>LOGIN</button>
          </div>

        </div>

        <Footer/>
      </>
    )
}
