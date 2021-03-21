import React, { useState } from 'react';
import bg from '../assets/Register-assets/bg.jpeg';
import logo1 from '../assets/Register-assets/logo1.png';
import "./Register.css";
import "./Login.css";
import register from "../auth/helper/index";
import {Redirect} from 'react-router-dom';

const Register=()=>{

        const [values, setValues] = useState({
            username:"",
            email:"",
            password:"",
            error:"",
            success:false
        });
    
        const {username, email, password, error, success}=values;
    
        const handleChange=name=>event=>{
            setValues({...values,error:false, [name]:event.target.value})
        }
    
        const onSubmit=event=>{
            event.preventDefault();
            setValues({...values,error:false});
            register({username,email,password})
            .then(data=>{
                if(data.error)
                setValues({...values, error:data.error, success:false})
                else
                setValues({
                    ...values,
                    username:"",
                    email:"",
                    password:"",
                    error:"",
                    success:true});
                    <Redirect path="/Login"></Redirect>
            }
            )
            .catch(err=>console.log("Error in Signup"));
        };

        const performRedirect=()=>{
            if(success)
            {
                return <Redirect to="/Login" />;
            }
            else{
                return <Redirect to="/Register" />;
            }
            
            
        }

    return(<div>
    <div className="logo"><a href="#"><img src={logo1}/></a></div>
    <nav className="menu">
        <ul><li><a href="#">Cart <i className="fas fa-cart-arrow-down"><span></span> </i></a></li>
            <li><a href="#">Login</a></li>
            
        </ul>
        <form action="" className="search">
            <input type="text" placeholder="Search"/>
            <button>Search</button>
        </form>
    </nav>
        <section>
        <div className="imgBx">
            <img src={bg}/>
        </div>
        <div className="contentBx">
            <div className="formBx">
                <h2> Sign Up</h2>
                <form>
                    <div className="inputBx">
                        <span>Full Name</span>
                        <input type="text" placeholder="Full Name" value={username} onChange={handleChange("username")} required/>
                    </div>
                    <div className="inputBx">
                        <span>Email</span>
                        <input type="email" value={email} id="" placeholder="Email" onChange={handleChange("email")}/>
                    </div>
                    <div className="inputBx">
                        <span>Password</span>
                        <input type="password" value={password} placeholder="Password" onChange={handleChange("password")} required/>
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Sign Up" onClick={onSubmit}/>
                    </div>
                    <div className="signup">Or sign up with</div>
                    <div className="link">
                        <div className="facebook">
                            <i className="fa fa-facebook-f"><span>Facebook</span></i>
                        </div>
                        <div className="google">
                            <i className="fa fa-google"><span>Google</span></i>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
    </section>
    {performRedirect()}
    </div>)
}
export default Register;