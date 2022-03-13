import React,{useEffect, useState} from 'react';
import Header from "../Header/Header";
import Footer from "../mainFooter/Footer";

import AddCart from './addCart/AddCart';

import { Navigate, NavLink, useNavigate } from 'react-router-dom';

import "./cart.css";

export default function Cart() {
  const [object, setObject] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate()
  const [state, setState] = useState(true);
  const [sub, setSub] = useState(1);
  const [total, setTotal] = useState(1);
  const shipping = document.querySelector(".cart-shipping")

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
              
              if(state){
                setObject(res);
              }

            }catch(e){
              console.log(e);
            }
          return(
            setState(false)
          )
      };
      handleData();
     },[object, state]);


     useEffect(()=>{
       console.log(object)
       if(object.length>0 ){
        
         const div1 = document.querySelector(".addCart").childNodes;
         let data121 = 0;
         
         div1.forEach((item)=>{
           const data = parseFloat(item.childNodes[3].childNodes[1].textContent);
           data121 += data;
          });
          setSub(data121);
          
          if(shipping){
            const fi = parseFloat(shipping.innerHTML)
            setTotal(sub+fi)
          }
        }
     },[shipping, sub, object])


     useEffect(()=>{
      const handle = async ()=>{
          try{
              const data = await fetch("/user/info", {
                  method : "GET",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  credentials: "include"
              });
              const res = await data.json();
              setUser(res.token);

              if(!res || data.status === 400){
                navigate("/")
              }
              if(res.token){
                navigate('/cart')
              }
          }catch(err){
              console.log(err);
          }
      };
  
      handle();
  },[navigate]);
    

    const handleSub1 = (data)=>{
       const div = document.querySelector(".addCart").childNodes;
       if(div){

         let data112 = 0;
         
         div.forEach((item)=>{
           const data = parseFloat(item.childNodes[3].childNodes[1].textContent);
           data112 += data;
          });
          data112 += data;
          setSub(data112);
          
          
          const sub1 = parseFloat(document.querySelector(".cart-ship-sub").innerHTML) + data;
          
          const fi = parseFloat(shipping.innerHTML)
          setTotal(sub1+fi)
        }
      };


    const handleSub2 = (data)=>{
      const div = document.querySelector(".addCart").childNodes;
      if(div){

          let data112 = 0;
        
          div.forEach((item)=>{
                const data = parseFloat(item.childNodes[3].childNodes[1].textContent);
                data112 += data;
            });
            data112 -= data;
            setSub(data112);
          
            const sub1 = parseFloat(document.querySelector(".cart-ship-sub").innerHTML) - data;
              const fi = parseFloat(shipping.innerHTML)
              setTotal(sub1+fi)
        }
      };


    const clearallCart =async ()=>{
      const dova = document.querySelector(".addCart").childNodes;
      dova.forEach((item)=>{
        item.style.display ="none";
      })

      try {
        const data = await fetch("/deleteCart",{
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        });
        await data.json();
      } catch (error) {
        console.log(error);
      }
    }
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
                    
                    <AddCart
                    key={item._id}
                    data={item._id}
                    title={item.title}
                    price={item.price}
                    color={item.color}
                    subPrice1={handleSub1}
                    subPrice2={handleSub2}/>
                  )
                  
                })
              }
              
            </div>

            <hr />

            <div className="cart-buttons">
              <NavLink to='/products'>
                <button className='contShop'>Continue Shopping</button>
              </NavLink>
              <button className='clrShop' onClick={clearallCart}>Clear Shopping Cart</button>
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
                  <h5 className='cart-ship-sub'>{sub.toFixed(2)}</h5>
                  <p className='cart-shipping'>5.90</p>
                </div>
              </div>
              <hr />
              <h2>Order Total : ${total.toFixed(2)}</h2>
            </div>
            <button className='addCart-total-button'>LOGIN</button>
          </div>

        </div>

        <Footer/>
      </>
    )
}
