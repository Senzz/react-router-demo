import React from 'react'
import { matchPath } from './path'

export default class Switch extends React.Component {
  render() {
    const { children, routerState } = this.props;
    let match, child;
    React.Children.forEach(children, (children) => {
      if(!match && React.isValidElement(children)) {
        const _match = matchPath(children.props, routerState);
        if(!!_match) {
          child = children;
          match = true;
        }
      }
    })
    return match ? (
      React.cloneElement(child, {
        match: true
      })
    ) : null
  }
}