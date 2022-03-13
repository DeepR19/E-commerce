import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faGoogle, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Header from '../Header/Header';
import "./login.css";
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [email , setEmail] = useState("");
    const [pass , setPass] = useState("");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

   const handleLogin = async (e)=>{
       e.preventDefault();

       try {
           const data = await fetch("/user/login",{
               method: "POST",
               headers:{
                   "Content-Type": "application/json"
               },
               body: JSON.stringify({email, pass})
           });

           const res = await data.json();
           if(data.status === 400 || !res)
           {
               console.log("error");
            }
            else{
                navigate("/")
                setUser(res);
            }

       } catch (error) {
        console.log("Login",error);
       }
   };

   const google = ()=>{
        window.open("http://localhost:5000/auth/google", "_self")
   };
   const github = ()=>{
        window.open("http://localhost:5000/auth/github", "_self")
    };
   

  return (
      <>
        <Header/>
        <div className="login-container">

            <div className="login-wrapper">
                <div className="login-left">
                    <div className="login-link google" onClick={google}>
                        <FontAwesomeIcon icon={faGoogle}/>
                        Google
                    </div>
                    <div className="login-link github" onClick={github}>
                        <FontAwesomeIcon icon={faGithub}/>
                        Github
                    </div>
                    <div className="login-link linkedin">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                        LinkedinIn
                    </div>
                </div>
                <div className="login-line"></div>
                <div className="login-right">
                    <h3>Login</h3>
                    <form onSubmit={handleLogin}>
                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/>
                        <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='Enter your password'/>
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
