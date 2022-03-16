import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import Footer from "../mainFooter/Footer";
import Img1 from "../../assets/objects/camera1.PNG";

import {useLocation, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import "./Product.css";


export default function Product(user) {
    const [object, setObject] = useState([]);
    const [comment, setComment] = useState({});
    const [object1, setObject1] = useState({
        title: "",
        price: null,
        _id: "",
        userId:null
    });
    const location = useLocation();
    
    useEffect(()=>{
        const handleData = async()=>{
            try{
                const data = await fetch(location.pathname,{
                    "method": "GET",
                    headers: {
                        "Content-Type": "application/json"
                    } 
                });
                const res = await data.json();

                setObject(res.data);
                setObject1({title: res.data.title,
                    price: res.data.price,
                    _id:res.data._id
                    });
                
            }catch(e){
                console.log(e);
            }
        };

        handleData();
        
    },[location.pathname]);

    const handleCart = async() =>{
        try {
            const data = await fetch("/addToCart",{
                method: 'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object1)
            });
            await data.json();

        } catch (error) {
            console.log(error)
        }
    }


    const final = [];
    const users =[];
    const data=[];
    
    const handleStar = ()=>{
        const fa=<FontAwesomeIcon icon={faStar} className='ratingStar'/>
        
        if(object.rating !== undefined){
            for(let i = 0;i<(object.rating) ; i++){
                users.push(fa)
            }
        }
        if(users !== []){
            for (let  user of users) {
                final.push(user);
            }
        }
    };

    handleStar();
    
    if(object !== undefined && users.length>0){
        object.desc.forEach((item)=>{
            data.push(item);
        })
    }
    
    const son =async ()=>{
        try {
            console.log(user)
            // const data = await fetch(`/product/${user._id}`,{
            //     method: 'POST',
            //     headers:{
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({comment})
            // });
            // await data.json();

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        <Header/>

        <div className="sProduct-container">
            <div className="sProd-data">

                <div className="sProduct-img">
                    <div className="main-sProd" >
                        <img src={Img1} alt="main" className='sProd-main'/>
                    </div>

                    <div className="sProduct-side-img">
                        <img src={Img1} alt="side1" />
                        <img src={Img1} alt="side2" />
                        <img src={Img1} alt="side3" />
                    </div>
                </div>
                
                <div className="sProduct-details">
                    <h1>{object.title}</h1>

                    <div className="rating">
                        <div className="rating-star">
                            {final} 
                        </div>
                        ( 27 customer reviews )
                    </div>

                    <h3>$ {object.price}</h3>

                    <p>
                    {
                        data.map((item)=>{
                            return(
                                    <li key={item.index} style={{"marginTop": "10px"}}>
                                        {item}
                                    </li>
                            )
                        })
                    }
                    </p>

                    <div className="additional-details">
                        <div className="add-detail1">
                            <label htmlFor="available">Available:</label>
                            <label htmlFor="brand">Brand:</label>

                        </div>
                        <div className="add-detail2">
                        <li style={{"listStyle": "none"}}> In Stock</li>

                            <li style={{"listStyle": "none"}}>{object.brand}</li>
                        </div>
                    </div>

                    <hr />

                    <div className="sProduct-colors">
                        <h4>Colors:</h4>
                        <div className="sProd-col">
                            <li>{object.color}</li>
                            
                        </div>
                    </div>

                    

                    <NavLink to="/cart" onClick={handleCart}>
                        <button style={
                            {"marginTop": "20px"}
                        }>ADD TO CART</button>
                    </NavLink>
                
                   
                </div>
            </div>


        </div>

        <Footer/>
    </>
  )
}
