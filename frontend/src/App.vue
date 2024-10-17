<template>
  <div class="main">
    <div class="container">
      <HeaderComponent></HeaderComponent>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style>
body {
  background-color: var(--background-color) !important;
}
</style>
