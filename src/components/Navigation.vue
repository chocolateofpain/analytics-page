<template>
  <div class="navigation">
    <div class="nav-link-empty"/>
    <Typography as="small" class="nav-link-reporting" :uppercase="true">
      Reporting
    </Typography>
  </div>
</template>

<script>
import Typography from './library/typography/Typography.vue'

export default {
  name: 'Navigation',
  components: {
    Typography
  }, 
  props: [
    'checksCategory'
  ]
}
</script>

<style scoped>
.navigation {
  background-color: #E8E8E8;
  margin-right: 69px;
  padding: 16px;
  width: 174px;
}

.nav-link-reporting {
  background-color: #C4C4C4;
  border-radius: 4px;
  display: block;
  padding-left: 14px;
  padding-top: 9px;
  height: 35px;
  width: 140px;
}

/* dummy element to mock navigation */
.nav-link-empty {
  background-color: #C4C4C4;
  border-radius: 4px;
  margin-bottom: 20px;
  height: 35px;
  width: 60px;
}
</style>
