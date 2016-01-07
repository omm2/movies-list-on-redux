import React from 'react';
import { connect } from 'react-redux'
import actions from './../actions'

export default class App extends React.Component {
  componentDidMount() {
      const { dispatch, params } = this.props
      dispatch(actions.fetchMovies(params.ids))
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(App)
