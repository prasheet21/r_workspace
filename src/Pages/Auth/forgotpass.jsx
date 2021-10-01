import React, { useState } from "react";
import { checkEmpty } from "../../shared/UtilFuncs/checkEmpty";
import "./styles/forgetpass.css";

const Forgotpass = (props) => {
  console.log('props: ', props);
  //state
  const [changePassData, setChangePassData] = useState({
    newPass: "",
    confirmPass: "",
  });

  const resetPassword = () => {
    //// ensuring that details key value are not empty
    if (checkEmpty(changePassData)) {
      //calling api
      console.log("Everything is fine");
    } else {
      console.log("something wend wrong");
    }
  };

  return (
    <div className="container">
      <form class="login-form">
        <div className="form-box">
          <div className="header-text">Reset Your Password Here..!</div>
          
          <input
            type="password"
            id="newpPass"
            name="newPass"
            className="form-control"
            placeholder="New Password"
          />
          <input
            type="password"
            id="confirmPass"
            name="confirmPass"
            className="form-control"
            placeholder="confirm Password"
          />
          <button
            type="submit"
            className="btn btn-primary send-btn"
            onClick={resetPassword}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
export default Forgotpass;
