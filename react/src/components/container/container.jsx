import React, { Component } from 'react';
import Login from '../login/login';
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

    login = (event) => {
        
        console.log('logado');
        this.setState({
            isLoggedIn: true,
            currentUser: { 
                id: 1, username:  document.getElementById('username').value 
            }
        })
                
    }

    logout = (event) => {
        this.setState({isLoggedIn: false, currentUser: null});
    }

    render() {
        if(this.state.isLoggedIn){
          return ( 
            <div className='container'>
              <div className='breadcrumb'>
                <h6 className='float-right'> Bem vindo, {this.state.currentUser.username}! 
                    <button id='login' className='btn btn-primary' onClick={this.logout}>Sair</button>
                </h6>
              </div>
              <div className='row'>
                <div className='col-md-3'>
                    <ChatList currentUser={this.state.currentUser} selectedUser={this.state.selectedUser} />
                </div>
                <div className='col-md-9'>
                    <ChatMessage currentUser={this.state.currentUser} selectedUser={this.state.selectedUser} />
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