<template>
  <tbody>
    <td colspan="6">
    <CheckItem 
      @clicked="onClickExpandButton"
      v-for="(item, index) in checks" :key='index' v-bind:checkItemData="item"
      v-bind:showGraph="showGraph"
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
  data () {
    return {
      showGraph: false
    }
  },
  methods: {
    onClickExpandButton (value) {
      this.showGraph = value
    }
  },
  props: [
    "checks"
  ],
}
</script>
