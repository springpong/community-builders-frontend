import React from 'react';

const Search = () => (
    <div>
        <h1>Search for a Charity</h1>
        <form>
            <label>Charity Name:<input id="charityName" name="charityname" type="text" /></label><br/>
            <label>Charity Type:<input id="charityType" name="charitytype" type="text" /></label><br/>
            <button onClick={Search}>Search</button> <br />        
        </form>
    </div>
);

export default Search;