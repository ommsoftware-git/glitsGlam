import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="section bg-footer">
        <div className="container">
          <div className="row w-100">
            <div className="col-lg-3">
              <div className="footer_address">
                <h6 className="footer-heading text-uppercase text-white">
                  Address
                </h6>
                <p>
                  <span>
                    <FaLocationDot />
                  </span>{" "}
                  Kasutam farm, 343, berla road, vill asalwas, surajgarh, distt-
                  Jhunjhunu, Rajasthan, 333033
                </p>
                <Link to="">
                  <p>
                    {" "}
                    <span>
                      <FaPhone />
                    </span>{" "}
                    +91 7427003708
                  </p>
                </Link>
                <Link to="">
                  <p>
                    {" "}
                    <span>
                      <FaWhatsapp />
                    </span>{" "}
                    +91 7427003708
                  </p>
                </Link>
                <Link to="">
                  <p>
                    {" "}
                    <span>
                      <FaRegEnvelope />
                    </span>{" "}
                    info@kasutam.com
                  </p>
                </Link>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">
                  Quick Links
                </h6>
                <div className="list-unstyled footer-link mt-4">
                  <div>
                    <Link to="/about-us">About Us</Link>
                  </div>
                  <div>
                    <Link to="/contact-us">Contact Us</Link>
                  </div>
                  <div>
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                  </div>
                  <div>
                    <Link to="/privacy-policy">Privcy Policy</Link>
                  </div>
                  <div>
                    <Link to="/refund-policy">
                      Refund And Cancellation Policy
                    </Link>
                  </div>
                  <div>
                    <Link to="/shipping-policy">
                      Shipping And Delivery Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">
                  Payment Methods
                </h6>
                <p>We support COD and ONLINE Payment.</p>
                <Link to="">
                  <figure>
                    <img
                      src="./Images/payment.png"
                      alt="payment"
                      className="img-fluid"
                    />
                  </figure>
                </Link>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">
                  Follow us
                </h6>
                <div className="d-flex footer_links">
                  <Link to="">
                    <i className="fab facebook footer-social-icon fa-facebook-f"></i>
                  </Link>
                  <Link to="">
                    <i className="fab twitter footer-social-icon fa-youtube"></i>
                  </Link>
                  <Link to="">
                    <i className="fab google footer-social-icon fa-instagram"></i>
                  </Link>
                  <Link to="">
                    <i className="fab apple footer-social-icon fa-whatsapp"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="footer-alt mb-0 f-14">
            2023 © GlitsnGlam, All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
