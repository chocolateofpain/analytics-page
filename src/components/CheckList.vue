<template>
  <tbody>
    <td colspan="6" v-if="checks && checks.length">
    <CheckItem 
      v-for="(item, index) in checks" :key='index' v-bind:checkItemData="item"
    />
    </td>
    <!-- In case the backend has no data and returns an empty array -->
    <td colspan="6" v-else-if="checks && checks.length === 0">
      <p>We don't have any data yet. Create a new check to start aggregating data.</p>
    </td>
    <!-- TODO: add loading spinner -->
  </tbody>
</template>

<script>
import CheckItem from './CheckItem.vue'

export default {
  name: 'CheckList',
  components: {
    CheckItem
  },
  props: [
    'checks'
  ],
}
</script>
