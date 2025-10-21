
import React from "react";
import "../styles/global.css"; // use dedicated footer css

const Footer = () => (
  <footer className="premium-footer">
    <div className="container">
      <p>© {new Date().getFullYear()} Government ITI College Harihar</p>
      <small>This Website Developed By  — Ajay T</small>
    </div>
  </footer>
);

export default Footer;
