import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { MainPage } from "./pages";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    );
  }
}

export default withRouter(connect(null)(App));
