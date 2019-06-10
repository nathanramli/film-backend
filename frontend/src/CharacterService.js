import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class CharacterService{
    getChara(id_film) {
        const url = `${API_URL}/api/chara/${id_film}`;
        return axios.get(url).then(response => response.data);
    }

    deleteChara(pk) {
        const url = `${API_URL}/api/chara_detail/${pk}`;
        return axios.delete(url);
    }
}