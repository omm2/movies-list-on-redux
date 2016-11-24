import React from 'react';
import { connect } from 'react-redux'
import actions from './../actions'

class App extends React.Component {
  componentDidMount() {
      const { dispatch, params } = this.props
      if (params.ids) {
          dispatch(actions.fetchMovies(params.ids))
      }
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
