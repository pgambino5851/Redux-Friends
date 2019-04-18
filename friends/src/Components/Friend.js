import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteFriend} from '../actions/index'

class Friend extends Component {

    deleteFriend = e => {
        e.preventDefault();
        this.props.deleteFriend(this.props.friend.name)
    }

    render() {


    return (
      <div 
      style={{
          border: '1px solid black',
          width: "200px",
          margin: "0 auto"

        }}>
          <p>{this.props.friend.name}</p>
          <p>{this.props.friend.age}</p>
          <p>{this.props.friend.email}</p>
          <button onClick={this.deleteFriend}>End My Existence</button>
      </div>
    )
  }
}

export default connect(null, {deleteFriend})(Friend)