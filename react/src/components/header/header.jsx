import React, { Component } from 'react';

export default class HeaderComponent extends Component {

    constructor(props){
        super(props);

        this.currentUser = this.props.currentUser;

        this.state = {
            isLoggedIn: false,
            currentUser: null,
            selectedUser: { 
                id: null, 
                username: null 
            }
        }
    }

    render() {

        return ( 
            <header>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">OpenChat</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Configurações
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">{this.currentUser.username}</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <button id='logout' className='btn btn-outline-primary' onClick={this.logout}>Sair</button>
                    </li>
                  </ul>  
                </div>
              </nav>
            </header>
        )
    }
}