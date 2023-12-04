import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <>
      <section className="mtop flex_space mb-5">
        <div className="container">
          <div className="heading">
            <h1>WE APPRECIATE YOUR REVIEW! </h1>
            <div className="line"></div>
            <div className="mt-4">
              <p>
                Your review will help us to improve our quality of products, and
                customer services.
              </p>
            </div>
          </div>

          <div className="row w-100 d-flex justify-content-center">
            <div className="col-lg-10 offset-lg-1">
              <div className="row w-100 review">
                <h3>Contact information</h3>
                <div className="col-lg-4 col-12 mb-4">
                  <div class="input">
                  <input
                  type="text"
                  id=""
                  class=""
                  placeholder="Name"
                />
                  </div>
                </div>
                <div className="col-lg-4 col-12 mb-4">
                  <div class="input">
                  <input
                  type="number"
                  id=""
                  class=""
                  placeholder="Phone"
                />
                  </div>
                </div>
                <div className="col-lg-4 col-12 mb-4">
                  <div class="input">
                  <input
                  type="email"
                  id=""
                  class=""
                  placeholder="Email"
                />
                  </div>
                </div>
                <h3 className="mt-4">Feedback information </h3>
                <div className="col-lg-6 col-12 mb-4">
                  <div class="input">
                    <select
                      placeholder="Product"
                      class="form-control form-select bg-white select"
                      defaultValue={'DEFAULT'}
                    >
                      <option value="6" selected>A2 Desi Cow Bilona Ghee 1 Liter</option>
                      <option value="5">A2 Desi Cow Bilona Ghee 500ml</option>
                      <option value="2">Buffalo bilona ghee 1 Liter</option>
                      <option value="3">Buffalo bilona ghee 500ml</option>
                      <option value="4">
                        A2 Desi Cow Bilona Ghee 5 Liter steel can
                      </option>
                      <option value="7">
                        Kachi Ghani Black Mustard Oil 1 Liter Plastic Bottle
                      </option>
                      <option value="8">
                        Kachi Ghani Black Mustard Oil 1 Liter Bottle x 4 Bottle
                        (4 Liter)
                      </option>
                      <option value="10">
                        A2 Desi Cow Bilona Ghee 2 Liter
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-4">
                  <div className="input">
                    <select class="form-control form-select bg-white select" defaultValue={'DEFAULT'}>
                      <option value="1" selected>1 Star (Test is very bed)</option>
                      <option value="2">2 Star (Test is bed)</option>
                      <option value="3">3 Star (Test is avarage)</option>
                      <option value="4">4 Star (Test is good)</option>
                      <option value="5" selected="">
                        5 Star (Test is very delicious)
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-12 mt-4 mb-5">
                  <div class="input ">
                    <textarea
                      rows="10"
                      name="message"
                      placeholder="Message"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button className="primary-btn">Submit Your Feedback</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
