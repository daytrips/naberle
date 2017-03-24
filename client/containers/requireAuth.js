import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIssues, postVote } from '../actions/index';

export default function (Comp) {
  class RequireAuth extends Component {
    componentWillMount() {
      if (!(this.props.signedIn.authenticated || this.props.signedUp.authenticated)) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!(this.props.signedIn.authenticated || this.props.signedUp.authenticated)) {
        this.context.router.push('/');
      }
    }

    render() {
      return <Comp {...this.props} />;
    }
	}

  RequireAuth.contextTypes = {
    router: React.PropTypes.object,
  };

  function mapStateToProps(state) {
    return { signedUp: state.signedUp, signedIn: state.signedIn, data: state.data, vote: state.vote };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getIssues, postVote }, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(RequireAuth);
}
