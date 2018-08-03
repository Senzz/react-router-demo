import React from 'react'
import PropTypes from 'prop-types'
export default class Link extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  };
  jump = url => e => {
    e.preventDefault();
    window.location.hash = '#' + url;
  }
  render() {
    console.log(this.props)
    const { to, children } = this.props;
    return (
      <a href={to} onClick={this.jump(to)}>{children}</a>
    )
  }
}