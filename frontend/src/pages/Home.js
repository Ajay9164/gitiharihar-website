import React from "react";
import { motion } from "framer-motion";
import "../styles/global.css";

const Home = () => {
  const banner = `${process.env.PUBLIC_URL}/images/banner.jpg`;
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${banner})` }}>
      <div className="hero-overlay" />
      <div className="hero-content container text-center">
        <motion.h1 className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Government ITI College Harihar
        </motion.h1>

        <motion.p className="hero-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Skill. Industry-ready. Career-focused. Hands-on training for a brighter future.
        </motion.p>

        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }}>
          <a className="btn btn-gradient btn-lg mt-4" href="/trades">Explore Trades</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
