
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Compontents/Home';
import Charity from './Compontents/Charity';
import Volunteer from './Compontents/Volunteer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const App = () => (
  <Router>
    <div>
          <Link to="/">Home</Link>
          <Link to="/Charity">Charity</Link>
          <Link to="/Volunteer">Volunteer</Link>
      <hr />
      <Route exact path="/" component={Home} />
      <Route exact path="/Charity" component={Charity} />
      <Route path="/Volunteer" component={Volunteer} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));