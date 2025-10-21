import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";
import "../styles/contact.css";

const Contact = () => {
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      label: "Address",
      value: "Govt Industrial Training Institute APMC YARD Harihar,Shivamogga road , Harihar (T),Davanagere(D), Karnataka, 577601, India",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: (
        <a href="mailto:gitiharihara@gmail.com" className="contact-link">
          gitiharihara@gmail.com
        </a>
      ),
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: (
        <a href="tel:+919513429602" className="contact-link">
          +91 94800 85001
        </a>
      ),
    },
    {
      icon: <FaClock />,
      label: "Office Hours",
      value: "Mon - Sat, 8:30 AM - 5:00 PM",
    },
  ];

  return (
    <div className="container py-5">
      {/* Glowing Section Title */}
      <motion.h2
        className="glow-text text-center mb-5"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      <div className="row g-4 align-items-stretch">
        {/* Contact Info */}
        <motion.div
          className="col-md-6 d-flex"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="contact-card w-100">
            <h4 className="mb-4">Government ITI College Harihar</h4>
            <ul className="list-unstyled contact-list">
              {contactDetails.map((detail, index) => (
                <motion.li
                  key={index}
                  className="contact-item d-flex align-items-start mb-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="contact-icon me-3">{detail.icon}</span>
                  <div>
                    <strong>{detail.label}:</strong> {detail.value}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="map-container rounded shadow-sm overflow-hidden">
            <iframe
              title="GITI Harihar Location"
              src="https://www.google.com/maps?q=Govt+Industrial+Training+Institute+Harihar&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
