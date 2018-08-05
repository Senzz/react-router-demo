import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div>
        <div>Center</div> 
        {JSON.stringify(this.props)}
      </div>
    )
  }
}