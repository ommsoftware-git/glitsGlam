import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./design.css";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [recValue, setRecValue] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newValue = { email: email, password: password };

    setRecValue([...recValue, newValue]);
    console.log(newValue);

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <section className="forms mb-5">
        <div className="heading">
          <h1>Recover password </h1>
          <div className="line"></div>
        </div>

        <div className="container">
          <div className="sign-box">
            <p className="text-center">
            Please enter your e-mail:
            </p>
            <form action="" onSubmit={submitForm}>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
           


              <button type="submit" className="primary-btn">
               Recover
              </button>
              <p>
              Remember your password? 
                <Link
                  to="/login"
                  className="text-success fw-bold text-decoration-none"
                >
                 Back to login ?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>

    </>
  );
};

export default ForgotPass;
