import React, { Component } from 'react';

export default class ChatFormComponent extends Component {

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          document.getElementById('send_button').click();
        }
      }
    
      render() {
        return (
          <div id='chat_form'>
            <div className='form-inline mt-3'>
                <input id='message_input' type='text' className='form-control col-md-11' onKeyPress={this.handleKeyPress} />
                <button id='send_button' className='btn btn-primary col-md-1' onClick={this.props.sendMessage}>Enviar</button>
            </div>
          </div>
        )
      }

}