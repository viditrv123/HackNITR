import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './core/Home';
import Login from './core/Login';
import Profile from './core/Profile';
import Register from './core/Register';



const Routes=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Login" exact component={Login}/>
                <Route path="/Register" exact component={Register}/>
                <Route path="/Profile" exact component={Profile}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;