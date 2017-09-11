<template>
  <!--<div id="app">-->
    <!--&lt;!&ndash;<goods></goods>&ndash;&gt;-->
    <!--<home></home>-->
  <!--</div>-->
  <div>
  <table class="table table-hover">
    <caption>home基本的表格布局</caption>
    <thead>
    <tr>
      <th>名称</th>
      <th>城市</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="good in goods">
      <td> {{good.id}}</td>
      <td> {{good.name}}</td>
    </tr>

    </tbody>
  </table>
  </div>
</template>

<script>
// import home from './modules/info/TopHeader.vue'
export default {
  data () {
    return {
//      playConfig: {}
      goods: [{id: '1', name: '11'}, {id: '2', name: '22'}, {id: '3', name: '33'}]
    }
  }
//  components: {
//    'home': home
//  }
}
</script>

<style>
/*@import './assets/css/base.css';*/
</style>
