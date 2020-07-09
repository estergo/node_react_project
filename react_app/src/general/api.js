import axios from 'axios';

const Api = axios.create({
    baseURL: `http://localhost:8080/api`
});

Api.defaults.headers.common['Authorization'] = `${sessionStorage.getItem('token')}`;
Api.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
        alert('error! ' + error.response.data.msg);
        return Promise.reject(error);
});

export default Api;