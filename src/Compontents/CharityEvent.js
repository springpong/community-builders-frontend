import React, { Component } from "react";

class CharityEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charityName: "",
      eventName: "",
      eventAddress: "",
      eventCity: "",
      eventState: "",
      eventZipcode: "",
      eventDate: "",
      eventTime: "",
      eventDescription: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount () {
    fetch ("https://localhost8080/api/charity/events")
      .then(res => res.json())
      .then(data => this.setState({posts: data}));
  }

  render() {
    return (
      <table>
        <tr>
          <th>Charity Name</th>
          <th>Event Name</th>
          <th>Event Address</th>
          <th>Event City</th>
          <th>Event State</th>
          <th>Event Zipcode</th>
          <th>Event Date</th>
          <th>Event Time</th>
          <th>Event Description</th>
        </tr>
        {this.state.posts.map((item,index) => (
          <div key={index}>
        <tr>
          <td>item.charityName </td>
          <td>item.eventName </td>
          <td>item.eventAddress</td>
          <td>item.eventCity </td>
          <td>item.eventState</td>
          <td>item.Zipcode</td>
          <td>item.Date </td>
          <td>item.eventTime</td>
          <td>item.eventDescription</td>
        </tr>
        </div>
        ))}
      </table>
    );
  }
}
export default CharityEvent;
