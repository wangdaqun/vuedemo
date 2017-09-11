/**
 * Created by Administrator on 2017/9/11.
 */

import axios from 'axios';
import * as api from './api';

export const editUser = params => { return axios.get(`${api.base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${api.base}/user/add`, { params: params }); };

export const getInfoList = params => { return axios.get(`${api.base}/info/list`, {params:params}); };
// 联系我们
export const getTelephone = params=>{return axios.get(`${api.base}/telephone/list`, {params:params});};
