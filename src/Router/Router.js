import React from 'react'
import { getPath } from './path'
import PropTypes from 'prop-types'
import { PathContext } from './context'

export default class Router extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  state = {
    path: '',
    prevPath: '',
  }
  componentDidMount() {
    const path = getPath(window.location.href);
    console.log(path)
    this.setState({
      path,
    })
    window.addEventListener('hashchange', (e) => {
      const { newURL, oldURL } = e;
      
      const path = getPath(newURL);
      const prevPath = getPath(oldURL);
      this.setState({
        path, prevPath
      });
    });
  }
  render() {
    const { children } = this.props;
    const { path, prevPath } = this.state;
    return (
      <PathContext.Provider value={this.state}>
        {
          children ? (React.Children.only(children)) : null
        }
      </PathContext.Provider>
    )
  }
}