import React from "react";
import "./Certifications.css";

const Certifications = () => {
  return (
    <>
      <section className="certifications">
        <div className="container">
          <div className="heading">
            <h1>CERTIFICATIONS </h1>
            <div className="line"></div>
            <div className="row d-flex justify-content-center w-100 mt-5">
              <div className="col-lg-12">
              <img src="/images/certificate.avif" alt="certificate" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
