import React, { useState } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1,
  },
  content: {
    color: "orange",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    flexDirection: "column",
    width: "450px",
  },
};

function ForgotPasswordModal() {
  // Initializations
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  // States
  const [verified, setVerified] = useState(false);
  const [firstAttempt, setFirstAttempt] = useState(true) ;

  // Functions
  const verifyEmail = () => {
    // if email is verified close the modal with toast - email sent successfully
    // else just show a message invalid email entered OR no matching email found
  }

  return (
    <>
      <p
        onClick={openModal}
        className="cursor-pointer"
        style={{
          color: "#007bff",
        }}
      >
        Forgot Password ?
      </p>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="form-group w-100">
          <label htmlFor="email" className='text-dark'>Registered Email ID</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email .."
            aria-describedby="email"
          />
          {(!firstAttempt && !verified) && <p className='text-danger mt-1 ml-1'style={{fontSize:"12px"}}>Invalid email .. please try again !!</p>}
        </div>

        <div className="d-flex ml-auto">
          <button
            onClick={verifyEmail}
            className="btn btn-primary"
          >
            Verify Email and Reset
          </button>
          <button onClick={closeModal} className="btn btn-danger ml-2">
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ForgotPasswordModal;
