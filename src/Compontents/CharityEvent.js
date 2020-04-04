import React, { Component } from "react";

import CharityEventBar from "../Layout/CharityEventBar";
import EventService from "../service/EventService";

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
        <CharityEventBar />

        <header className="display-container">
          <div className="hero-image">
            <img
              src="https://github.com/bethel-school-of-technology/community-builders-frontend/raw/Resources/dakota-corbin-xh4mG4cqHGg-unsplash.jpg"
              alt="Do Good"
              width="100%"
              className="responsive"
            />
<<<<<<< HEAD

            <div className="text-block">
              <h2 className="text-center">Volunteer Opportunities </h2>
            </div>
            </div>
          </header>

          <div className="content">
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
=======
            <div className="text-block">
              <h2>Volunteer Opportunities</h2>
            </div>
>>>>>>> refs/remotes/origin/communitybuilders
          </div>
        </header>
        
        <div className="content">
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