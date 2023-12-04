import React from "react";
import "./Checkout.css"
import { NavLink } from "react-router-dom";

const Checkout = () => {
  return (
    <>
           <section className=" flex_space mb-5">
        <div className="container">
          <div className="heading">
            <h1>To Complete Your Order</h1>
            <div className="line"></div>
            <div className="mt-4">
              <p>
              Please provide your contact details
              </p>
            </div>
          </div>

          <div className="row w-100 d-flex justify-content-center">
            <div className="col-lg-10 offset-lg-1">
              <div className="row w-100 review">
                <div className="col-lg-8 col-12"><h3>Contact information</h3></div>
                <div className="col-lg-4 col-12 checkOutLinks">
                    <NavLink to="/login">
                    Already have an account? Log in
                    </NavLink>
                </div>
                <div className="col-lg-6 col-12 mb-4">
                  <div class="input">
                  <input
                  type="text"
                  id=""
                  class=""
                  placeholder="Name"
                  required
                />
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-4">
                  <div class="input">
                  <input
                  type="number"
                  id=""
                  class=""
                  placeholder="Phone"
                  required
                />
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-4">
                  <div class="input">
                  <input
                  type="email"
                  id=""
                  class=""
                  placeholder="Email"
                  required
                />
                  </div>
                </div>

                <h3 className="mt-4">Shipping address </h3>
                <div className="col-lg-12 col-12 mb-4">
                  <div class="input">
                  <input
                  type="text"
                  id=""
                  class=""
                  placeholder="Address"
                  required
                />
                  </div>
                </div>
                <div className="col-lg-4 col-12 mb-4">
                  <div className="input">
                  <input
                  type="text"
                  id=""
                  class=""
                  placeholder="City/Town"
                  required
                />
                  </div>
                </div>
                <div className="col-lg-4 col-12 mb-4">
                  <div className="input">
                  <input
                  type="text"
                  id=""
                  class=""
                  placeholder="State"
                  required
                />
                  </div>
                </div>
                <div className="col-lg-4 col-12 mb-4">
                  <div className="input">
                  <input
                  type="text"
                  id=""
                  class=""
                  placeholder="Pin Code"
                  required
                />
                  </div>
                </div>
                <h3 className="mt-4">Additional Information </h3>
                <div className="col-12 mt-4 mb-5">
                  <div class="input ">
                    <textarea
                      rows="10"
                      name="message"
                      placeholder="Additional Message For Delivery"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button className="primary-btn">Continue To Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
