import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup } from '../actions/index';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      error: this.props.signedUp,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.signup(username, password);
    this.setState({ username: '', password: '' });
  }

  renderAlert() {
    if (this.state.error) {
      console.log(this.props.signedup.response.data.error);
      return (
        <div className="alert alert-danger">
          <strong>{this.props.signedup.response.data.error}</strong>
        </div>
      );
    }
  }

  render() {
    // console.log(JSON.stringify(this.props.signedUp, null, 2));
    console.log('this', this.state.error);
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
        <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { signedUp: state.signedUp };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signup }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
