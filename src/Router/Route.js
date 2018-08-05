import React from 'react'
import { PathContext } from './context'
import { matchPath } from './path'

export default class Route extends React.Component {
  render() {
    const { component, path, exact, render, children, match } = this.props;
    const props = {
      path, exact
    } 
    if (component) return (
      <PathContext.Consumer>
        {routerState => match || matchPath(props, routerState) ? React.createElement(component, routerState) : null}
      </PathContext.Consumer>
    )

    if (render) return  (
      <PathContext.Consumer>
        {routerState => match || matchPath(props, routerState) ? render(routerState) : null}
      </PathContext.Consumer>
    )

    if (typeof children === "function") return (
      <PathContext.Consumer>
        {routerState => match || matchPath(props, routerState) ? children(routerState) : null}
      </PathContext.Consumer>
    )

    return null;
  }
} 