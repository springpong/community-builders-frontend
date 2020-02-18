import React from 'react';

const CharityList = () => (
    <div>
        <h1>Charity Information</h1>
        <form>
            <label>Charity Name:<input id="charityName" name="charityname" type="text" /></label><br/>
            <label>Charity Type:<input id="charityType" name="charitytype" type="text" /></label><br/>
            <label>Email:<input id="email" name="email" type="email" /></label><br/>
            <label>Address:<input id="address" name="address" type="text" /></label><br/>
            <label>City:<input id="city" name="city" type="text"  /></label><br/>
            <label>State:<input id="state" name="state" type="text"  /></label><br/>
            <label>Zipcode:<input id="zipcode" name="zipcode" type="number"  /></label><br/>
            <label>Phone Number:<input id="phoneNumber" name="phonenumber" type="tel" /></label><br/>  
            <button onClick={CharityList}>Charities</button> <br />        
        </form>
    </div>
);

export default CharityList;