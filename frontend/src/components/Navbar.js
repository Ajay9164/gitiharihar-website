import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/global.css";

const Navbar = () => {
  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark premium-navbar fixed-top"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <NavLink className="navbar-brand brand-title" to="/">Govt. ITI Harihar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/trades" className="nav-link">Trades</NavLink></li>
            <li className="nav-item"><NavLink to="/faculties" className="nav-link">Faculties</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
