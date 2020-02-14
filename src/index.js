
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Volunteer from './Screens/Volunteer';
import Charity from './Screens/Charity';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


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