import React from "react";
import "./RatingComponent.css";
import GoogleLogo from "../../../public/assets/icons/googlelogo.svg";
import FullStar from "../../../public/assets/icons/fullstar.svg";
import HalfStar from "../../../public/assets/icons/halfstar.svg";

const RatingComponent: React.FC = () => {
  return (
    <div className="rating-container">
      <div className="rating-header">
        <img src={GoogleLogo} alt="Google Logo" className="google-logo" />
        <span className="rating-title">Bewertungen</span>
        <img src={FullStar} alt="full star" className="google-logo" />
        <img src={FullStar} alt="full star" className="google-logo" />
        <img src={FullStar} alt="full star" className="google-logo" />
        <img src={FullStar} alt="full star" className="google-logo" />
        <img src={HalfStar} alt="half star" className="google-logo" />
      </div>
      <p className="rating-text">4,6 VON 5 BASIEREND AUF 245 BEWERTUNGEN</p>
    </div>
  );
};

export default RatingComponent;
