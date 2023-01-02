import axiosConfig from './cofig';

export function postUser(obj) {
    return axiosConfig.post('/user/save',obj);
}

export function postLogin(obj) {
    return axiosConfig.post('/login',obj);
}

export function postRegister(obj) {
    return axiosConfig.post('/user/register',obj);
}



