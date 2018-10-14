import React, { Component, Fragment }from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import Feed from './Layouts/Feed'
import Monitor from './Layouts/Monitor'
import Login from './Layouts/Login'

class App extends Component {

  render() {
    return (
      <Container>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"/>
        <Router>
          <Fragment>
            <Route exact path="/" component={Login} />
            <Route path="/feed" component={Feed} />
            <Route path="/monitor" component={Monitor} />
          </Fragment>
        </Router>
      </Container>
    )
  }
}

export default App