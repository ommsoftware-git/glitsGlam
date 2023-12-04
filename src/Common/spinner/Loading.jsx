import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import "./Loadings.css"


const Loadings = () => {
  return (
    <>
    
    <div className="spinner_section">
      <Spinner animation="border" role="status" className="Spinner">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
    </>
  );
};

export default Loadings;
