<template>
  <div class="check-item-wrapper">
    <Icon name="chevron-down" />
    <div>{{ checkItemData.type }}</div>
    <div>{{ checkItemData.name }}</div>
    <div>{{ checkItemData.success }}</div>
    <div>{{ checkItemData.avg }}</div>
    <div>{{ checkItemData.p95 }}</div>
    <div>{{ checkItemData.p99 }}</div>
  </div>
</template>

<script>
import '@primer/octicons/build/build.css'
import Icon from './library/icon/Icon.vue'

export default {
  name: 'checkItem',
  components: {
    Icon,
  }, 
  props: [
    "checkItemData"
  ]
}
</script>

<style scoped>
.check-item-wrapper {
  display: grid;
}
</style>
