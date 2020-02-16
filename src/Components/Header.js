import React from 'react';

const Header = ({ title }) => (
    <div>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/Login">Login</a>
    <a href="/Profile">Profile</a>
    <a href="/Users">Users</a>
    <h1>{title}</h1>
    </div>
);

export default Header;