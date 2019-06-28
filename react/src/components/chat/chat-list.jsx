import React, { Component } from 'react';

export default class ChatListComponent extends Component {

    constructor(props){
        super(props);

        this.selectedUser = this.props.selectedUser;
        this.currentUser = this.props.currentUser;

        this.state = {
            users: [
                {
                  "id": 1,
                  "username": "marco"
                },
                {
                  "id": 2,
                  "username": "marcogutto"
                }
              ]
        }

    }

    componentDidMount() {
    
    }

    render() {
        return (
            <div>
                <h3>Usuários</h3>
                <ul className='list-group text-dark'> 
                    {this.state.users.map((user, index) =>
                        {
                            if(user.id === this.currentUser.id)
                            {
                                return undefined;
                            }

                            let class_name = 'list-group-item user';

                            if(user.id === this.selectedUser.id)
                            {
                                class_name += ' active';
                            }

                            return (
                                <li key={user.id} id={user.id} value={user.username} className={class_name} onClick={this.props.handleClick}>{user.username}</li>
                            )
                        }
                    )}
                </ul>
            </div>
        )
    }

}