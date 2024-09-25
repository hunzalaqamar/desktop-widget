import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Beginnen Sie Ihre Verkaufsreise</h1>
      <button className="reload-button">Reload</button>
    </header>
  );
};

export default Header;
