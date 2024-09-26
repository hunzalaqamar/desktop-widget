import React, { useState } from "react";
import "./SidebarItem.css";
import ArrowDown from "../../assets/icons/arrowdown.svg";

interface SidebarItemProps {
  icon: string;
  title: string;
  subtitle: string;
  badgeText?: string;
  selected?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  title,
  subtitle,
  badgeText,
  selected,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`sidebar-item ${selected ? "selected" : ""}`}>
      <div className="sidebar-item-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <div className="sidebar-item-text">
        <div className="title-badge">
          <h3 className="sidebar-item-title">{title}</h3>
          {badgeText && (
            <div
              className="sidebar-item-badge"
              onClick={badgeText === "PDF" ? toggleDropdown : undefined}
            >
              {badgeText}
              {badgeText === "PDF" && (
                <img
                  src={ArrowDown}
                  alt="Dropdown icon"
                  className={`arrow-icon ${isDropdownOpen ? "open" : ""}`}
                />
              )}
            </div>
          )}
        </div>
        <p className="sidebar-item-subtitle">{subtitle}</p>
        {isDropdownOpen && badgeText === "PDF" && (
          <div className="dropdown-menu">
            <ul>
              <li>Download PDF</li>
              <li>View Details</li>
              <li>Share</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarItem;
