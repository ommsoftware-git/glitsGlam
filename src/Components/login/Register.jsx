import React, { useState } from "react";
import "./design.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [recValue, setRecValue] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newValue = {
      name: name,
      phone: phone,
      email: email,
      password: password,
    };

    setRecValue([...recValue, newValue]);
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <section className="forms">
        <div className="heading">
          <h1>Recover password </h1>
          <div className="line"></div>
        </div>
        <div className="container">
          <div className="sign-box">
            <p className="text-center">
              Don't have an account? Create your account, it takes less than a
              minute.
            </p>
            <form action="" onSubmit={submitForm}>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
              <input
                type="number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />

              <button type="submit" className="primary-btn">
                Create an Account
              </button>
              <p>
              Already have an Account?
                <Link
                  to="/login"
                  className="text-success fw-bold text-decoration-none"
                >
                login now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
