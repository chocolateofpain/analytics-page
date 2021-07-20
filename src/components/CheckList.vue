<template>
  <tbody>
    <CheckItem v-for="(item, index) in checks" :key='index' v-bind:checkItemData="item" />
  </tbody>
</template>

<script>
import '@primer/octicons/build/build.css'
import CheckItem from './CheckItem.vue'

export default {
  name: 'CheckItemList',
  components: {
    CheckItem,
  }, 
  props: [
    "checks"
  ]
}
</script>
