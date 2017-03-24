import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signout } from '../actions/index';

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return <h1>Successfully signed out</h1>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signout }, dispatch);
}

export default connect(null, mapDispatchToProps)(Signout);
