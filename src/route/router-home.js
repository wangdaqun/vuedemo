/**
 * Created by Administrator on 2017/9/8.
 */

import plan from '../modules/plan/TopBanner.vue'
import sys from '../modules/system/TopBar.vue'
// import home from '../modules/home/Home.vue'

export default{
  routes: [
    // {
    //   path: '/home',
    //   component: home
    // },
    {
      path: '/sys',
      component: sys,
      name: '',
      iconCls: 'fa fa-address-card',
      leaf: true, //   只有一个节点
      children: [
        {path: '/plan', component: plan, name: '用户管理'}
      ]
    }]
}
