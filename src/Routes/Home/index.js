import React from 'react'

export default class extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Home, {JSON.stringify(this.props)}
      </div>
    )
  }
}