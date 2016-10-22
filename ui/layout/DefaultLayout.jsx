import React, {Component} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import currentUserActions from "../../redux/action/currentUser";

class DefaultLayout extends Component {
  componentWillMount() {
    this.props.currentUserActions.get();
  }
  render() {
    return <div>
      <Header currentUser={this.props.currentUser}/>
      {this.props.children}
      <Footer />
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    currentUserActions: bindActionCreators(currentUserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapActionsToProps)(DefaultLayout);
