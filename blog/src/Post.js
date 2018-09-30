import React, { Component } from 'react'
import Comment from './Comment.js'

class Post extends Component {

    render () {

        let comments = this.props.comments.map((comment, index) => (
            <Comment message={comment} key={index} />
        ))
    
        return (
        <div className="Post">
            <h1>{this.props.title}</h1>
            <h3>Written by: {this.props.author}</h3>
            <p>{this.props.body}</p>
            
            <h3>Comments:</h3>
            {/* <Comment message={this.props.comments[0]} />
            <Comment message={this.props.comments[1]} />
            <Comment message={this.props.comments[2]} /> */}
            {comments}
            <Comment message="hello world"/>

        </div>
    )}

}
export default Post
