import React from 'react'
import logo from './logo.svg'
import './App.css'
import './styles.css'
import LargeList from './LargeList'
import generateData from './generate'

const data = generateData(1000)

function App() {
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
        <LargeList data={data} />
      </main>
    </div>
  )
}

export default App
