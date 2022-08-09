import React, { Component } from 'react'

class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
        email: '',
        password: ''
      }
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
        alert(`Email: ${this.state.email}\nPassword: ${this.state.password}`)
      }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Email:</label>
              <input type='text' value={this.state.email} onChange={this.emailChange}/>
            </div>
            <div>
              <label>Password:</label>
              <input type='text' value={this.state.password} onChange={this.passwordChange}/>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      )
    }
  }
export default Login