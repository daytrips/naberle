import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {
  renderButtons() {
    if (this.props.signedIn.authenticated || this.props.signedIn.authenticated) {
      return <li><Link to="/signout">Signout</Link></li>;
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
              <li><Link to="home">Home</Link></li>
              {this.renderButtons()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { signedUp: state.signedUp, signedIn: state.signedIn };
}

export default connect(mapStateToProps)(Header);
