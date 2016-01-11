import constants from '../constants'

const key = '2e7c97cd13ee905e8d733d0074a324cf'

function requestMovies() {
  return {
    type: constants.FETCH_MOVIES_REQUEST
  }
}

function receiveMovies(jsonArray) {
  console.log(json)
  return {
    type: constants.FETCH_MOVIES_SUCCESS,
    payload: {
        movies: jsonArray
    }
  }
}

function fetchAPI(ids) {
    return dispatch => {
        dispatch(requestMovies())
        const SEPARATOR = ','
        const idsArray = ids.split(SEPARATOR)
        let url
        let movies = idsArray.map((id) => {
            url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`
            return fetch(url)
        })
        console.log(movies)
        return Promise.all(movies)
            .then((responses) => {
                return Promise.all(responses.map(response => response.json()))
            })
            .then((jsonArray) => {
                dispatch(receiveMovies(jsonArray))
            })
    }
}

function shouldFetch(state) {
    const movies = state.movies
    if (movies && movies.isFetching) {
        return false
    } else {
        return true
    }
}

function fetchMovies(ids) {
    return (dispatch, getState) => {
      if (shouldFetch(getState(), ids)) {
        return dispatch(fetchAPI(ids))
      } else {
        return Promise.resolve()
      }
    }
}

module.exports = { fetchMovies };
