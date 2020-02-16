import React from 'react';
import Charity from './Charity';


function Login () {
    var UserName = document.getElementById("userName").value;
    var Password = document.getElementById("passWord").value;
    var PostName = UserName + " " + Password;
    document.getElementById("PostName").innerHTML = PostName;
}
export default Login;