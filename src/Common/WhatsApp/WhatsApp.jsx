import React from "react";
import "./WhatsApp.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <>
      <a
        id="whatsapp"
        href="https://wa.me/"
        target="_blank"
        title="whats-app" rel="noreferrer"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default WhatsApp;
