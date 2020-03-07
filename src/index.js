
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Compontents/Home';
import Charity from './Compontents/Charity';
import CharityEvent from './Compontents/CharityEvent';
import CharityProfile from './Compontents/CharityProfile';
import CharityLogin from './Compontents/CharityLogin';
import CharityViewProfile from './Compontents/CharityViewProfile';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const App = () => (
  <Router>
    <h1>
      <Route exact path="/" component={Home} />
      <Route exact path="/Charity" component={Charity} />
      <Route exact path="/CharityProfile" component={CharityProfile} />
      <Route exact path="/CharityEvent" component={CharityEvent} />
      <Route exact path="/CharityLogin" component={CharityLogin} />
      <Route exact path="/CharityViewProfile" component={CharityViewProfile} />
    </h1>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));