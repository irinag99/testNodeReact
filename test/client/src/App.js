import React from 'react';
import { Register } from './app/Register'
import { Login } from './app/Login';
import { Category } from './app/Categry';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { DetailCategory } from './app/DetailCategory';
import { DetailApp } from './app/DetailApp';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App" >
      <nav >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users/login">Login</Link>
            </li>
            <li>
              <Link to="/users/register">Register</Link>
            </li>
            <li>
              <Link to="/categories">Categorias</Link>
            </li>
          </ul>
        </nav>
      </div>
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
{/*         <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </Router>

  );
}

export default App;
