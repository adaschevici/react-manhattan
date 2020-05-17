import React from 'react'
import { CellMeasurer } from 'react-virtualized'
import './row.css'

const ListItem = (data, cache) => ({ index, parent, key, style }) => {
  return (
    <CellMeasurer
      key={key}
      cache={cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
    >
      <div style={style}>
        <div className="variableRow">
          <div>{data[index].name}</div>
          <div>{data[index].email}</div>
          <div style={{ height: `${data[index].randomHeight}px` }} />
        </div>
      </div>
    </CellMeasurer>
  )
}

export default ListItem
