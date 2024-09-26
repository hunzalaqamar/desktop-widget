import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import HeaderCard from "./components/Header/HeaderCard";
import LayoutGrid from "./components/MainContent/LayoutGrid";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-area">
        <HeaderCard />
        <LayoutGrid />
      </div>
    </div>
  );
};

export default App;
