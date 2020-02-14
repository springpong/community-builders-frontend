import React from 'react';
import Charity from './Charity';

function signUp () {
    var CharityName = document.getElementById("charityName").value;
    var CharityType = document.getElementById("charityType").value;
    var Email = document.getElementById("email").value;
    var Address = document.getElementById("address").value;
    var PhoneNumber = parseInt(document.getElementById("phoneNumber").value);
    var UserName = document.getElementById("userName").value;
    var Password = document.getElementById("passWord").value;
  
    document.getElementById("PostFullName").innerHTML = PostFullName;
    document.getElementById("PostAddress").innerHTML = Address;
}
export default Signup;