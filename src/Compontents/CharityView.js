import React, { Component } from "react";
import ApiService from "./ApiService"

class CharityView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      charityName: '',
      charityStreet: '',
      charityCity: ''
     }
     this.loadUser = this.loadUser.bind(this);
  }

  componentDidMount() {
    this.loadUser();
}

loadUser() {
  ApiService.fetchUserByUsername(window.localStorage.getItem("username"))
            .then((res) =>{
              let user = res.data.result;
              this.setState({
                username: user.username,
                charityName: user.charityName,
                charityStreet: user.charityStreet,
                charityCity: user.charityCity
              })
            });
}


render(){
    return (
    <div>
        <h3>Charity Profile</h3>
        <form>
        <TextField type="text" placeholder="username" fullWidth margin="normal" name="username" readonly="true" value={this.state.username}/>
        <TextField type="text" placeholder="Charity Name" fullWidth margin="normal" name="charityName" readonly="true" value={this.state.charityName}/>
        <TextField type="text" placeholder="Charity Street" fullWidth margin="normal" name="charityStreet" readonly="true" value={this.state.charityStreet}/>
        <TextField type="text" placeholder="Charity City" fullWidth margin="normal" name="charityCity" readonly="true" value={this.state.charityCity}/>
        </form>
    </div>
    )
}}

export default CharityView;