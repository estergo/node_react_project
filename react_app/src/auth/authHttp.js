import Api from '../general/api';

const authUrl = '/auth';
const AuthHttp = {

    signup: (data) => {
        return Api.post(`${authUrl}/signup`, data);
    },

    signin: (data) => {
        return Api.post(`${authUrl}/signin`, data);
    },

    setToken: (token) => {
        const fullToken = `Bearer ${token}`
        Api.defaults.headers.common['Authorization'] = fullToken;
        sessionStorage.setItem('token', fullToken);
    }
}

export default AuthHttp;