import React, { Component } from 'react';
import Login from '../login/login';
import Header from '../header/header';
import ChatMessage from '../chat/chat-message';
import ChatList from '../chat/chat-list';

export default class ContainerComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            isLoggedIn: false,
            currentUser: null,
            selectedUser: { 
                id: null, 
                username: null 
            }
        }
    }

    handleClick = (event) => {
      this.setState({
        selectedUser: {id: event.target.getAttribute('id'), username: event.target.getAttribute('value')}
      });
      let users = document.querySelectorAll(".user");
      for(var i=0; i < users.length; i++){
        users[i].classList.remove('active');
      }
      document.getElementById(event.target.getAttribute('id')).classList.add('active');
    }

    login = (event) => {
        
        console.log('logado');
        this.setState({
            isLoggedIn: true,
            currentUser: { 
                id: 1, username:  document.getElementById('username_input').value 
            }
        })
                
    }

    logout = (event) => {
        this.setState({isLoggedIn: false, currentUser: null});
    }

    render() {
        if(this.state.isLoggedIn){
          return ( 
            <div>
              <Header currentUser={this.state.currentUser}/>
              <div className='container mt-4'>
                <div className='row'>
                  <div className='col-md-3'>
                      <ChatList currentUser={this.state.currentUser} selectedUser={this.state.selectedUser} handleClick={this.handleClick} />
                  </div>
                  <div className='col-md-9'>
                      <ChatMessage currentUser={this.state.currentUser} selectedUser={this.state.selectedUser} />
                  </div>
                </div>
              </div>
            </div>
          );
        }

        return (
          <Login login={this.login} />
        );
      }

}