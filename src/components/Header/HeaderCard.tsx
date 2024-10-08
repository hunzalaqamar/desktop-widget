import React from "react";
import "./HeaderCard.css";
import { IoReload } from "react-icons/io5";

const HeaderCard: React.FC = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="header-wrapper">
      <div className="header-card">
        <div className="header-content">
          <div className="header-text">
            <h2 className="header-title">
              Beginnen Sie Ihre Verkaufsreise{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </h2>
            <p className="header-subtitle">
              Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.
            </p>
          </div>
          <div className="reload-section" onClick={handleReload}>
            <IoReload className="reload-icon" />
            <span className="reload-text">Reload</span>
          </div>
        </div>
      </div>
      <div className="background-card"></div>
    </div>
  );
};

export default HeaderCard;
