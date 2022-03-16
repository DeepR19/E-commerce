import React, { useState ,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./filter.css";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Filter(filterData) {

    const [done112, setDone112] = useState(false);
    const [clr, setClr] = useState(false);
    const [range, setRange] = useState();
    const [str, setStr] = useState('');
    const [qs, setQs] = useState(true);
    const [query, setQuery] = useState({});
    const location = useLocation()
    const navigate = useNavigate();
    const [cato, setCato] = useState({
        clear: false
    });
    

    useEffect(()=>{
        const handle= async ()=>{
            try {
                if(done112 || clr){

                    const loc = location.search.substring(1, location.search.length);


                    const res = await fetch("/products",{
                        method: "POST",
                        headers:{
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({loc})
                    });
                    const data = await res.json();
                    if(clr){
                        filterData.handle({ok: true});
                    }else{
                        filterData.handle(data.data);
                    }

                }
            } catch (error) {
                console.log(error);
            }
        };

        handle();


        return(
            setDone112(false)
        )
    }, [query, str,clr, location.search , done112, filterData])

    useEffect(()=>{
        const daa=JSON.stringify({query});
        const que = daa.substring(10, daa.length-2);
        const que1 = que.split(",").join("&").replaceAll('"',"");
        const que2 = que1.replaceAll(":","=");

        if(query && query.length <4){
            navigate("/products ")
            return
        }
        navigate(`/products?${que2}`);
    },[navigate, query])


    useEffect(()=>{
        if(qs && query){
            if(Object.keys(query)){
                
                const key = Object.keys(query)
                const value = Object.values(query)
                
                for(let i=0 ; i<key.length; i++){
                    setStr(str.concat(`${key[i]}:${value[i]}&`));
                }
            }
        }
        return(
            setQs(false)
        )

    }, [query, str ,qs]);

    const queryAppend = (cat,att)=>{

        setDone112(true);
        setQuery({...query ,  [cat] : att  });
        setQs(true);
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
        console.log(type);
        const dod = document.querySelectorAll(".prod-page-data1")
        dod.forEach((item)=>{
            const data1 = item.childNodes[1].childNodes[0].childNodes[0].innerHTML;

            if(data1.indexOf(type) === -1){
                item.style.display = "none";
            }
            if(data1.indexOf(type) > -1){
                item.style.display = "block";
            }


        })
        // console.log(dod[0].childNodes[1].childNodes[0].childNodes[0].innerHTML)

    };

    const handleCatogery =(e)=>{
        const item1 = e.target;
        const att = item1.innerHTML.toLowerCase();

        queryAppend("catogery",att);
        
        activeLink(item1);
    }

    const handleColor =(e)=>{
        const item1 = e.target;
        const att = item1.classList[1];
        queryAppend("color",att);
        activeLink(item1);
    }

    const handleCompany =(e)=>{
        const item1 = e.target.value;
        const att = item1.toLowerCase();

        queryAppend("company",att);
    }
    
    const handleShip =(e)=>{
        const item1 = e.target.checked;

        if(item1 === true){
            queryAppend("shipping","free");

        }
        if(item1 === false){
            queryAppend("shipping","all");
        }
    }

    const handleRange=(e)=>{
        const value = String(e.target.value);
        setRange(value);
        queryAppend("price", value)
    }

    const clearFilter =()=>{
        navigate(`/products?clear=all`);
        setStr("");
        setClr(true);

        setTimeout(()=>{
            navigate('/products');
            setClr(false)
        },1000) 
       
    }

    const handleProd =()=>{
        const filter = document.querySelector(".product-filter");
        filter.classList.toggle("active");
        const filter1 = document.querySelector(".prod");
        filter1.classList.toggle("active");
    }




  return (
      <>
      <div className="prod" onClick={handleProd}>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </div>
    <div className="product-filter">
        <input type="text" className='prod-search' placeholder='Search' onChange={searchHandle}/>

        <div className="product-category">
            <h3>Category</h3>

            <div className="prod-cat-list">
                <li onClick={handleCatogery} className='active'>All</li>
                <li onClick={handleCatogery}>Office</li>
                <li onClick={handleCatogery}>LivingRoom</li>
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
                <li onClick={handleColor} className='active all'>All</li>
                <li onClick={handleColor} className='filter-color red' ></li>
                <li onClick={handleColor} className='filter-color green'></li>
                <li onClick={handleColor} className='filter-color black'></li>
                <li onClick={handleColor} className='filter-color yellow'></li>
                <li onClick={handleColor} className='filter-color blue'></li>
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
    </>
  )
}
