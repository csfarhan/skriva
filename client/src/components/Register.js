import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker'
import {useState, useEffect} from 'react';

const DateSet = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      date: ''
    }
  }
  firstNameChange = (event) =>{
    this.setState({
      firstname: event.target.value
    })
  }
  lastNameChange = (event) => {
    this.setState({
      lastname: event.target.value
    })
  }
  emailChange = (event) =>{
    this.setState({
      email: event.target.value
    })
  }
  passwordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  handleSubmit = (event) =>{
    alert(`First Name: ${this.state.firstname}
    \nLast Name: ${this.state.lastname}
    \nEmail: ${this.state.email}
    \nPassword: ${this.state.password}
    \nDate: ${<DateSet/>}`)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name:</label>
            <input type='text' value={this.state.firstname} onChange={this.firstNameChange}/>
          </div>
          <div>
            <label>Last Name:</label>
            <input type='text' value={this.state.lastname} onChange={this.lastNameChange}/>
          </div>
          <div>
            <label>Email:</label>
            <input type='text' value={this.state.email} onChange={this.emailChange}/>
          </div>
          <div>
            <label>Password:</label>
            <input type='text' value={this.state.password} onChange={this.passwordChange}/>
          </div>
          <div>
            <label>Date of birth: </label>
            <DateSet />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}


export default Register;