import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {TestPage1} from './TestPage1';
import {TestPage2} from './TestPage2';
import {TestPage3} from './TestPage3';
import {BrowserRouter, Route, Switch, NavLink, Routes} from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justfy-content-center m-3">
        Sample React application
      </h3>

      <nav className="navbar navbar-expand-sm bg-light navar-dark">
          <ul className="navbar-nav">
            <li classname="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/home">
                Home
              </NavLink>
            </li>
            <li classname="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/TestPage1">
              TestPage1
              </NavLink>
            </li>
            <li classname="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/TestPage2">
              TestPage2
              </NavLink>
            </li>
            <li classname="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/TestPage3">
              TestPage3
              </NavLink>
            </li>
            </ul>
      </nav>
      <Routes>
        <Route path='/home' component={Home}/>
        <Route path='/TestPage1' component={TestPage1}/>
        <Route path='/TestPage2' component={TestPage2}/>
        <Route path='/TestPage3' component={TestPage3}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
