import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome-section  flex_space">
      <div className="container">
        <div className="welcome-img">
          <img
            src="/images/welcome/welcome.jpg"
            alt="welcome-img"
            className="img-fluid"
          />
        </div>
      <div className="row d-flex justify-content-center w-100">
        <div className="col-lg-6">
        <div className="welcome-content">
          <h1>Welcome To Kasutam</h1>
          <p>
            It’s all about the organic and freshness here. it's all about good
            food and good times. No one can defeat the taste of Desi Cow Ghee,
            Buffalo Ghee, Organic Mustard Oil, handmade Green chilli pickle,Kair
            Pickle and many more home made items which comes directly from the
            farm.
          </p>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Welcome;
