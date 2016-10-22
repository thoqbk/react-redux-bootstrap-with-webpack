import React, {Component} from 'react';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';
import DefaultLayout from "./layout/DefaultLayout.jsx";
import HomePage from "./page/HomePage.jsx";

class App extends Component {
  render() {
    return <Router history={browserHistory}>
      <Route path="/" component={DefaultLayout}>
        <IndexRoute component={HomePage} />
      </Route>
    </Router>;
  }
}

export default App;
