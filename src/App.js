import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashbord/Dashboard";
import Analystic from "./pages/analystic/Analystic";
import Customer from "./pages/customers/Customer";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import Message from "./pages/message/Message";
import Setting from "./pages/setting/Setting";
import "./css/Analystic.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Analystic />}>
          {" "}
          {/* Use Dashboard as the layout component */}
          <Route index element={<Analystic />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analystic" element={<Analystic />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/message" element={<Message />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
