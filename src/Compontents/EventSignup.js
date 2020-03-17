import React, { Component } from 'react'
import EventService from "../service/EventService";
import CharityProfileBar from "../Layout/CharityProfileBar";

class EventSignup extends Component{
    constructor(props){
        super(props);
        this.state ={
            charityName: '',
            charityPhone: '', 
            eventName: '',
            eventLocation: '',
            eventDate: '',
            eventTime: '',
            eventDescription: '',
        }
        this.saveUser = this.saveUser.bind(this);
    }
 
    saveUser = (e) => {
        e.preventDefault();
        let events = {charityName: this.state.charityName, charityPhone: this.state.charityPhone, eventName: this.state.eventName, eventLocation: this.state.eventLocation, eventDate: this.state.eventDate, eventTime: this.state.eventTime, eventDescription: this.state.eventDescription};
        EventService.addEvents(events)
            .then(res => {
                this.props.history.push('/CharityLogin');
            })
            .catch(err => console.log(err));
    }

    onChange = (e) =>
        this.setState({[e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <CharityProfileBar />
                <h2 className="text-center">Events Signup</h2>
                <form>
                <div className="form-group">
                    <label>Charity Name:</label>
                    <input type="text" name="charityName"  value={this.state.charityName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Charity Phone:</label>
                    <input type="text" name="charityPhone"  value={this.state.charityPhone} onChange={this.onChange}/>
                </div>

               <div className="form-group">
                    <label>Event Name:</label>
                    <input  type="text" name="eventName"  value={this.state.eventName} onChange={this.onChange}/>
                </div>
                
                <div className="form-group">
                    <label>Event Location:</label>
                    <input type="text" name="eventLocation"  value={this.state.eventLocation} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Event Date:</label>
                    <input type="text" name="eventDate"  value={this.state.eventDate} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Event Time:</label>
                    <input type="text"  name="eventTime"  value={this.state.eventTime} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Event Description:</label>
                    <input type="text"  name="eventDescription"  value={this.state.eventDescription} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveUser}>Update</button>
            </form>
    </div>
        );
    }
}

export default EventSignup;