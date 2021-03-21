import React, { useState } from 'react';
import './Login.css';
import logo1 from '../assets/Login-assets/logo1.png';
import {Redirect} from 'react-router-dom';
import { isAuthenticated, login, authenticate } from '../auth/helper/index';

const Login=()=>{

    const [show,setShow]=useState(0);
    const showPass=()=>{
        if(show==0)
        setShow(1);
        else
        setShow(0);
    }

    const [values,setValues]=useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    })

    const {email, password, error, loading, didRedirect}=values;
    const {user}=isAuthenticated();

    const handleChange=name=>event=>{
        setValues({...values,error:false, [name]:event.target.value})
    }

    const onSubmit=event=>{
        event.preventDefault();
        setValues({...values,error: false,loading: true})
        login({email,password})
            .then(data=>{
                if(data.error)
                setValues({...values,error: data.error,loading: false})
                else{
                    authenticate(data,()=>{
                        setValues({...values,didRedirect:true})
                        console.log(data);
                    })
                }
            })
            .catch(err=>console.log("signin failed"));
    }

    const performRedirect=()=>{
        if(didRedirect)
        {
            if(user&&user.role==1)
            {
                return <p className="text-white text-center">Redirect to admin</p>
            }
            else{
                return <Redirect to="/" />;
            }
        }
        if(isAuthenticated())
        {
            return <Redirect to="/" />
        }
        
    }

        if(show==0)
        {return(
            <div>
        <div className="logo"><a href="#"><img src={logo1}/></a></div>
    <nav className="menu">
        <ul><li><a href="#">Cart <i className="fas fa-cart-arrow-down"><span></span> </i></a></li>
            <li><a href="#">Login</a></li>
            
        </ul>
        <form method="post" className="search">
            <input type="text" placeholder="Search"/>
            <button>Search</button>
        </form>
    </nav>
        <div className="bg-img">
        <div className="content">
            <header>Login Form</header>
            <form action="#">
                <div className ="field space">
                    <span className="fas fa-user"></span>
                    <input type="email" value={email} onChange={handleChange("email")}  required placeholder="Email" />
                </div>
                <div className ="field">
                    <span className="fas fa-lock"></span>
                    <input type="password" className="password" value={password} onChange={handleChange("password")} required placeholder="Password" />
                    <span className="show" style={{"color":"#3498db"}} onClick={showPass}>SHOW</span>
                </div>
                <div className="pass">
                    <a href="#">Forgot Password?</a>
                </div>
                <div className ="field">
                    <input type="submit" value="LOGIN" onClick={onSubmit} />
                </div>
                <div className="login">Or Login with</div>
                <div className="link">
                    <div className="facebook">
                        <i className="fab fa-facebook-f"><span>Facebook</span> </i>
                    </div>
                    <div className="google">
                        <i className="fab fa-google"><span>Google</span> </i>
                    </div>
                </div>
                <div className="signup">Don't have account?
                    <a href="#"><span style={{"color":"black"}}>Signup Now</span></a>
                </div>
                <p className="text-white text-center">{JSON.stringify(values)}</p>
        {performRedirect()}
            </form>
        </div> 
    </div>
    </div>
        )}
        else{return(
            <div>
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
        <div className="bg-img">
        <div className="content">
            <header>Login Form</header>
            <form action="#">
                <div className ="field space">
                    <span className="fas fa-user"></span>
                    <input type="email" value={email} onChange={handleChange("email")}  required placeholder="Email" />
                </div>
                <div className ="field">
                    <span className="fas fa-lock"></span>
                    <input type="text" className="password" value={password} onChange={handleChange("password")} required placeholder="Password" />
                    <span className="show" style={{"color":"#222"}} onClick={showPass}>HIDE</span>
                </div>
                <div className="pass">
                    <a href="#">Forgot Password?</a>
                </div>
                <div className ="field">
                    <input type="submit" value="LOGIN" onClick={onSubmit}/>
                </div>
                <div className="login">Or Login with</div>
                <div className="link">
                    <div className="facebook">
                        <i className="fab fa-facebook-f"><span>Facebook</span> </i>
                    </div>
                    <div className="google">
                        <i className="fab fa-google"><span>Google</span> </i>
                    </div>
                </div>
                <div className="signup">Don't have account?
                    <a href="#"><span style={{"color":"black"}}>Signup Now</span></a>
                </div>
                <p className="text-white text-center">{JSON.stringify(values)}</p>
        {performRedirect()}
            </form>
        </div> 
    </div>
        </div>)}

}
export default Login;