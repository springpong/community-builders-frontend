import React from 'react';

const Login = () => (
    <form>
        <h1>Charity Login</h1>
        <label> UserName: <input id="userName" name="username" type="text" /></label><br/>
        <label> Password: <input id="passWord" name="password" type="password"  /></label><br/>
        <button onClick={Login}>Login</button> <br />
    </form>
);

export default Login;