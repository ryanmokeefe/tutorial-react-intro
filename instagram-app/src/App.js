import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render () {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    )}}

    // ///////

class Title extends Component {
  render () {
    return (
      <div className="titleDiv">
        <div className="userImage"></div>
        <div className="userName"></div>
      </div>
    )
  }
}



class Comment extends Component {
  render() {
    return (
    <div className="commentBox">
      <p className="commentor"></p>
      <p className="comment"></p>
    </div>
    )}
}

class Image extends Component {
  render () {
    return (
      <div className="image">
      </div>
    )
  }
}

class Imagepost extends Component {
  render() {
    return (
      <div className="post">
        <div className="title">
          <Title />
        </div>
        <div className="Image">
          <Image />
        </div>
        <div className="Comments">
          <Comment />
        </div>

      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
        <Imagepost />

        </div>

       
      </div>
    );
  }
}

export default App;
