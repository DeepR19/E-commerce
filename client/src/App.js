import {useState} from "react";
import Home from "./container/Home/Home";
import Error from "./container/404/Error";
import Products from "./container/Products/Products";
import Product from "./container/DetailedProduct/Product";
import About from "./container/About/About";
import Cart from "./container/Cart/Cart";
import Login from "./container/Login/Login";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import SignUp from "./container/signUp/SignUp";

const title= "E-Commerce | DeepR19"

function App() {

  const [user, setUser] = useState({});

  document.title = title;

  const handleUser = (data)=>{
    // setUser(data);
    console.log("app", data)
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/product/:id" element={<Product/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
