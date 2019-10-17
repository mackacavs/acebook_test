import React, { Component } from 'react'
import { Consumer } from '../context';



class Post extends Component {

  onDeleteClick = (id, dispatch, e) => {

    e.preventDefault()
    console.log(id)

    fetch(`http://localhost:3000/api/v1/posts/${id}`, {
      method: 'DELETE'
    }).then(response => response.json())

    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, message } = this.props
    return (

      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card card-body mb-3">
              <input id={id} type="text" readOnly hidden />
              <h6>{message} <i value={id} className="fas fa-times"
                style={{ float: 'right', color: 'red' }}
                onClick={this.onDeleteClick.bind(this, id, dispatch)}
              /></h6>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Post

