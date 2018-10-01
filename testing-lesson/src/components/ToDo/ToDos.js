import React, {Component} from 'react';
import ToDo from './ToDo.js'

class ToDos extends Component {
    // passing todo items as props:
    constructor (props) {
        super(props)
        this.state = {
          newTodo: '',
        }
      }
    
    handleChange = e => {
        this.setState({
            newTodo: e.target.value
        })
    }

    render() {
        return(
            <div>
                <input onChange={this.handleChange}/>
                {this.props.tasks.map((task, index) => {
                    <ToDo task={task} key={index}/>
                })}
            </div>
        )
    }
}

export default ToDos
