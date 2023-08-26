import React from "react";
import "./settings.css";
import {FaIdBadge} from "react-icons/fa6";
const Setting = () => {
  return (
    <div className="setting-container">
      <div className="settings-sidebar">
        <h3>Settings</h3>
        <div className="settings-items">
          <ul>
            <li className="active-li"><FaIdBadge className="icons"/>Personal Information</li>
            <li><FaIdBadge className="icons"/>Menu Management</li>
            <li><FaIdBadge className="icons"/>Order Management</li>
            <li><FaIdBadge className="icons"/>Security&Privacy</li>
            <li><FaIdBadge className="icons"/>Payment &Pricing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Setting;
