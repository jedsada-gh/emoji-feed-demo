import React, { Component, Fragment }from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Feed from './Layouts/Feed'
import Monitor from './Layouts/Monitor'
import Login from './Layouts/Login'

class App extends Component {

  render() {
    return (
      <Router>
          <Fragment>
            <Route exact path="/" component={Login} />
            <Route path="/feed" component={Feed} />
            <Route path="/monitor" component={Monitor} />
          </Fragment>
      </Router>
    )
  }
}

export default App