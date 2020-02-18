
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Compontents/Home';
import Signup from './Compontents/Signup';
import Login from './Compontents/Login';
import Volunteer from './Compontents/Volunteer';
import CharityList from './Compontents/CharityList';
import Search from './Compontents/Search';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const App = () => (
  <Router>
    <div>
          <Link to="/">Home</Link>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Login" component={Login} />
      <Route path="/Volunteer" component={Volunteer} />
      <Route path="/CharityList" component={CharityList} />
      <Route path="/Search" component={Search} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));