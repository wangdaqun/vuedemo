/**
 * Created by Administrator on 2017/9/8.
 */
import Vue from 'vue'
import Router from 'vue-router'
import info from './router-info'
import  plan from './router-plan'
import  home from  './router-home'
import sys from  './router-system'
import  epaper from  './router-epaper'

Vue.use(Router)

export default new Router({
  routes: [
    info,
    plan,
    home,
    sys,
    epaper
  ]
})
