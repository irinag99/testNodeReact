import React from 'react';
import { Register } from './app/Register'
import { Login } from './app/Login';
import { Category } from './app/Categry';
import { Cart } from './app/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { DetailCategory } from './app/DetailCategory';
import { DetailApp } from './app/DetailApp';
import { Apps } from './app/App';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/apps">Apps</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categories">Categories</a>
            </li>
          </ul>

        </div>
        <ul>
          <li><Link to="/users/login">Login</Link></li>
          <li><Link to="/users/register">Register</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/users/login">
          <Login />
        </Route>
        <Route path="/users/register">
          <Register />
        </Route>
        <Route path="/categories" exact>
          <Category />
        </Route>
        <Route path="/categories/:id">
          <DetailCategory />
        </Route>
        <Route path="/apps/:id">
          <DetailApp />
        </Route>
        <Route path="/apps" exact>
          <Apps />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
