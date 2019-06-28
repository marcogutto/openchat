import React, { Component } from 'react';
import ChatForm from './chat-form';

export default class ChatMessageComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            messages: [
                {
                  "id": 1,
                  "content": "dasdsa",
                  "from_id": 1,
                  "to_id": 2,
                  "created_at": "2019-06-28T15:31:55.970Z",
                  "updated_at": "2019-06-28T15:31:55.970Z"
                }
            ]
        }
    }

    componentDidMount() {
        this.loadMessages();
        this.timer = setInterval(()=> this.loadMessages(), 5000);
    }

    componentWillUnmount() {
        this.timer = null;
    }

    componentDidUpdate(prevProps) {
        if(prevProps.selectedUser.id !== this.props.selectedUser.id)
        {
            this.loadMessages();
        }
    }

    loadMessages() {
        console.log('loadMessages');
    }

    sendMessage = (event) => {
    
        console.log('messageSent');
        document.getElementById('message_input').value = '';
        this.loadMessages();
    }

    render() {

        this.selectedUser = this.props.selectedUser;
        this.currentUser = this.props.currentUser;

        if(this.selectedUser.id)
        {
          return (
            <div className='mt-1'>
              <h4>{this.selectedUser.username}</h4>
              <ul className='list-group'>
                {this.state.messages.map((message, index) =>
                  {
                    let class_name = 'list-group-item text-dark'
                    if(message.from_id === this.currentUser.id)
                    {
                      class_name += ' text-right'
                    }

                    else
                    {
                      class_name += ' text-left'
                    }
    
                    return (
                      <li key={message.id} className={class_name}>{message.content}</li>
                    )
                  }
                )}
              </ul>
              <ChatForm sendMessage={this.sendMessage} />
            </div>
          )
        }
        else
        {
          return (
            <div>
              <h4>Selecione um usuário</h4>
            </div>
          )
        }
    }

}