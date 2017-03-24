import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signin } from '../actions/index';
import { hashHistory } from 'react-router';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn.authenticated) {
      hashHistory.push('/home');
    }
  }

  handleChange(event) {
    const { value, name } = event.target;
    const state = {};
    state[name] = value;
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, username, password } = this.state;
    this.props.signin(username, password);
    this.setState({ username: '', password: '' });
  }

  renderAlert() {
    if (this.props.signedIn && this.props.signedIn.error) {
      return (
        <div className="alert alert-danger">
          <strong>{this.props.signedIn.error}</strong>
        </div>
      );
    }
  }

  render() {
    return (
      <form className="signin" action="" onSubmit={this.handleSubmit}>
        <fieldset className="form-group">
          <label>Username:</label>
          <input name="username" value={this.state.username} onChange={this.handleChange} className="form-control" required />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" required />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { signedIn: state.signedIn };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
