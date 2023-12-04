import React from "react";
import "./TrackOrder.css";

const TrackOrder = () => {
  return (
    <>
      <section className="mtop flex_space mb-5 trackOrder">
        <div className="container">
          <div className="heading">
            <h1>Track Your Order </h1>
            <div className="line"></div>
            <p>Please enter your order id</p>
          </div>
          <div className="row w-100">
            <div className="col-lg-6 col-12 offset-lg-3">
              <div class="input">
                <input
                  type="text"
                  id=""
                  class=""
                  placeholder="Track Your Order"
                />
              </div>
              <div className="mt-4">
                <button className="primary-btn w-100 rounded-pill">
                  Track
                </button>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackOrder;
