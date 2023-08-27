import React from "react";
import {
  createBrowserRouter,
  Router,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { SettingSideBar } from "../../component/settings/settingSideBar"; // Import your Setting component
import { PersonalInfo } from "../../component/settings/personalInfo"; // Import your PersonalInfo component
import MenuManagement from "../../component/settings/menuManagment"; // Import your MenuManagement component
import { OrderManagement } from "../../component/settings/orderManagement";
import {PaymentAndPricing} from "../../component/settings/paymentAndPricing"
import "../../css/settings.css";

const Settings = () => {
  return (
    <div className="setting-container">
      <SettingSideBar />
      <Outlet />
    </div>
  );
};

export default Settings;
