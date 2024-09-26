import React from "react";
import "./LayoutGrid.css";

import card1 from "/assets/images/card1.png";
import card2 from "/assets/images/card2.png";
import card3 from "/assets/images/card3.png";
import card6 from "/assets/images/card6.png";
import card7 from "/assets/images/card7.png";
import card9 from "/assets/images/card9.png";

const LayoutGrid: React.FC = () => {
  return (
    <div className="layout-grid">
      <div className="grid-item block1">
        <img src={card1} alt="Card 1" className="block-image" />
      </div>
      <div className="grid-item block2">
        <img src={card2} alt="Card 2" className="block-image" />
      </div>
      <div className="grid-item block3">
        <img src={card3} alt="Card 3" className="block-image" />
      </div>
      <div className="grid-item block4">
        <div className="video-container">
          <iframe
            className="video-frame"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Random Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className="center-button">NESTING</button>
        </div>
      </div>
      <div className="grid-item block5">
        <div className="text-block">
          <h3 className="text-block-title">Stay Focused</h3>
          <p className="text-block-content">
            "Success is not the key to happiness. Happiness is the key to
            success. If you love what you are doing, you will be successful."
          </p>
        </div>
      </div>

      <div className="grid-item block6">
        <img src={card6} alt="Card 6" className="block-image" />
      </div>
      <div className="grid-item block7">
        <img src={card7} alt="Card 7" className="block-image" />
      </div>
      <div className="grid-item block8">
        <p className="quote-text">
          "The only way to do great work is to love what you do."
          <br /> - Steve Jobs
        </p>
      </div>

      <div className="grid-item block9">
        <img src={card9} alt="Card 9" className="block-image" />
      </div>
    </div>
  );
};

export default LayoutGrid;
