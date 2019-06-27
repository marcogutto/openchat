import React, { Component } from 'react';
import './login.css';

export default class LoginComponent extends Component {

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      document.getElementById('login').click();
    }
  }

  render() {
    return (
      <div className='form-inline'>
        <div className='container'>
            <h3 className='login'>Login</h3>
            <input id="username" type='text' className='form-control col-md-11' onKeyPress={this.handleKeyPress} />
            <button id='login' className='btn btn-primary' onClick={this.props.login}>Entrar</button>
        </div>
      </div>
    )
  }
}