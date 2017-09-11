/**
 * Created by Administrator on 2017/9/8.
 */

import Table from '../modules/index/views/nav1/Table.vue'
import Info from '../modules/index/views/nav1/Info.vue'
import Form from '../modules/index/views/nav1/Form.vue'
import User from '../modules/index/views/nav1/user.vue'

export default{
  routes: [
    {
      path: '/',
      component: Home,
      name: '投诉管理',
      iconCls: 'el-icon-message',//图标样式class
      children: [
        {path: '/table', component: Table, name: 'Table'},
        {path: '/info', component: Info, name: 'Info列表'},
        {path: '/form', component: Form, name: 'Form'},
      ]
    },
    {
      path: '/',
      component: Home,
      name: '',
      iconCls: 'fa fa-address-card',
      leaf: true,//只有一个节点
      children: [
        {path: '/user', component: User, name: '用户管理'}
      ]
    }]
}
