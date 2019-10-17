import React, { Component } from 'react'
import Post from './Post'
import { Consumer } from '../context'

class Posts extends Component {

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>{value.posts.map(post =>
              <Post message={post.message} id={post.id} key={post.id} />
            )}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Posts
