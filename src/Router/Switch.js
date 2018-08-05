import React from 'react'
import { PathContext } from './context'
import SwitchHandle from './SwitchHandle'
export default class Switch extends React.Component {
  render() {
    return (
      <PathContext.Consumer>
        {routerState => <SwitchHandle routerState={routerState} {...this.props} /> }
      </PathContext.Consumer>
    )
  }
} 