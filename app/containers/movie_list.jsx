import { connect } from 'react-redux'
import MovieList from '../components/movie_list.jsx'

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

/*
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}
*/

const MovieListContainer = connect(
  mapStateToProps
  //mapDispatchToProps
)(MovieList)

export default MovieListContainer
