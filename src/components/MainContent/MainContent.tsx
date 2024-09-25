import React from "react";
import "./MainContent.css";

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <div className="grid-container">
        <div className="grid-item video-block">
          <div className="overlay">
            <button className="nesting-button">NESTING</button>
          </div>
          Insert Random Video
        </div>
        <div className="grid-item">Insert Textblock</div>
        <div className="grid-item">Insert Quote</div>
        {/* Additional blocks can be added here based on the design */}
      </div>
    </div>
  );
};

export default MainContent;
