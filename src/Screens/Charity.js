import React from 'react';
import Login from './Login';

const Charity = () => (
    <div>
        <h1>Charity Signup</h1>
        <form>
            Charity Name:
            <input id="charityName" name="text" /> <br/>
            Charity Type:
            <input id="charityType" name="text" /><br/>
            Email:
            <input id="email" type="email" /><br/>
            Address:
            <input id="address" type="address"  /><br/>
            Phone Number:
            <input id="phoneNumber" type="tel" /><br/>  
            UserName:
            <input id="userName" type="text" /><br/>
            Password:  
            <input id="passWord" type="password" /><br/>
        </form>
        <button onClick={this.signUp} >Signup</button> <br />
        <h1>Charity Login</h1>
        <label> UserName: <input type="text" id="userName"/></label><br/>
         <label> Password: <input type="password" id="passWord" /></label><br/>
         <button onClick={this.logIn} >Login</button> <br />
    </div>
);

export default Charity;