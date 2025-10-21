import React, { useEffect, useState } from "react";
import { fetchTrades } from "../api/api";
import "../styles/trades.css";
import { motion } from "framer-motion";
import { Carousel } from "bootstrap";

const Trades = () => {
  const [trades, setTrades] = useState([]);
  const [selectedTrade, setSelectedTrade] = useState(null); // for modal

  useEffect(() => {
    fetchTrades().then((data) => {
      if (Array.isArray(data)) setTrades(data);
      else setTrades([]);
    });
  }, []);

  // Initialize Bootstrap carousels inside cards
  useEffect(() => {
    trades.forEach((trade) => {
      const carouselEl = document.getElementById(`carousel-${trade.id}`);
      if (carouselEl) {
        new Carousel(carouselEl, {
          interval: 5000,
          ride: "carousel",
          pause: false,
          wrap: true,
        });
      }
    });
  }, [trades]);

  return (
    <div className="trades-page container">
      {/* Section Title */}
      <motion.h2
        className="section-title glow-text text-center mb-5"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        Our Trades
      </motion.h2>

      <div className="trades-grid d-flex flex-wrap justify-content-center">
        {trades.map((trade) => (
          <motion.div
            key={trade.id}
            className="trade-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: trade.id * 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className="trade-card card shadow-lg"
              onClick={() => setSelectedTrade(trade)} // open modal
              style={{ cursor: "pointer" }}
            >
              <div
                id={`carousel-${trade.id}`}
                className="carousel slide carousel-fade"
              >
                {/* slides */}
                <div className="carousel-inner">
                  {trade.images.map((img, i) => (
                    <div
                      key={i}
                      className={`carousel-item ${i === 0 ? "active" : ""}`}
                    >
                      <img
                        src={`/${img}`}
                        className="d-block w-100 trade-img"
                        alt={`${trade.name} ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-body text-center">
                <h5 className="trade-name">{trade.name}</h5>
                <p className="trade-duration">{trade.duration}</p>
                <p className="trade-desc">{trade.description}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {trades.length === 0 && (
          <p className="text-center">No trades available</p>
        )}
      </div>

      {/* === FULLSCREEN MODAL === */}
      {selectedTrade && (
        <div className="trade-modal" onClick={() => setSelectedTrade(null)}>
          <div
            className="trade-modal-content"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <button
              className="trade-modal-close"
              onClick={() => setSelectedTrade(null)}
            >
              ✕
            </button>

            <div
              id={`modal-carousel-${selectedTrade.id}`}
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {selectedTrade.images.map((img, i) => (
                  <div
                    key={i}
                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                  >
                    <img
                      src={`/${img}`}
                      className="d-block w-100"
                      alt={`${selectedTrade.name} ${i + 1}`}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#modal-carousel-${selectedTrade.id}`}
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#modal-carousel-${selectedTrade.id}`}
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trades;
