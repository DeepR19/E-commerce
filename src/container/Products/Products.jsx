import React from 'react';
import Filter from "./filter/Filter";
import List from "./ListData/List";
import Header from "../Header/Header";
import Footer from "../mainFooter/Footer"

import "./product.css";

export default function Products() {

  

  return (
    <>
      <Header/>
      <div className="product-container">
        <Filter/>
        <List/>
      </div>
      <Footer/>
    </>
  )
}
