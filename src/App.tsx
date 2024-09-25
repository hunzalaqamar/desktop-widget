import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-area">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
