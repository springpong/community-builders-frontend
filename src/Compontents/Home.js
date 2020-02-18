import React from 'react';

const Home = () => (
    <div>
        <h1>I'm a Charity</h1>
        <nav>
            <ul>
                <li><a href="/Signup">Signup</a></li>
                <li><a href="/Login">Login</a></li>
            </ul>
        </nav>
        <h2>I'm a Volunteer</h2>
        <nav>
            <ul>
                <li><a href="/CharityList">Charities</a></li>
                <li><a href="/Search">Search</a></li>
            </ul>
        </nav>
        
        <h2> Details about Community Builders goes here </h2>
        <h3> Html and css can go here </h3>
        <footer> Maybe a search bar here </footer>
    </div>
);

export default Home;