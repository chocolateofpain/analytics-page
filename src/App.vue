<template>
  <div id="app">
    <Navigation />
    <Analytics />
  </div>
</template>

<script>
import '@primer/octicons/build/build.css'
import Analytics from './components/Analytics.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Analytics,
    Navigation,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
* {
  box-sizing: border-box;
  border: none;
}

#app {
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 16px 0 16px 16px;
  display: flex;
  height: 100vh;
}
/* remove default styling from user agent style sheet */
th {
  font-weight: 400;
  /* text-align: left; */
}
.align-center {
  text-align: center;
}
.align-left {
  text-align: left;
}
</style>
