
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import Login from './Screens/Login';
import Profile from './Screens/Volunteer';
import Users from './Screens/Charity';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Charity from './Screens/Charity';
import Volunteer from './Screens/Volunteer';

const App = () => (
  <Router>
    <div>
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Charity">Charity</Link>
        </li>
        <li>
          <Link to="/Volunteer">Volunteer</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/Volunteer" component={Volunteer} />
      <Route path="/Charity" component={Charity} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));