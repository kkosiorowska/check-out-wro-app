import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-check-wro.firebaseio.com/'
});

export default instance;
