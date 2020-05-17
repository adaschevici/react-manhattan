import React from 'react'
import { ListContext } from './ListContent'

const ListItem = ({ payload, index }) => {
  const { name, email, randomHeight } = payload
  const { setSize, windowWidth } = React.useContext(ListContext)
  const root = React.useRef()
  React.useEffect(() => {
    setSize(index, root.current.getBoundingClientRect().height)
  }, [windowWidth, setSize, index])
  return (
    <div ref={root} className="payload">
      <div>{index}</div>
      <div>{name}</div>
      <div>{email}</div>
      <div style={{ height: randomHeight }} />
    </div>
  )
}
export default ListItem
