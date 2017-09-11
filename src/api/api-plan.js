/**
 * Created by Administrator on 2017/9/11.
 */
import axios from 'axios';
import * as api from './api';


export const getUserListPage = params => { return axios.get(`${api.base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${api.base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${api.base}/user/batchremove`, { params: params }); };
