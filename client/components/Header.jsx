import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  renderButtons() {
    if (this.props.authenticated) {
      return <li><a href="#">Signout</a></li>;
    }
    return [<li key={1}><Link to="signin">Signin</Link></li>,
      <li key={2}><Link to="signup">Signup</Link></li>];
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
