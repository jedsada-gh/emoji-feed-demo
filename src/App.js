import React, { Component, Fragment }from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import Feed from './Layouts/Feed'
import Monitor from './Layouts/Monitor'
import Login from './Layouts/Login'

class App extends Component {

  render() {
    return (
      <Router>
          <Fragment>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"/>
            <Container>
              <Route exact path="/" component={Login} />
            </Container>
            <Container>
              <Route path="/feed" component={Feed} />
            </Container>
            <Route path="/monitor" component={Monitor} />
          </Fragment>
        </Router>
    )
  }
}

export default App