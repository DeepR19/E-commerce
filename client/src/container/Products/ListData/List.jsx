import React, {useEffect, useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTableCellsLarge, faList}from '@fortawesome/free-solid-svg-icons';

import coffee from "../../../assets/objects/coffee1.PNG";

import { NavLink } from 'react-router-dom';
import Data from "./productData/Data";

import './list.css';

export default function List(data) {

  const [learn, setLearn] = useState();
  const [learn1, setLearn1] = useState();
  const [sort1, setSort] = useState(null);
  const [me , setMe] = useState(true)


  useEffect(()=>{
    console.log(!data)
    if(!me && !data){
      if( data.data.ok){
        setLearn(learn1)
        return
      }
      if(data.data){
        setLearn(data.data);
      }
    }
  },[data.data , data, learn1, me])


  useEffect(()=>{
    const checkUser = async ()=>{
      try{
        if(me){
          const res = await fetch("/data",{
              method: "GET",
              headers: {
                  "Content-Type": "application/json"
              } 
          });
          const data = await res.json();

          setLearn(data.data);
          setLearn1(data.data);
        }
      }catch(e){
          console.log("error",e);
      }
    }

    checkUser();

    return(
      setMe(false)
    )
  },[]);
  

  const handleBars1 =()=>{
    const dov = document.querySelector(".product-list-content");
    dov.classList.remove("active");
  };
  const handleBars2 =()=>{
    const dov = document.querySelector(".product-list-content");
    dov.classList.add("active");
  };


  // useEffect(()=>{
  //     const handle = async()=>{
  //       try {
  //         // console.log(sort1);
  //         const res = await fetch("/data",{
  //           method: "POST",
  //           headers: {
  //               "Content-Type": "application/json"
  //           } ,
  //           body: JSON.stringify({sort1})
  //       });
  //       await res.json();

  //       } catch (error) {
  //       console.log(error); 
  //       }
  //     }
  //   handle();
  // },[sort1]);

  const sortData =async (e)=>{
    
    const price = e.target.value;
    setSort(price);
    
  }

 
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
            <select name="sort-price" onClick={sortData} id="priceSort" >
              <option value="low">Price (Lowest)</option>
              <option value="high">Price (Highest)</option>
            </select>
          </div>
        </div>

      {/*active class for product-list-content  */}
      <div className="product-list-content">
          {
            learn && learn.length >0 ? 
            learn.map(item=>
            <NavLink to={`/product/${item._id}`} className='prod-page-data'>
                <Data name={item.title}
                key={item._id}
                id={item._id}
                catogery="Bedroom"
                img={coffee}
                detail={item.title}
                shipping="none"
                color={item.color}
                desc={item.desc}
                company={item.brand}
                price={item.price} />
            </NavLink>
            )
            
            : <h2>Loading...</h2>
          }
          
          </div>

    </div>
  )
}
