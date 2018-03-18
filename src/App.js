import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Hero from './containers/Hero'

import './app.css'

class App extends React.Component {
  state = {
    red: true
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ red: !this.state.red }),
      3000
    )
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </nav>
          <Hero red={this.state.red}>
            directly in App. With interval that changes the background and
            correct CSS transition.
          </Hero>
          <div className="content">
            <Routes />
          </div>
        </div>
      </Router>
    )
  }
}

export default hot(module)(App)
