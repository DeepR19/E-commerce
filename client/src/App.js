import {useState, useEffect} from "react";
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

  const [user, setUser] = useState(null);
  const [user1, setUser1] = useState(null);

  document.title = title;
  useEffect(()=>{
    const getUser = ()=>{
      fetch("http://localhost:5000/auth/login/success",{
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials":true
        } 
      }).then((response)=>{
        if(response.status === 200) return response.json();
        throw new Error("authentication failed");
      }).then(resObj =>{
        setUser1(resObj.user);
      }).catch(error=>{
        console.log(error);
      })
    };


    getUser();
  },[])

  useEffect(()=>{
    const handle = async ()=>{
        try{
            const data = await fetch("/user/info", {
                method : "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const res = await data.json();
            if(data.status === 200){
              setUser(res);
            }
        }catch(err){
            setUser(null)
            console.log("aoo",err);
        }
    };

    handle();
},[user]);
  
// console.log("user",user.user._id)
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={user? <Navigate to='/'/>:<Login/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/product/:id" element={<Product user={user}/>}/>
          <Route exact path="/cart" element={user? <Cart/>: <Navigate to='/login'/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
