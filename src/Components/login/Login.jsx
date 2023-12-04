import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./design.css";

const Login = () => {
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
          <h1>Login </h1>
          <div className="line"></div>
        </div>

        <div className="container">
          <div className="sign-box">
            <p className="text-center">
              Enter your e-mail and password below to log in to your account and
              use the benefits of our website.
            </p>
            <form action="" onSubmit={submitForm}>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              <div className="flex_space">
                <div className="flex">
                  <input type="checkbox" />
                  <label>Remember Me</label>
                </div>
                <div className="flex forgot_pass">
                  <Link to="forgot-password">
                    <span className="text-success fw-bold">
                      forgot password ?
                    </span>
                  </Link>
                </div>
              </div>

              <button type="submit" className="primary-btn">
                Sign In
              </button>
              <p>
                New account?
                <Link
                  to="/register"
                  className="text-success fw-bold text-decoration-none"
                >
                  Create An Account!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>

    </>
  );
};

export default Login;
