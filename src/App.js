import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import Upload from "./pages/Upload.js"
import Home from "./pages/Home.js"

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
