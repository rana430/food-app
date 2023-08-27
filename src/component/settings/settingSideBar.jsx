import React from "react";
import { Link } from "react-router-dom";

import { FaIdBadge } from "react-icons/fa6";
export const SettingSideBar = () => {
  
  return (
    <div className="setting-container">
      <div className="settings-sidebar">
        <h3>Settings</h3>
        <div className="settings-items">
          <ul>
            <li className="active-li">
              <Link to="/personalInfo" className="active-link-style">
                <FaIdBadge className="icons" />
                Personal Information
              </Link>
            </li>
            <li>
              <Link to="/menuManagement" className="link-styles">
                <FaIdBadge className="icons" />
                Menu Management
              </Link>
            </li>
            <li>
              <Link to="/orderManagement" className="link-styles">
                <FaIdBadge className="icons" />
                Order Management
              </Link>
            </li>
            <li>
              <Link to="/securityAndPrivacy" className="link-styles">
                <FaIdBadge className="icons" />
                Security & Privacy
              </Link>
            </li>
            <li>
              <Link to="/paymentAndPricing" className="link-styles">
                <FaIdBadge className="icons" />
                Payment & Pricing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


