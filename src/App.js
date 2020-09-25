import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import Upload from "./pages/Upload.js"
import Home from "./pages/Home.js"
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar  navbar-light bg-light">
          <div className="" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/upload">Upload</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/upload" component={Upload}></Route>
          <Route exact path="/404" component={NotFound}></Route>
          <Redirect to="/404"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
