import React, { Component } from 'react'
import styles from './SearchBox.css'
import { List } from 'react-virtualized'

class ReactVirtualizedList extends Component {
  static defaultProps = {
    searchResults: [],
  }
  constructor(props) {
    super(props)
    this.listHeight = 600
    this.rowHeight = 50
    this.rowWidth = 800
  }

  renderRow = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className={styles.row}>
        <div className={styles.content}>
          <div>{this.props.searchResults[index].title}</div>
        </div>
      </div>
    )
  }

  render() {
    const { rowHeight, rowWidth, listHeight } = this
    const { searchResults } = this.props
    return (
      <List
        width={rowWidth}
        height={listHeight}
        rowHeight={rowHeight}
        rowRenderer={this.renderRow}
        rowCount={searchResults.length}
        overscanRowCount={3}
      />
    )
  }
}

class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
    }
  }
  componentDidUpdate(prevProps) {
    const { searchTerm } = this.props
    if (searchTerm && searchTerm !== prevProps.searchTerm) {
      console.log({ searchTerm })
      fetch(`/search`, {
        method: 'POST',
        body: JSON.stringify({ searchTerm }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((resp) => this.setState({ searchResults: resp.searchResults }))
    }
  }

  render() {
    return <ReactVirtualizedList searchResults={this.state.searchResults} />
  }
}

export default class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
    }
  }

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.setState({ searchTerm: e.target.value })}
          value={this.state.searchTerm}
        />

        <div className="list">
          <SearchResults searchTerm={this.state.searchTerm} />
        </div>
      </div>
    )
  }
}
