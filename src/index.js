
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Compontents/Home';
import Charity from './Compontents/Charity';
import CharityEvent from './Compontents/CharityEvent';
import CharityProfile from './Compontents/CharityProfile';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const App = () => (
  <Router>
    <h1>
          <Link to="/">Home</Link>
          <Link to="CharityProfile">CharityProfile</Link>
          <Link to="CharityEvent">CharityEvent</Link>

      <hr />
      <Route exact path="/" component={Home} />
      <Route exact path="/Charity" component={Charity} />
      <Route exact path="/CharityProfile" component={CharityProfile} />
      <Route exact path="/CharityEvent" component={CharityEvent} />

    </h1>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));