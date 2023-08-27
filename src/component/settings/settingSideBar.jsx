import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaIdBadge } from "react-icons/fa6";
export const SettingSideBar = () => {
  const [activeLink, setActiveLink] = useState(1);
  const settingHandleOnClick = (linkId) => {
    setActiveLink(linkId);
  };
  return (
    <div className="settings-sidebar">
      <h3>Settings</h3>
      <div className="settings-items">
        <ul>
          <li className={ activeLink===1 ? "active-li" :"link-styles"} >
            <Link to="personalInfo" onClick={settingHandleOnClick.bind(null, 1)}>
              <FaIdBadge className="icons" />
              Personal Information
            </Link>
          </li>
          <li className={ activeLink===2 ? "active-li" :"link-styles"}>
            <Link to="menuManagement" onClick={settingHandleOnClick.bind(null, 2)}>
              <FaIdBadge className="icons" />
              Menu Management
            </Link>
          </li>
          <li className={ activeLink===3 ? "active-li" :"link-styles"}>
            <Link to="orderManagement"onClick={settingHandleOnClick.bind(null, 3)}>
              <FaIdBadge className="icons" />
              Order Management
            </Link>
          </li>
          <li className={ activeLink===4 ? "active-li" :"link-styles"}>
            <Link to="securityAndPrivacy" onClick={settingHandleOnClick.bind(null, 4)}>
              <FaIdBadge className="icons" />
              Security & Privacy
            </Link>
          </li>
          <li className={ activeLink===5 ? "active-li" :"link-styles"}>
            <Link to="paymentAndPricing" onClick={settingHandleOnClick.bind(null, 5)}>
              <FaIdBadge className="icons" />
              Payment & Pricing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
