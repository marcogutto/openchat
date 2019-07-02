import React, { Component } from 'react';

export default class ChatListComponent extends Component {

    constructor(props){
        super(props);

        this.selectedUser = this.props.selectedUser;
        this.currentUser = this.props.currentUser;

        this.state = {
            users: [ ]
        }

    }

    componentDidMount() {
        const url = 'http://localhost:3001/api/';
        var request = new Request(url, {
            method: 'POST',
            body: 'query {'+ 
                    'users {'+
                    'id,'+
                    'username'+
                    '}'+
                '}'
            ,
            headers: {
            "Content-type": "application/graphql; charset=UTF-8"
            },
        });

        fetch(request)
        .then(res => res.json())
            .then(
            (result) =>
            {
                console.log(result)
                this.setState({
                    users: result.data.users
                })
            }
        )
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