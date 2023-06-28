import React, { useState } from "react";
// import Black from "../img/back.png";
import {Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  // const [showForm, setShowForm] = useState(false); // State for showing/hiding formContainer
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(true);
    }
  };

  // const handleButtonClick = () => {
  //   setShowForm(!showForm); // Toggle the value of showForm state
  // };

  return (
   <>

      {/* {showForm && ( */}
        <div className="formContainer">
          <div className="formWrapper">
            
            <span className="logo">Chat App</span>
            <span className="title">Made By Nilesh</span>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <button type="submit">Login</button>
              {err && <span>Something went wrong</span>}
            </form>
            <p>
              You don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      {/* )} */}
    </>
  );
};

export default Login;


