import axiosConfig from './cofig';

export function postUser(obj) {
    return axiosConfig.post('/user/save',obj);
}