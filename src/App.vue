<template>
  <div id="app">
    <home></home>
  </div>

</template>

<script>
 import home from './modules/home/Home.vue'
export default {
//  data () {
//    return {
//     playConfig: {}
//
//    }
//  },
  components: {
    'home': home
  }
}
</script>

<style>
/*@import './assets/css/base.css';*/
</style>
