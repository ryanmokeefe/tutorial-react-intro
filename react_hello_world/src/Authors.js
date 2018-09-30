import React, {Component} from 'react';

class Authors extends Component {
    render() {
        return(
            <div>Written by: {this.props.author}</div>
        )
    }
}

export default Authors
