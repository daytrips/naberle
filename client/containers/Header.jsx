import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Header extends Component {
  renderButtons() {
    if (this.props.authenticated) {
      return <li><a href="#">Signout</a></li>;
    }
    return [<li key={1}><a href="#">Signin</a></li>,
      <li key={2}><a href="#">Signup</a></li>];
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              {this.renderButtons()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
