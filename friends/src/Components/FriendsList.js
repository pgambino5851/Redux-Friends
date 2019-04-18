import React, { Component } from 'react'
import Friend from './Friend'
import {connect} from 'react-redux'
import {getFriends, addFriend} from '../actions/index'

class FriendsList extends Component {

    state = {
        newFriend: {
            name: '',
            age: '',
            email: ''
        }
    }


    componentDidMount() {
        return this.props.getFriends();
    }

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        })
    }

    addFriend = e => {
        e.preventDefault();
        this.props.addFriend(this.state.newFriend)
    }

  render() {
    console.log("FriendsList props:", this.props)
    return (
      <div>
        <h1>Friends List</h1>
        {this.props.isFetching && (
            <h3>Fetching data...</h3>
        )}
        {this.props.friends.map(friend => {
           return <Friend friend={friend} />
        })}
        <form>
            <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.newFriend.name}
            onChange={this.handleChange}
            />
            <div />
            <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.newFriend.age}
            onChange={this.handleChange}
            />
            <div />
            <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.newFriend.email}
            onChange={this.handleChange}
            />
        </form>
        <button onClick={this.addFriend}>Add Friend</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return({
        friends: state.friends,
        isFetching: state.isFetching
    }
    )
}

export default connect(mapStateToProps, {getFriends, addFriend})(FriendsList);