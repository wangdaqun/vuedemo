<template>
  <div id="app">
    <!--<goods></goods>-->
    <home></home>
  </div>
</template>

<script>
import home from './modules/home/Home'
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
