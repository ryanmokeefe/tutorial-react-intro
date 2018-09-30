import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child.js'

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thing: ''
    }
    this.updateParentState = this.updateParentState.bind(this)
  }

  updateParentState(e) {
    this.setState({
      thing: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>thing is: {this.state.thing}</h1>
        <Child updateParentState={this.updateParentState}/>
      </div>
    );
  }
}

export default Parent;
