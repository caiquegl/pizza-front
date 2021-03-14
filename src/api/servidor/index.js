import axios from 'axios';

const apiViaCep = axios.create({
    baseURL: 'https://server-pizza.herokuapp.com/',
});

export default apiViaCep;
