import React from "react";
import "./ProfileCard.css";
import ProfileImage from "/assets/icons/profilepic.svg";

const ProfileCard: React.FC = () => {
  return (
    <div className="profile-card">
      <img
        src={ProfileImage}
        alt="Profile"
        className="profile-image-container"
      />
      <h2 className="profile-title">Immotrust AG</h2>
      <p className="profile-subtitle">
        Vertrauensvolle <br /> Immobilienberatung seit 2008.
      </p>
      <button className="profile-button">Carlos Kuk – Eigentümer</button>
    </div>
  );
};

export default ProfileCard;
