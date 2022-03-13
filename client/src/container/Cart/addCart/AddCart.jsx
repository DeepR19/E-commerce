import React,{useState} from 'react';
import Img from "../../../assets/objects/alarm.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import "./addCart.css";

export default function AddCart(item) {

    const [id, setId] =useState({});

    const [price, setPrice] = useState((item.price));

    // console.log(item.id)
    const Desc = (e)=>{
        const liv = e.target.parentElement.parentElement;
        let div = liv.childNodes[2].childNodes[1].textContent;
        div = parseInt(div)

        div = div - 1;

        let sub1 = price;
        sub1 = (sub1-item.price).toFixed(2);

        if(div === 0){
            return
        }

        liv.childNodes[2].childNodes[1].textContent = div
        
        setPrice(sub1);
        // item.parentCallback(sub1);
        item.subPrice2(item.price);
    }
    const Insc = (e)=>{
        let sub1 = price;
        
        const liv = e.target.parentElement.parentElement;
        let div = liv.childNodes[2].childNodes[1].textContent
        div = parseInt(div)
        
        div = div + 1;
        sub1 = (div*item.price).toFixed(2);
        
        if(div === 9){
            return
        }
        liv.childNodes[2].childNodes[1].textContent = div
  
        setPrice(sub1);
        // item.parentCallback(sub1);
        item.subPrice1(item.price);

    };

    const handleDelete =async (e)=>{
        let data1 = e.target.parentElement.getAttribute("data-data");
        setId(data1);
        try{

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

    const handleDis = (e) =>{
        const div = e.target.parentElement;
        div.style.display ="none";
    }

  return (
    <div className="addCart-container"
    data-title={item.title}
    data-price={item.price}
    data-color={item.color}
    data-data={item.data}
    >
        <div className="addCart-item-detail">
            <img src={Img} alt="main" 
            />

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
            ${price}
        </div>

        <div className='addCart-trash' onDoubleClick={handleDis} onClick={handleDelete} title='make double click'>
            <FontAwesomeIcon icon={faTrashCan} className='trash' />
        </div>
    </div>
  )
}
