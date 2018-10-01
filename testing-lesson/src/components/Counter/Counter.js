import React, {Component} from 'react';

class Counter extends Component {
//     constructor(props){
//         super(props)
        state = {
            number: 0
        }
        // this.decreaseNumber = this.decreaseNumber.bind(this)
    // }

    increaseNumber() {
        this.setState(prevState => ({
            number: prevState.number++
        }))
    }

    decreaseNumber() {
        this.setState(prevState => ({
            number: prevState.number--
        }))
    }
    
    render() {

        return (
          <div>
            <h1>Counter</h1>
            <div className='number'>
                {this.state.number}
                <button className="minus" onClick={this.decreaseNumber()}> - </button>
                <button onClick={this.increaseNumber()} className='plus'> + </button>
            </div>
          </div>
        )
    }
    
}

export default Counter
