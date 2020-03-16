import React, { Component } from "react";
import EventService from "../service/EventService";
import Home from "./Home";

class CharityEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      message: null
    }; 
    this.reloadEventsList = this.reloadEventsList.bind(this);
  }

  componentDidMount() {
    this.reloadEventsList();
  }

  reloadEventsList() {
    EventService.fetchEvents().then(response => {
      console.log(response.data);
      this.setState({ events: response.data });
    });
  }

  render() {
    return (
      <div>
        <Home />
        <h2 className="text-center">CharityEvents </h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Charity Name</th>
              <th>Charity Phone</th>
              <th>Event Name</th>
              <th>Event Location</th>
              <th>Event Date</th>
              <th>Event Time</th>
              <th>Event Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.events.map(events => (
              <tr key={events.id}>
                <td>{events.charityName}</td>
                <td>{events.charityPhone}</td>
                <td>{events.eventName}</td>
                <td>{events.eventLocation}</td>
                <td>{events.eventDate}</td>
                <td>{events.eventTime}</td>
                <td>{events.eventDescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CharityEvent;