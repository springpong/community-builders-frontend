import React from 'react';
import Charity from './Charity';

const Login = () => (
    <div>
        <h2> Login </h2>
    </div>
);
function logIn () {
    var UserName = document.getElementById("userName").value;
    var Password = document.getElementById("passWord").value;
    var PostName = UserName + " " + Password;
    document.getElementById("PostName").innerHTML = PostName;
}
export default Login;