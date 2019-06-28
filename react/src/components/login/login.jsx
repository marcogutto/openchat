import React, { Component } from 'react';
import './login.css';

export default class LoginComponent extends Component {

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      document.getElementById('login_button').click();
    }
  }

  render() {
    return (
      <div className='main'>
        <div className='form-inline'>
          <div className='container'>
              <h3>Login</h3>
              <input id="username_input" type='text' className='form-control col-md-11' onKeyPress={this.handleKeyPress} />
              <button id='login_button' className='btn btn-primary' onClick={this.props.login}>Entrar</button>
          </div>
        </div>
      </div>
    )
  }
}