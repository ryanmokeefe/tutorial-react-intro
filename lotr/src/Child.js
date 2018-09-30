import React, {Component} from 'react';

class Child extends Component {
    

    
    render() {
        return (
            <form>
                <input type='text' onChange={this.props.updateParentState} />
                <input type='submit' />
            </form>
        )
    }
}

export default Child
