import React, { Component } from 'react'
import { List, AutoSizer, CellMeasurerCache } from 'react-virtualized'
import ListItem from './ListItem'

class LargeList extends Component {
  constructor(props) {
    super(props)
    const cache = new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 50,
    })
    this.cache = cache
  }

  render() {
    const { data } = this.props
    return (
      <AutoSizer>
        {({ width, height }) => {
          return (
            <List
              rowCount={data.length}
              width={width}
              height={height}
              deferredMeasurementCache={this.cache}
              rowHeight={this.cache.rowHeight}
              rowRenderer={ListItem(this.props.data, this.cache)}
            />
          )
        }}
      </AutoSizer>
    )
  }
}

export default LargeList
