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
    const { name, email, randomHeight } = this.props.payload
    const { index } = this.props
    return (
      <div ref={this.root} className="payload">
        <div>{index}</div>
        <div>{name}</div>
        <div>{email}</div>
        <div style={{ height: randomHeight }} />
      </div>
    )
  }
}

export default ListItem
