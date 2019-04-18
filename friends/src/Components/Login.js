import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/index'

class Login extends Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => this.props.history.push('/friends-list'))
    }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
            <input 
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange} 
            placeholder="Username..."
            />
            <input 
            type="text"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange} 
            placeholder="Password..."
            />
            <button onClick={this.login}>Log In</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {login})(Login)
