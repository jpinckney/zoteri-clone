import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.createAccount = this.createAccount.bind(this);
  }

  async login() {
    let { email, password } = this.state
    let res = await axios.post('/auth/login', { email, password })
    this.setState({ email: '', password: '' })
    if (res.data.Loggedin) {
      this.props.history.push('/')
    }

  }

  async createAccount() {
    let { email, password } = this.state
    let res = await axios.post('/auth/createaccount', { email, password })
    console.log(res)
    this.setState({ email: '', password: '' })
    if (res.data.Loggedin) {
      console.log(res.data)
      this.props.history.push('/')
    }
  }



  render() {
    return (
      <div className='login-wrapper'>
        <h1>Login route</h1>
        <form>
          <p>Email:
            <input
              onChange={ (e) => this.setState({ email: e.target.value }) }
              type='text'
              value={ this.state.email }></input></p>
          <p>Password:
            <input
              onChange={ (e) => this.setState({ password: e.target.value }) }
              type='text'
              value={ this.state.password }></input></p>
          <button onClick={ () => this.login() }>Login</button>
          <button onClick={ () => this.createAccount() }>Create Account!</button>
        </form>
      </div>
    )
  }
}
