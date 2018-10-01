import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello </h1>
        <Person name="Frank" age="23"/>
        <Person name="Bob" age="34"/>
        <Person name="Amy" age="15"/>
        <Person name="Suzy" age="35"/>

      </div>
    );
  }
}

export default App;
