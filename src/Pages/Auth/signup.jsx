import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  // Initializations
  const history = useHistory();

  // State
  const [details, setDetails] = useState({
    username: "",
    email: "",
    address: "",
    contact: "",
    password: "",
  });
  // whether the contact number has been verified or not
  const [verified, setVerified] = useState(false);

  //   Functions
  const submit = () => {
    // service to call signup api
    // check whether the response is positive or not
    // if yes redirect to login page
    history.push("/signin") ;
    // else show message from response
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <div className="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          aria-describedby="username"
        />
        <small id="username" className="form-text text-muted">
          This username will be visible to all of your network.
        </small>
      </div>
      <div className="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label for="address">Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          placeholder="Address"
        />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <label for="cpassword">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="cpassword"
          placeholder="Confirm Password"
        />
      </div>
      <br />
      <h4>Verification Details</h4>
      <div className="">
        <label className="sr-only" for="contact">
          Contact no.
        </label>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text">+91</div>
          </div>
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                id="contact"
                placeholder="Contact"
              />
            </div>
            <div className="col">
              <button className="btn btn-success">Send OTP</button>
            </div>
          </div>
        </div>
        <small id="emailHelp" className="form-text text-muted">
          Verification code will be sent to your number.
        </small>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="agree" />
        <label className="form-check-label" for="agree">
          Agree all Terms and Conditions
        </label>
      </div>
      <div className="mt-2 d-flex align-items-center">
        <button className="btn btn-primary" onClick={submit}>Signup</button>
        <a className="ml-3" href="/">
          Already have an account ?
        </a>
      </div>
    </div>
  );
};

export default Signup;
