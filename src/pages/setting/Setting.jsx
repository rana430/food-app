import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {SettingSideBar} from "../../component/settings/settingSideBar"; // Import your Setting component
import {PersonalInfo} from "../../component/settings/personalInfo"; // Import your PersonalInfo component
import {MenuManagement} from "../../component/settings/menuManagment"; // Import your MenuManagement component
import "../../css/settings.css"
const Settings = () => {
  return (
    <>
    <SettingSideBar/>
      <Routes>
        <Route path="/personalInfo" element={<PersonalInfo />} />
        <Route path="/menuManagement" element={<MenuManagement />} />
      </Routes>
</>
  );
}

export default Settings;
