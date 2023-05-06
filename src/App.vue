<template>
  <div class="app">
    <the-nav></the-nav>
    <the-content></the-content>
  </div>
</template>

<script>
import TheContent from './views/TheContent.vue'
import TheNav from './views/TheNav.vue'

export default {
  name: 'App',
  components: {
    TheNav,
    TheContent
  }
}
</script>

<style scoped>
@import url(./css/main.css);
</style>
