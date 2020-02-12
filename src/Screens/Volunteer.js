import React from 'react';
import Header from '../Components/Header';
import About from './About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Volunteer = ({match}) => (
    <div>
        <h2> Volunteer </h2>
        <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:aboutId`} component={About} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

export default Volunteer;