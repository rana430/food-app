import logo from './logo.svg';
import './App.css';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

export default App;
