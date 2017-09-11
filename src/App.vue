<template>
  <div id="app">
    <!--<goods></goods>-->
    <home></home>
  </div>
</template>

<script>
import home from './modules/info/TopHeader.vue'
export default {
  data () {
    return {
      playConfig: {}
    }
  },
  components: {
    'home': home
  }
}
</script>

<style>
/*@import './assets/css/base.css';*/
</style>
