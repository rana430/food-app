import './App.css';
import { Routes, Route } from "react-router-dom";
import Sidebar from './component/sidebar/Sidebar';
import Dashboard from './pages/dashbord/Dashboard'
import Analysitic from './pages/analystic/Analystic'
import Customer from './pages/customers/Customer'
import Message from './pages/message/Message'
import Setting from './pages/setting/Setting'
import Logout from './pages/logout/Logout'
import Navbar from './component/navbar/Navbar';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App main-div container">
      <Sidebar/>
      <div>
      <Navbar/>
      <Routes>
        <Route path="/"element={<Dashboard/>}/>
        <Route path="/analystic" element={<Analysitic />}/>
        <Route path="/Customer" element={<Customer />} />
        <Route path="/message" element={<Message />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
