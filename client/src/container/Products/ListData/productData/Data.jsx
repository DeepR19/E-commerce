import React from 'react';
import "./data.css";

export default function Data(data) {
   const done=data.id;

  

  return (
    <div className='prod-page-data1'
        data-key={data.id}
     data-name={data.name}
     data-catogery={data.catogery}
     data-company={data.company}
     data-color={data.color}
     data-shipping={data.shipping}
     data-price={data.price}>
         
        <div className="data-product-img prod-page-data-img">
            <img src={data.img} alt={data.name} />
        </div>

        <div className="prod-page-dats">
            <div className="prod-page-data-details">
                <h4>{data.detail}</h4>
                <h5>{data.price}</h5>
            </div>

            <div className="prod-page-cont">
                <p>Lorem ipsum dol Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias. or sit amet consectetur adipisicing elit. Earum, dolor?</p>
                <button>DETAILS</button>
            </div>
        </div>

    </div>
  )
}
