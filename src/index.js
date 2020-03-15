import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Compontents/Home';
import CharitySignup from './Compontents/CharitySignup';
import CharityLogin from './Compontents/CharityLogin';
import CharityProfile from './Compontents/CharityProfile';
import CharityEvent from './Compontents/CharityEvent';
import EventSignup from './Compontents/EventSignup';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/CharitySignup" component={CharitySignup} />
      <Route exact path="/CharityLogin" component={CharityLogin} />
      <Route exact path="/CharityProfile" component={CharityProfile} />
      <Route exact path="/CharityEvent" component={CharityEvent} />
      <Route exact path="/EventSignup" component={EventSignup} />
    </div>
  </Router>
);
 
ReactDOM.render(<App />, document.getElementById('root'));