import React from "react";
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
  return (
    <div className={`sidebar-item ${selected ? "selected" : ""}`}>
      <div className="sidebar-item-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <div className="sidebar-item-text">
        <div className="title-badge">
          <h3 className="sidebar-item-title">{title}</h3>
          {badgeText && (
            <div className="sidebar-item-badge">
              {badgeText}
              {badgeText === "PDF" && (
                <img src={ArrowDown} alt={`${ArrowDown} icon`} />
              )}
            </div>
          )}
        </div>
        <p className="sidebar-item-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
