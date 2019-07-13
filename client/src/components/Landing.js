import React, { Component, Fragment } from 'react'
import ChatInput from './ChatInput'

const URL = 'ws://localhost:8080'

export default class Landing extends Component {
    state = {
        name: '',
        messages: [],
      }
      
  webSocket = new WebSocket(URL)
    
  componentDidMount() {
    this.webSocket.onopen = () => {
      // checking connection
      console.log('connected');
    }

    this.webSocket.onmessage = (e) => {
      // on receiving a message add it to the list of messages
      const message = JSON.parse(e.data);
      this.addMessage(message);
    }

    this.webSocket.onclose = () => {
      // i wanna know if its disconnected
      console.log('disconnected');
    }
  }

  addMessage = message =>
    this.setState(state => ({ messages: [...state.messages, message] }))

  submitMessage = messageString => {
    // on submitting the message send it to webSocket and update state
    const message = { name: this.state.name, message: messageString }
    this.webSocket.send(JSON.stringify(message))
    this.addMessage(message)
  }

    render() {
    // console.log("state : "+ JSON.stringify(this.state))
        return (
            <Fragment>
                <div className="name-box">
                    <input className="name-input"
                        type="text"
                        id={'name'}
                        placeholder={'Enter your name...'}
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                    />
                </div>
                <div className="chat-body">
                    <div className="chat-body-inner">
                        <div className="chat-list">
                            {/* Chat List */}
                            {this.state.messages.map((message, index) =>

                            <Fragment key={index}>
                                {this.state.name=== message.name ? (
                                    <div className="chat-item user" >
                                        <div className="chat-item-inner">
                                            <div className="message"><span>{message.message}</span></div>
                                            <div className="message-username">{message.name}</div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="chat-item otheruser">
                                        <div className="chat-item-inner">
                                            <div className="image"><img src="https://dummyimage.com/31*31/ffffff/00BCD4&text=PIC" alt="" width="30"/></div>
                                            <div className="message"><span>{message.message}</span></div>
                                            <div className="message-username">{message.name}</div>
                                        </div>
                                    </div>
                                ) }
                            </Fragment>
                            )}
                        
                        </div>
                    </div>
                </div>
                <div className="message-form">
                    {this.state.name ? (
                        <ChatInput
                            webSocket={this.webSocket}
                            onSubmitMessage={messageString => this.submitMessage(messageString)}
                        />
                    ) : (
                        <div style= {{textAlign : 'center'}}>
                            Enter your name to chat...
                        </div>
                    ) }
                    
                </div>
        </Fragment>
        )
    }
}
