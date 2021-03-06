/**
 * Created by Administrator on 2017/9/8.
 */

import Video from '../modules/epaper/Video.vue'
import Info from '../modules/info/TopHeader.vue'
import plan from '../modules/plan/TopBanner.vue'
import sys from '../modules/system/TopBar.vue'
export default{
  routes: [
    {
      path: '/sys',
      component: sys,
      name: '投诉管理',
      iconCls: 'el-icon-message', //  图标样式class
      children: [
        {path: '/Video', component: Video, name: 'Video'},
        {path: '/info', component: Info, name: 'Info列表'}
      ]
    },
    {
      path: '/sys',
      component: sys,
      name: '',
      iconCls: 'fa fa-address-card',
      leaf: true, //  只有一个节点
      children: [
        {path: '/plan', component: plan, name: '用户管理'}
      ]
    }]
}
