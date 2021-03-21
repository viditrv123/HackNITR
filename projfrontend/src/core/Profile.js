import React from 'react';
import './Profile.css';
import dp1 from '../assets/dp1.jpg';
import logo1 from '../assets/Login-assets/logo1.png';
import './Login.css';

const Profile=()=>{
    return(
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
        <div className="account-pg">
        <div className="profile">
            <div className="profile-det">
                <img src={dp1}/>
                <h2>Sneha Agarwal</h2>
                <p>sneha@gmail.com</p>
            </div>
            <br/>
            <ul>
                <li><a href=""className="active">Account <span></span></a></li>
                <li><a href="">Change Password<span></span></a></li>
                <li><a href="">Billing Detail<span></span></a></li>
                <li><a href="">My Orders<span></span></a></li>
                <li><a href="">Delete Account<span></span></a></li>
                <li><a href="">Logout<span></span></a></li>
            </ul>
        </div>
        <div className="account-det"><br/>
            <br/><br/><br/><br/>
            <h2>Enter Account Details:</h2>
    <div className="billing-detail">
    <form  className="checkout">
        <div className="form-inline">
            <div className="form-grp">
            <label>First Name</label>
             <input type="text" name="fname"/>  
        </div>
        <div className="form-grp">
            <label>Last Name</label>
             <input type="text" name="lname"/>  
        </div>
        </div>
        <div className="form-inline">
           <div className="form-grp">
            <label>Country</label>
            <select name="country">
                <option value="">---Select a Country---</option>
                <option value="pakistan">Pakistan</option>
                <option value="india">India</option>
                <option value="america">America</option>
                <option value="australia">Australia</option>
                <option value="europe">Europe</option>
            </select>
        </div>
        <div className="form-grp">
            <label>City</label>
            <select name="city">
                <option value="">---Select a City---</option>
                <option value="bareilly">Bareilly</option>
                <option value="lucknow">Lucknow</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="chennai">Chennai</option>
            </select>
        </div> 
        </div>
        
        <div className="form-grp">
            <label>Address</label>
            <textarea name="address" rows="5"></textarea> 
        </div>
        <div className="form-inline">					
            <div className="form-grp">
                <label>Telephone</label>
                <input type="text" id="tel" name="tel" minlength="11" maxlength="11"/>
            </div>
            <div className="form-grp">
                <label>Mobile</label>
                <input type="text" id="mobile" name="mobile" minlength="11" maxlength="11"/>
            </div>
        </div>
        <br/>
        <div className="form-grp">
            <label></label>
            <input type="submit" id="update" name="update" value="Update"/>
        </div>
    </form>
</div>
    </div>
    </div>
    </div>
    
    
    )
}
export default Profile;