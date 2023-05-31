<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <AppHeader />
  <AppFooter />
</template>

<style lang="scss">
// versione 1 - via app.vue
// @use './assets/scss/main.scss' as *;
</style>

