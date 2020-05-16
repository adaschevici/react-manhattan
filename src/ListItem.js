import React from 'react'
import { ListContext } from './ListContent'

const ListItem = ({ message, index }) => {
  const { text } = message
  const { setSize, windowWidth } = React.useContext(ListContext)
  const root = React.useRef()
  React.useEffect(() => {
    setSize(index, root.current.getBoundingClientRect().height)
  }, [windowWidth, setSize, index])
  return (
    <div ref={root} className="message">
      {text}
    </div>
  )
}
export default ListItem
