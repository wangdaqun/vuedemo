/**
 * Created by Administrator on 2017/9/11.
 */
import axios from 'axios';
import * as api from './api';


export const requestLogin = params => { return axios.post(`${api.base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${api.base}/user/list`, { params: params }); };
