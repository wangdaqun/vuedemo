/**
 * Created by Administrator on 2017/9/11.
 */
import axios from 'axios';
import * as api from './api';

//真实环境时，禁掉mock，请求真实后台地址
export const getUserList1 = params => { return axios.get(api.host+`/user/queryAllUser`); };

export const getUserList2 = params => { return axios.get(`/user/queryAllUser`); };
