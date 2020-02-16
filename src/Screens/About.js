import React from 'react';

const About = ({ match }) => (
  <div>
    <h3>{match.params.aboutId}</h3>
  </div>
);

export default About;