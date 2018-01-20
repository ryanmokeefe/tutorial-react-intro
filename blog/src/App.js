import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import logo from './logo.svg';
import './App.css';
import Post from './Post.js'

let post = {
  title: "Baby's First Post",
  author: "Baby",
  body: "Look at me I'm a posting baby.",
  comments: [
    "First!",
    "Great post",
    "Hire him"
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <Post     
        title={post.title}
        author={post.author}
        body={post.body}
        comments={post.comments}/>

      </div>
    );
  }
}

export default App;
