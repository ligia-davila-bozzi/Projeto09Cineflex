import axios from 'axios';

const URL = "https://movie.free.beeceptor.com"; //"https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex"

function getMovies() {
    return axios.get(`${URL}/movies`);
}

function getSessions(id) {
    return axios.get(`${URL}/movies/${id}/showtimes`);
}

function getRooms(id) {
    return axios.get(`${URL}/showtimes/${id}/seats`);
}

export {
    getMovies,
    getSessions,
    getRooms
}