import React,{useState} from 'react';
import Img from "../../../assets/objects/alarm.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import "./addCart.css";

export default function AddCart(item) {

    const [id, setId] =useState({});

    const Desc = (e)=>{
        const liv = e.target.parentElement.parentElement;
        let div = liv.childNodes[2].childNodes[1].textContent;
        div = parseInt(div)

        div = div - 1;
        if(div === 0){
            return
        }

        liv.childNodes[2].childNodes[1].textContent = div
        
    }
    const Insc = (e)=>{
        const liv = e.target.parentElement.parentElement;
        let div = liv.childNodes[2].childNodes[1].textContent
        div = parseInt(div)

        div = div + 1;
        if(div === 9){
            return
        }
        liv.childNodes[2].childNodes[1].textContent = div
        
    };


    const handleDelete =async (e)=>{
        try{

            const fa = e.target.parentElement.getAttribute("data-icon");
            let data1 = e.target.parentElement;
            
            if(fa){
                data1= data1.parentElement.parentElement.getAttribute("data-key");
                setId(data1);
            }
            const data = await fetch('/addToCart',{
                method: "delete",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({id}) 
            });
            await data.json();

            
        }catch(e){
            console.log(e);
        }
    };


  return (
    <div className="addCart-container"
    data-key={item.data}
    data-title={item.title}
    data-price={item.price}
    data-color={item.color}
    key={item.key}>
        <div className="addCart-item-detail">
            <img src={Img} alt="" />

            <div className="addCart-item">
                <h3>{item.title}</h3>
                <p>Color: <span>{item.color}</span> </p>
            </div>
        </div>

        <div className="addCart-price">
            ${item.price}
        </div>

        <div className="addCart-quantity" data-name={item.key}>
            <span onClick={Desc}>-</span>
            1
            <span onClick={Insc}>+</span>
        </div>

        <div className="addCart-subtotal">
            ${item.price}
        </div>

        <div className='addCart-trash' onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashCan}  />
        </div>
    </div>
  )
}
