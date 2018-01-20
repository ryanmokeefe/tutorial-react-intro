// es6 syntax, works asynchronously:
import React, { Component } from 'react'


// extends - inherits
class Hello extends Component {
    render () {
        // canot return more than one element. if you need to return multiple elements, nest them in one.
        return <div>
            <h1>HELLO {this.props.name}</h1>
            <p>you are {this.props.age} years old</p>
        </div>
    }
}
export default Hello
