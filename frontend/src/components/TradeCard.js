import React, { useEffect, useState } from "react";
import "../styles/trades.css";

const TradeCard = ({ trade }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Swipe state
  const [touchStart, setTouchStart] = useState(null);

  // Auto-rotate for card preview
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % trade.images.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [trade.images.length]);

  // Navigation
  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % trade.images.length);

  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + trade.images.length) % trade.images.length
    );

  // 🔑 Keyboard support
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isModalOpen]);

  // 📱 Swipe support
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) nextImage(); // swipe left → next
    if (diff < -50) prevImage(); // swipe right → prev

    setTouchStart(null);
  };

  return (
    <>
      {/* Trade Card */}
      <div
        className="trade-card card h-100 shadow-lg"
        onClick={() => setIsModalOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <div className="image-container">
          <img
            src={trade.images[currentImage]}
            alt={trade.name}
            className={`trade-img ${fade ? "fade-in" : "fade-out"}`}
          />
          <div className="progress-bar-container">
            <div className="progress-bar" key={currentImage} />
          </div>
        </div>
        <div className="card-body text-center">
          <h5 className="trade-name">{trade.name}</h5>
          <p className="trade-duration">{trade.duration}</p>
          <p className="trade-desc">{trade.description}</p>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="trade-modal"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="trade-modal-content">
            {/* Close */}
            <button
              className="trade-modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            {/* Arrows */}
            <button className="trade-modal-prev" onClick={prevImage}>
              ‹
            </button>
            <img
              src={trade.images[currentImage]}
              alt={`${trade.name} full`}
              className="trade-modal-img"
            />
            <button className="trade-modal-next" onClick={nextImage}>
              ›
            </button>

            {/* Thumbnails */}
            <div className="trade-thumbnails">
              {trade.images.map((thumb, idx) => (
                <img
                  key={idx}
                  src={thumb}
                  alt={`thumb-${idx}`}
                  className={`thumbnail ${
                    idx === currentImage ? "active" : ""
                  }`}
                  onClick={() => setCurrentImage(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TradeCard;
