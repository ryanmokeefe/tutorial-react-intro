import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3005')

class App extends Component {
  constructor(props) {
    state = {
      messages: []
    }
    this.submitMessage = this.submitMessage.bind(this)
  }

  componentDidMount() {
    socket.on('chat message', (msg) => {
      this.setState({messages: this.state.messages.concat(msg)})
    })
  }

  submitMessage(e) {
    e.preventDefault()
    let message = document.getElementById('message').value
    socket.emit('chat meassage', msg)
    document.getElementById('message').value = ''
    // this.setState({
    // messages: e.target.value
  // })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <ul id='messages'>{messages}</ul>
          <form action='' onSubmit={this.submitMessage}>
            <input id='message' /><button>Send</button>
          </form>
        </div>


      </div>
    );
  }
}

export default App;
