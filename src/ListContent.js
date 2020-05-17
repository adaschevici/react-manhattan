import React, { Component, createRef } from 'react'
import { VariableSizeList as List } from 'react-window'
import ListItem from './ListItem'

class ListContent extends Component {
  state = {
    width: 0,
    height: 0,
  }

  constructor(props) {
    super(props)
    this.sizeMap = createRef()
    this.setSize = this.setSize.bind(this)
    this.getSize = this.getSize.bind(this)
    this.updateSize = this.updateSize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateSize)
  }

  componentWillMount() {
    window.removeEventListener('resize', this.updateSize)
  }

  updateSize() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }
  setSize(index, size) {
    this.sizeMap.current = { ...this.sizeMap.current, [index]: size }
  }

  getSize(index) {
    if (this.sizeMap.current) {
      return this.sizeMap.current[index] || 30
    }
    return 30
  }

  render() {
    const { listHeight, listContentRef, listRef, contentItems } = this.props
    const { width: windowWidth } = this.state
    return (
      <div ref={listContentRef} className="listContent">
        {contentItems.length > 0 && (
          <List
            height={listHeight}
            itemCount={contentItems.length}
            itemSize={this.getSize}
            width="100%"
            ref={listRef}
          >
            {({ index, style }) => (
              <div style={style}>
                <ListItem
                  index={index}
                  payload={contentItems[index]}
                  setSize={this.setSize}
                  windowWidth={windowWidth}
                />
              </div>
            )}
          </List>
        )}
      </div>
    )
  }
}

export default ListContent
