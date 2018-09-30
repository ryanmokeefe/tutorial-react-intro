import React, { Component } from 'react';
import Comment from './Comment.js';
import Authors from './Authors.js'

class Post extends Component {
  render() {
    let comments = this.props.post.comments.map((comment, index) => {
      return (<Comment key={index} body={comment}/>)
    })
  
  let allAuthors=this.props.allAuthors.map((author) => {
    return (<Authors author={author} />)
  })

    return (
      <div className="theBody">
        <h1>{this.props.post.title}</h1>
        <p>By: {allAuthors}</p>
        <p>{this.props.post.body}.</p>
        <div>
          <h3>Comments</h3>
          {comments}
        </div>
      </div>
    )
  }
}

export default Post
