import React from 'react'
import { VariableSizeList as List } from 'react-window'
import ListItem from './ListItem'
import { useWindowSize } from './useWindowResize'

export const ListContext = React.createContext({})

const ListContent = ({ listHeight, listContentRef, listRef, contentItems }) => {
  const sizeMap = React.useRef({})
  const setSize = React.useCallback((index, size) => {
    console.log('Setting size on ref', index, size)
    sizeMap.current = { ...sizeMap.current, [index]: size }
  }, [])
  const getSize = React.useCallback((index) => {
    console.log('Retrieving component size', sizeMap.current[index])
    return sizeMap.current[index] || 130
  }, [])
  const [windowWidth] = useWindowSize()

  console.log('Rendering list content', listHeight)
  return (
    <ListContext.Provider value={{ setSize, windowWidth }}>
      <div ref={listContentRef} className="listContent">
        {contentItems.length > 0 && (
          <List
            height={listHeight}
            itemCount={contentItems.length}
            itemSize={getSize}
            width="100%"
            ref={listRef}
          >
            {({ index, style }) => (
              <div style={style}>
                <ListItem index={index} message={contentItems[index]} />
              </div>
            )}
          </List>
        )}
      </div>
    </ListContext.Provider>
  )
}

export default ListContent
