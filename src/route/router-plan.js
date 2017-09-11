/**
 * Created by Administrator on 2017/9/8.
 */
import Page4 from '../modules/index/views/nav2/Page4.vue'
import TelManage from '../modules/index/views/nav2/TelManage.vue'
import Page5 from '../modules/index/views/nav2/Page5.vue'


export default{
  routes: [
    {
      path: '/',
      component: Home,
      name: '后台编辑',
      iconCls: 'fa fa-id-card-o',
      children: [
        { path: '/page4', component: TelManage, name: '联系我们' },
        { path: '/page5', component: Page5, name: '公园广场' },
        { path: '/page5', component: Page4, name: '公厕' }
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
