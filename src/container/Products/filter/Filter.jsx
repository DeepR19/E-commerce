import React, { useState } from 'react';
import "./filter.css";

export default function Filter() {
    const [range, setRange] = useState();

    const filter=(type, compareWith)=>{
        const data = document.querySelectorAll(".prod-page-data");

        data.forEach((item)=>{
            const give = item.getAttribute(compareWith).toLowerCase();

            if(type === "all"){
                data.forEach((item)=>{
                    item.style.display = "block";
                });
                return;
            }

            if(give.indexOf(type) > -1){
                item.style.display = "block";
            }
            else{
                item.style.display = "none";
            }

            if(compareWith === "data-price"){
                if(give < type){
                    item.style.display = "block";
                }else{
                    item.style.display = "none";
                }
            }
        })
    };

    const activeLink = (current)=>{
        const parent = current.parentElement.childNodes;

        const att = current.innerHTML.toLowerCase();

        parent.forEach((item)=>{
            const li = item.innerHTML.toLowerCase();
            if(li === att){
                item.classList.add("active");
                return;
            }
            item.classList.remove("active");
        })
    }

    const searchHandle = (e)=>{
        const type = e.target.value;
        filter(type,"data-name");
    };

    const handleCatogery =(e)=>{
        const item1 = e.target;
        const att = item1.innerHTML.toLowerCase();

        activeLink(item1);
        filter(att, "data-catogery");
    }

    const handleColor =(e)=>{
        const item1 = e.target;
        const att = item1.innerHTML.toLowerCase();

        activeLink(item1);
        filter(att, "data-color");
    }

    const handleCompany =(e)=>{
        const item1 = e.target.value;
        const att = item1.toLowerCase();

        filter(att, "data-company");
    }
    
    const handleShip =(e)=>{
        const item1 = e.target.checked;

        if(item1 === true){
            filter("free", "data-shipping");
        }
        if(item1 === false){
            filter("all", "data-shipping");
        }
    }

    const handleRange=(e)=>{
        const value = String(e.target.value);
        setRange(value);
        filter(value, "data-price");
    }

    const clearFilter =()=>{
        filter("all","data-price")
    }

  return (
    <div className="product-filter">
        <input type="text" className='prod-search' placeholder='Search' onChange={searchHandle}/>

        <div className="product-category">
            <h3>Category</h3>

            <div className="prod-cat-list">
                <li onClick={handleCatogery}>All</li>
                <li onClick={handleCatogery}>Office</li>
                <li onClick={handleCatogery}>Living Room</li>
                <li onClick={handleCatogery}>Bedroom</li>
                <li onClick={handleCatogery}>Kids</li>
            </div>
        </div>

        <div className="product-company">
            <h3>Company</h3>

            <select onChange={handleCompany} name="max" id="prod-company">
                <option value="all" >all</option>
                <option value="boat">boat</option>
                <option value="philips">philips</option>
                <option value="oppo" >oppo</option>
                <option value="samsung" >samsung</option>
            </select>
        </div>

        <div className="product-color">
            <h3>Color</h3>
            <div className="prod-color-list">
                <li onClick={handleColor}>All</li>
                <li onClick={handleColor}>red</li>
                <li onClick={handleColor}>green</li>
                <li onClick={handleColor}>black</li>
                <li onClick={handleColor}>yellow</li>
            </div>
        </div>

        <div className="product-price">
            <h3>Price</h3>
            <div className="prod-price-detail">
                <p>$ {range? `${range}.00` :100}</p>
                <input type="range" step="100" min="100" max="1000" onChange={handleRange} name="price" id="" />
            </div>
        </div>

        <div className="product-shipping">
            Free Shipping 
            
            <input type="checkbox" onChange={handleShip} name="shipping" id="shipping" />
        </div>

        <button onClick={clearFilter}>Clear Filter</button>
    </div>
  )
}
