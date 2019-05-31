import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class FilmsService{

    // constructor(){}


    getFilms() {
        const url = `${API_URL}/api/film/`;
        return axios.get(url).then(response => response.data);
    }  
    getFilmsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getFilm(pk) {
        const url = `${API_URL}/api/film/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteFilm(film){
        const url = `${API_URL}/api/film/${film.pk}`;
        return axios.delete(url);
    }
    createFilm(film){
        const url = `${API_URL}/api/film/`;
        return axios.post(url,film);
    }
    updateFilm(film){
        const url = `${API_URL}/api/film/${film.pk}`;
        return axios.put(url,film);
    }
}