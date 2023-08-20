import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from './pages/dashbord/Dashboard'
import Analysitic from './pages/analystic/Analystic'
import Customer from './pages/customers/Customer'
import Message from './pages/message/Message'
import Setting from './pages/setting/Setting'
import Logout from './pages/logout/Logout'
import Login from './pages/login/Login';
import Root from './layout/Root';

function App() {

  const routes = createBrowserRouter([
    {
        path: '/', element:<Root/>, children: [
            {index: true, element: <Dashboard/>},
            {path: '/dashboard', element: <Dashboard/>},
            {path: '/analystic', element: <Analysitic/>},
            {path: '/customer', element: <Customer/>},
            {path: '/message', element: <Message/>},
            {path: '/setting', element: <Setting/>},
        ]
    },
    {path: '/logout', element: <Logout/>},
    {path: '/login', element: <Login/>}
])


  return (
    <div className="App main-div container">
      {/* <Sidebar/>
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
      </div> */}
      <RouterProvider router={routes}/>
     </div>
    
  );

}

export default App;
