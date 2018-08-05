import React from 'react'
import { Switch, Route, Link } from '../../Router'
import HomeOne from './HomeOne'
import HomeTwo from './HomeTwo'
export default class extends React.Component {
  jump = (url, state) => e => {
    e.preventDefault();
    this.props.history.push(url, state);
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <div>Home</div>
        {JSON.stringify(this.props)}
        <div>
          {JSON.stringify(this.props.history.state)}
        </div>
        <div style={{marginTop: '50px'}}></div>
        <div>switch</div>
        <div className="app-root">
          <div className="left">
            <Link to='/home/home-one'>HomeOne</Link>
            <div></div>
            <Link to='/home/home-two'>Home:id</Link>
          </div>

          <div className="right">
            <div>
              <Switch>
                <Route
                  path='/home/home-one'
                  component={HomeOne}
                />
                <Route
                  path='/home/:id'
                  component={HomeTwo}
                />
              </Switch>
            </div>
          </div>
        </div>

        <div>no swtich</div>
        <div className="app-root">
          <div className="left">
            <Link to='/home/home-one'>HomeOne</Link>
            <div></div>
            <Link to='/home/home-two'>Home:id</Link>
          </div>

          <div className="right">
            <div>

              <Route
                path='/home/home-one'
                component={HomeOne}
              />
              <Route
                path='/home/:id'
                component={HomeTwo}
              />
            </div>
          </div>
        </div>


        
        
      </div>
    )
  }
}