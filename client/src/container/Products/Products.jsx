import {useState} from "react";
import Filter from "./filter/Filter";
import List from "./ListData/List";
import Header from "../Header/Header";
import Footer from "../mainFooter/Footer"

import "./product.css";

export default function Products() {

  const [data, setData ] = useState();

  const handle = (data11) =>{
    setData(data11);
  }

  return (
    <>
      <Header/>
      <div className="product-container">
        <Filter handle={handle}/>
        <List data={data}/>
      </div>
      <Footer/>
    </>
  )
}
