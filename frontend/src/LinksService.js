import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class LinksService{
    getLinks(id_film) {
        const url = `${API_URL}/api/link/${id_film}`;
        return axios.get(url).then(response => response.data);
    }
}