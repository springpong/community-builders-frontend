import React from 'react';
import Login from './Login';

const Charity = () => (
    <div>
        <h1>Charity Signup</h1>
        <form>
            <label>Charity Name:<input id="charityName" name="text" /></label><br/>
            <label>Charity Type:<input id="charityType" name="text" /></label><br/>
            <label>Email:<input id="email" type="email" /></label><br/>
            <label>Address:<input id="address" type="address"  /></label><br/>
            <label>Phone Number:<input id="phoneNumber" type="tel" /></label><br/>  
            <label>UserName:<input id="userName" type="text" /></label><br/>
            <label>Password:<input id="passWord" type="password" /></label><br/>
            <button onClick={Signup}>Login</button> <br />        
        </form>
            <h1>Charity Login</h1>
                <label> UserName: <input id="userName" type="text" /></label><br/>
                <label> Password: <input id="passWord" type="password"  /></label><br/>
            <button onClick={Login}>Login</button> <br />
    </div>
);

export default Charity;