import React, {Component} from 'react';
import config from "../../config/app.js";

class Header extends Component {
  render() {
    return <header>
      <div className="navbar navbar-fixed-top navbar-default">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img className="logo" src="/image/logo.png" /><b>{config.header.brandName}</b>
          </a>
          <button className="navbar-toggle" data-toggle="collapse" data-target="#headerCollapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <div className="collapse navbar-collapse navHeaderCollapse" id="headerCollapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/"><b>Home</b></a>
              </li>
              <li>
                {
                  this.props.currentUser.authenticated ?
                  <a href="/contact-us" className="avatar-link" title={this.props.currentUser.displayName}>
                    <img src="/image/default-avatar.png" className="img img-circle avatar"/>
                  </a>
                  :
                  <a className="avatar-link">
                    <b><i className="fa fa-google" aria-hidden="true"></i> login</b>
                  </a>
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>;
  }
}

export default Header;
