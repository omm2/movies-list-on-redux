const constants = require('../constants');

function fetchMovies(ids) {
    return {
        type: constants.FETCH_MOVIES
    };
}

module.exports = { fetchMovies };
