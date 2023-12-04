/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import "./Contact.css";
import { NavLink } from "react-router-dom";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const ContactFrom = () => {
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [allValue, setAllValue] = useState([]);
  const formSubmit = (e) => {
    e.preventDefault();

    const newValue = { fname, phone, email, subject, message };
    setAllValue([...allValue, newValue]);
    setFname("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <>
      <section className="contact ">
        <div className="container ">
          <div className="heading">
            <h1>CONTACT </h1>
            <div className="line"></div>
          </div>
          <div className="">
            <div className="row w-100">
              <div className="col-lg-6 col-12">
                <div className="contact_data">
                  <div>
                    <h3>Call Us</h3>
                    <NavLink to="">
                      <p>
                        <span className="mx-4">
                          <FaPhone />
                        </span>
                        +91 7427003708
                      </p>
                    </NavLink>
                    <NavLink to="">
                      <p>
                        <span className="mx-4">
                          <FaWhatsapp />
                        </span>
                        +91 7427003708
                      </p>
                    </NavLink>
                  </div>
                  <div>
                    <h3>Email Us</h3>
                    <NavLink to="">
                      <p>
                        <span className="mx-4">
                          <FaEnvelope />
                        </span>
                        info@glitsnglams@gmail.com
                      </p>
                    </NavLink>
                  </div>
                  <br />
                  <br />
                  <div>
                    <h3>Office Address</h3>
                    <p className="text-center">
                      <span className="mx-1">
                        <FaLocationDot />
                      </span>
                      Kasutam farm, 343, berla road, vill asalwas, surajgarh,
                      distt- Jhunjhunu, Rajasthan, 333033
                    </p>
                  </div>
                  <div>
                    <h3>Follow Us</h3>
                    <div class="d-flex footer_links">
                      <a href="/">
                        <i class="fab facebook footer-social-icon fa-facebook-f"></i>
                      </a>
                      <a href="/">
                        <i class="fab twitter footer-social-icon fa-youtube"></i>
                      </a>
                      <a href="/">
                        <i class="fab google footer-social-icon fa-instagram"></i>
                      </a>
                      <a href="/">
                        <i class="fab apple footer-social-icon fa-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <form onSubmit={formSubmit}>
                  <div className="grid1">
                    <div className="input">
                    
                      <input
                        type="text"
                        name="fname"
                        value={fname}
                        placeholder="Full Name"
                        onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </div>

                    <div className="input">
                    
                      <input
                        type="number"
                        name="phone"
                        value={phone}
                        placeholder="Phone Number"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="input">
                   
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="input">
                   
                      <input
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Subjects"
                      />
                    </div>
                  </div>
                  <div className="input inputlast">
                    <textarea
                      cols="30"
                      rows="10"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button className="primary-btn">Submit Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="map mt-5 mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d14052.472241019264!2d75.8602691!3d28.2947476!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3912dd3b619512e9%3A0xfa4bd90990529c9!2sKasutam%20Berla%20Road%20Asalwas%2C%20Rajasthan%20333033!3m2!1d28.294747599999997!2d75.8602691!5e0!3m2!1sen!2sin!4v1700813064367!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>


    </>
  );
};

export default ContactFrom;
