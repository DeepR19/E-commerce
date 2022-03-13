import React , {useState}from 'react';
import Header from '../Header/Header';
import Img from "../../assets/sign.jpg"
import "./SignUp.css";
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        Fname: "",
        Lname: "",
        email: "",
        mob: "",
        pass: "",
        confirmPass: "",
    })

    const handleSignUp = async (e)=>{
        e.preventDefault();
 
        try {
            const data = await fetch("/user/signup",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({user})
            });
 
            await data.json();
            if(data.status === 200){
                navigate("/login");
            }
        } catch (error) {
            console.error("Please check detials")
         console.log(error);
        }
    };


    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        
        setUser({...user, [name]:value });
    };
  return (
    <>
        <Header/>

        <div className="sign-container">
            <div className="sign-wrapper">

                <div className="signImg">
                    <img src={Img} alt="..." />
                </div>

                <form onSubmit={handleSignUp}>
                    <h3>SignUp</h3>

                    <div className="sign-field">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" name="Fname" value={user.Fname} onChange={handleChange}/>
                    </div>
                    <div className="sign-field">
                        <label htmlFor="fname">Last Name</label>
                        <input type="text" name="Lname" value={user.Lname} onChange={handleChange}/>
                    </div>
                    <div className="sign-field">
                        <label htmlFor="fname">Email</label>
                        <input type="email" name="email" value={user.email} onChange={handleChange}/>
                    </div>
                    <div className="sign-field">
                        <label htmlFor="fname">Mobile No.</label>
                        <input type="text" name="mob" value={user.mob} onChange={handleChange}/>
                    </div>
                    <div className="sign-field">
                        <label htmlFor="fname">Password</label>
                        <input type="text" name="pass" value={user.pass} onChange={handleChange}/>
                    </div>
                    <div className="sign-field">
                        <label htmlFor="fname">Confirm Password</label>
                        <input type="text" name="confirmPass" value={user.confirmPass} onChange={handleChange}/>
                    </div>

                    <button type="submit">SignUp</button>
                </form>
            </div>
        </div>
    </>
  )
}
