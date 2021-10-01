import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Main/Dashboard/Dashboard";
import { useSelector } from "react-redux";

// Components
import Signin from '../Pages/Auth/signin';
import Signup from '../Pages/Auth/signup';
import forgotpass from '../Pages/Auth/forgotpass';

const Router = () => {
    const {authentication} = useSelector(state => state.userReducer);
    console.log('authentication: ', authentication);
    return (
        <>
            <Switch>
                 
                {
                    // if authenticated then redirect in 
                    !authentication ? <>
                        <Route exact path="/" component={Signin}/>
                        <Route exact path="/signup" component={Signup}/>
                        <Route exact path="/forgotpass/:userId" component={forgotpass}/>
                        
                    </> : 
                    // else redirect to auth pages
                    <>
                        <Route path="/" component={Dashboard}/>
                        
                 
                    </>
                }
                {/* Error pages */}
                
            </Switch>
        </>
    ) ;
}

export default Router;
