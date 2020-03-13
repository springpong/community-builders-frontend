import React, { Component } from 'react'
import ApiService from "../service/ApiService";
import NavBar from "./NavBar";
class CharitySignup extends Component{
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
            charityTitle: '',
            charityName: '',
            charityCat: '',
            charityStreet: '',
            charityCity: '',
            charityState: '',
            charityZip: '',
            charityPhone: '',
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password, charityTitle: this.state.charityTitle, charityName: this.state.charityName, charityCat: this.state.charityCat,charityCity: this.state.charityCity, charityStreet: this.state.charityStreet, charityState: this.state.charityState, charityZip: this.state.charityZip, charityPhone: this.state.charityPhone};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/CharityLogin');
            })
            .catch(err => console.log(err));
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
          <NavBar />
                <h2 className="text-center">Charity Signup</h2>
                <form>
                <div className="form-group">
                    <label>User Name:</label>
                    <input type="text"  name="username" className="form-control" value={this.state.value} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password"  name="password" className="form-control" value={this.state.value} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Charity Title:</label>
                    <input  type="text" name="Ctype" className="form-control" value={this.state.value} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Charity Name:</label>
                    <input type="text" name="Cname" className="form-control" value={this.state.value} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Charity Cat:</label>
                    <input type="text"  name="Ccat" className="form-control" value={this.state.value} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Charity Street:</label>
                    <input  type="text" name="Cstreet" className="form-control" value={this.state.value} onChange={this.onChange}/>
                </div>
                
                <div className="form-group">
                    <label>Charity City:</label>
                    <input type="text" name="Ccity" className="form-control" value={this.state.value} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Charity State:</label>
                    <input type="text" name="Cstate" className="form-control" value={this.state.value} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Charity Zipcode:</label>
                    <input type="text"  name="Czip" className="form-control" value={this.state.value} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Charity Phone:</label>
                    <input type="text"  name="Cphone" className="form-control" value={this.state.value} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveUser}>Update</button>
            </form>
    </div>
        );
    }
}

export default CharitySignup;