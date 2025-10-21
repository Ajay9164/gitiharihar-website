import React from "react";
import { motion } from "framer-motion";
import "../styles/faculties.css";

const FacultyCard = ({ faculty }) => {
  const src = `${process.env.PUBLIC_URL}/${(faculty.image || "").replace(/^\/+/, "")}`;

  return (
    <motion.div
      className="card faculty-card h-100 text-center tilt-faculty"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="faculty-avatar-wrapper">
        <img src={src} alt={faculty.name} className="faculty-img" />
      </div>
      <div className="card-body">
        <h5 className="faculty-name">{faculty.name}</h5>
        <p className="text-muted mb-1">{faculty.role}</p>
        <p className="faculty-qual">{faculty.qualification}</p>
        {faculty.trade && <span className="badge faculty-badge">{faculty.trade}</span>}
      </div>
    </motion.div>
  );
};

export default FacultyCard;
