import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
import Buildings from "/assets/icons/buildings.svg";
import Logo from "/assets/icons/logo.svg";
import Tools from "/assets/icons/tools.svg";
import Updown from "/assets/icons/updown.svg";
import Clipboard from "/assets/icons/clipboard.svg";
import Book from "/assets/icons/book.svg";
import Compass from "/assets/icons/compass.svg";
import Flag from "/assets/icons/flag.svg";
import RatingComponent from "./RatingComponent";
import ProfileCard from "./ProfileCard";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="tools-section">
        <img src={Tools} alt="Tools icon" className="tools-icon" />
        <div className="tools-badge">NACHTMODUS</div>
      </div>
      <div className="logo-container">
        <img src={Logo} alt="Logo icon" className="logo-icon" />
      </div>
      <SidebarItem
        icon={Buildings}
        title="Immobilienlexikon"
        subtitle="Immobilienwissen für alle Fälle."
        badgeText="KI"
        selected={false}
      />
      <SidebarItem
        icon={Updown}
        title="Preisschätzung"
        subtitle="Den Wert Ihres Hauses schätzen lassen."
        badgeText="LINK"
        selected={false}
      />
      <SidebarItem
        icon={Clipboard}
        title="Checklisten"
        subtitle="Praktische Checklisten für jeden Schritt."
        badgeText="PDF"
        selected={true}
      />
      <SidebarItem
        icon={Book}
        title="Ratgeber"
        subtitle="Immobilien-Expertenrat für Eigentümer."
        badgeText="PDF"
        selected={false}
      />
      <SidebarItem
        icon={Compass}
        title="Mandatsnavigator"
        subtitle="Verständlich zum Verkaufsabschluss."
        badgeText="KI"
        selected={false}
      />
      <SidebarItem
        icon={Flag}
        title="Wohntraumfinder"
        subtitle="Zum Traumheim mit KI-Unterstützung."
        badgeText="KI"
        selected={false}
      />
      <div className="sidebar-footer">
        <ProfileCard />
        <RatingComponent />
      </div>
    </div>
  );
};

export default Sidebar;
