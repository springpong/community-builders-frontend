import React, { Component } from 'react'
import ApiService from "../service/ApiService";
import Home from "./Home";

class CharitySignup extends Component{
    constructor(props){
        super(props);
        this.state ={
            charityName: '',
            charityStreet: '',
            charityCity: '',
            charityState: '',
            charityZip: '',
            charityPhone: '',
            charityEvent: '',
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {charityName: this.state.charityName, charityCity: this.state.charityCity, charityStreet: this.state.charityStreet, charityState: this.state.charityState, charityZip: this.state.charityZip, charityPhone: this.state.charityPhone, charityEvent: this.state.charityEvent};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/CharityLogin');
            })
            .catch(err => console.log(err));
    }

    onChange = (e) =>
        this.setState({[e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <Home />
                <h2 className="text-center">Charity Signup</h2>
                <form>
                <div className="form-group">
                    <label>Charity Name:</label>
                    <input type="text" name="charityName" className="form-control" value={this.state.charityName} onChange={this.onChange}/>
                </div>

               <div className="form-group">
                    <label>Charity Street:</label>
                    <input  type="text" name="charityStreet" className="form-control" value={this.state.charityStreet} onChange={this.onChange}/>
                </div>
                
                <div className="form-group">
                    <label>Charity City:</label>
                    <input type="text" name="charityCity" className="form-control" value={this.state.charityCity} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Charity State:</label>
                    <input type="text" name="charityState" className="form-control" value={this.state.charityState} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Charity Zipcode:</label>
                    <input type="text"  name="charityZip" className="form-control" value={this.state.charityZip} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Charity Phone:</label>
                    <input type="text"  name="charityPhone" className="form-control" value={this.state.charityPhone} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveUser}>Update</button>
            </form>
    </div>
        );
    }
}

export default CharitySignup;