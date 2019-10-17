import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        posts: state.posts.filter(post =>
          post.id !== action.payload)
      }
    case 'ADD_CONTACT':
      console.log(state)

      return {
        ...state,
        posts: [action.payload,
        ...state.posts]
      }
    default:
      return state;
  }
}

export class Provider extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/posts/', {
      method: 'GET',
    }
    ).then(response => response.json()
    ).then(data => {
      this.setState({ posts: data })
    })
  }

  //State
  state = {
    posts: [
    ],

    //Methods

    dispatch: action => this.setState(state => reducer(state, action))
  }

  //Ho you have access to the methods
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;