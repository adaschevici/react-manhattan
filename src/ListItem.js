import React, { Component, createRef } from 'react'

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.root = createRef()
  }

  componentDidMount() {
    const { setSize, index } = this.props
    setSize(index, this.root.current.getBoundingClientRect().height)
  }

  render() {
    const { text } = this.props.message
    return (
      <div ref={this.root} className="message">
        {text}
      </div>
    )
  }
}
// const ListItem = ({ message, index }) => {
//   const { text } = message
//   const { setSize, windowWidth } = React.useContext(ListContext)
//   const root = React.useRef()
//   React.useEffect(() => {
//     setSize(index, root.current.getBoundingClientRect().height)
//   }, [windowWidth, setSize, index])
// }
export default ListItem
