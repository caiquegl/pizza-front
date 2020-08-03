import axios from 'axios';

const apiViaCep = axios.create({
    baseURL: 'https://pizzaselecao.herokuapp.com/',
});

export default apiViaCep;