<template>
  <div id="app">
    <CommingSoon/>
  </div>
</template>

<script>
import CommingSoon from './components/CommingSoon.vue'

export default {
  name: 'app',
  components: {
    CommingSoon
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
}
</style>
