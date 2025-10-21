import React, { useEffect, useState } from "react";
import { fetchFaculties } from "../api/api";
import "../styles/faculties.css";
import { motion } from "framer-motion";

const Faculties = () => {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    fetchFaculties().then((data) => {
      if (Array.isArray(data)) setFaculties(data);
      else setFaculties([]);
    });
  }, []);

  return (
    <div className="faculties-page container">
      {/* Section Title */}
      <motion.h2
        className="section-title glow-text text-center mb-5"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        Our Faculties
      </motion.h2>

      <div className="faculties-grid d-flex flex-wrap justify-content-center">
        {faculties.map((faculty, index) => (
          <motion.div
            key={index}
            className="faculty-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="faculty-card card shadow-lg">
              <img
                src={`/${faculty.image}`}
                alt={faculty.name}
                className="faculty-img"
              />
              <div className="card-body text-center">
                <h5 className="faculty-name">{faculty.name}</h5>
                <p className="faculty-role">{faculty.role}</p>
                <p className="faculty-qualification">{faculty.qualification}</p>
                {faculty.trade && (
                  <p className="faculty-trade">
                    <strong>Trade:</strong> {faculty.trade}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {faculties.length === 0 && (
          <p className="text-center">No faculties available</p>
        )}
      </div>
    </div>
  );
};

export default Faculties;
