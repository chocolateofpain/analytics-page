<template>
  <tbody>
    <td colspan="6">
    <CheckItem 
      v-for="(item, index) in checks" :key='index' v-bind:checkItemData="item"
    />
    </td>
  </tbody>
</template>

<script>
import CheckItem from './CheckItem.vue'

export default {
  name: 'CheckItemList',
  components: {
    CheckItem,
  },
  props: [
    "checks"
  ],
}
</script>
