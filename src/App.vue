<template>
  <div id="app">
    <Typography as="h1">
      Checkly Challenge
    </Typography>
  </div>
</template>

<script>
import '@primer/octicons/build/build.css'
import Typography from './components/library/typography'

export default {
  name: 'App',
  components: {
    Typography
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
