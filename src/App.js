import logo from "./logo.svg";
import { Customer } from "./pages/Customer";
import "./App.css";

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
    <div>
      <Customer />
    </div>
  );
}

export default App;
