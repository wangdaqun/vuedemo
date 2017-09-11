<template>
  <div>
    <table class="table table-hover">
      <caption>TopHeader基本的表格布局</caption>
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
  export default {
    data () {
      return {
        goods: [{id: '1', name: '11'}, {id: '2', name: '22'}, {id: '3', name: '33'}]
      }
    }
//    created () {
//      console.info('开始请求HTTP接口')
//            this.$http.get('/ssc-webapp/wdw/findByIds',
//        { //  请求参数
//          params: {
//            ids: '13E410A4CBC7000,13E40F7567C7000'
//          }
//        }).then(function (res) {
//              console.info('调用成功')
//              console.info(res.body)
//              this.goods = res.body
//        console.info(JSON.parse(res.bodyText).s)
//        this.goods = JSON.parse(res.bodyText).s
//      }, function (error) {
//        console.info('请求失败')
//              console.info(error)
//      })
//      this.$http.get('/ssc-webapp/wdw/findByIds?ids=13E410A4CBC7000,13E40F7567C7000', data => {
//        console.info('1111')
//        this.$set('goods', data)
//      })
//      this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
//        { //  请求参数
//          params: {
//            wd: 'aaa'
//          },
//          jsonp: 'cb'
//        }).then(function (res) {
//        console.info(JSON.parse(res.bodyText).s)
//        this.goods = JSON.parse(res.bodyText).s
//      }, function () {
//        console.info('请求失败')
//      })
//    }
  }
</script>

<style scoped>

</style>
