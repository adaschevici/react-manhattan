import React, { Component, createRef } from 'react'
import ListContent from './ListContent'
import faker from 'faker'

class LargeList extends Component {
  constructor(props) {
    super(props)
    this.listRef = createRef()
    this.listContentRef = createRef()
    this.state = {
      listHeight: 0,
      contentItems: [],
    }
  }

  componentDidMount() {
    const listHeight = this.listContentRef.current.offsetHeight
    console.log('Comp did mount', listHeight)
    this.setState({ listHeight })

    this.populateList()
  }

  populateList = () => {
    const { data } = this.props
    this.setState(() => ({ contentItems: data }), this.handleScroll)
  }

  handleScroll = () => {
    this.listRef.current.resetAfterIndex(0)
  }

  render() {
    const { contentItems, listHeight } = this.state
    return (
      <ListContent
        listContentRef={this.listContentRef}
        listRef={this.listRef}
        listHeight={listHeight}
        contentItems={contentItems}
      />
    )
  }
}

export default LargeList
