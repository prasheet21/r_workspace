import React, { useState } from "react";
import {useDispatch} from 'react-redux' ;
import { toast } from "react-toastify";
import {signinItem} from '../../Data/Reducers/userReducer' ;
import { checkEmpty } from "../../shared/UtilFuncs/checkEmpty";
import ForgotPasswordModal from "./Component/Modals/ForgotPassword";

const Signin = () => {

  // Initializations
  const dispatch = useDispatch() ;

  // State
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  //   Functions
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleClick = async() => {
    // ensuring that details key value are not empty
    if (checkEmpty(details)){
      // call the api 
      const response = await dispatch(signinItem(details)) ;
      if (response.payload.isSuccessful){
        console.log("congratulations") ;
      }else{
        toast.error(response.payload.message.data.message) ;
      }
    }else{
      // show the error
      toast.error("Something is missing ..") ;
    }
  };

  return (
    <div className="container">
      <h1 className="mt-2 ml-3">Signin</h1>
      <hr />
      <div className="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          placeholder="Username"
          aria-describedby="username"
          onChange={handleChange}
        />
        <small id="username" className="form-text text-muted">
          Registered username.
        </small>
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <div class="row d-flex align-items-center">
        <div className="col-4">
          <button onClick={handleClick} className="btn btn-success">
            Signin
          </button>
        </div>
        <div className="col">
          <a href="/signup">Don't have an accout ?</a>
        </div>
        <div className="col">
          
          <ForgotPasswordModal></ForgotPasswordModal>
        </div>
      </div>
    </div>
  );
};

export default Signin;
