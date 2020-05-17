import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import LargeList from './LargeList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <LargeList data={this.props.data} />
        </main>
      </div>
    )
  }
}

export default App
