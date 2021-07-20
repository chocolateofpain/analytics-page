<template>
  <table class="table-check-item">
  <tr v-on:click="onClickButton" class="check-data-row">
    <td class="type-col">
      <Icon :name="showGraph ? 'chevron-down' : 'chevron-right'" :width="12" class="" />
      <span class="type">{{ checkItemData.type }}</span>
    </td>
    <td>{{ checkItemData.name }}</td>
    <td class="data-cols align-center">{{ Math.floor(checkItemData.success * 100) }}%</td>
    <td class="data-cols align-center">{{ Math.round(checkItemData.avg) }}ms</td>
    <td class="data-cols align-center">{{ Math.round(checkItemData.p95) }}ms</td>
    <td class="data-cols align-center">{{ Math.round(checkItemData.p99) }}ms</td>
  </tr>
  <tr v-show="showGraph">
    <td colspan="6">
      <div>This is a graph</div>
    </td>
  </tr>
  </table>
</template>

<script>
import '@primer/octicons/build/build.css'
import Icon from './library/icon/Icon.vue'

export default {
  name: 'CheckItem',
  components: {
    Icon,
  },
  props: [
    "checkItemData", 
  ],
  data () {
    return {
      showGraph: true
    }
  },
  methods: {
    onClickButton () {
      this.showGraph = !this.showGraph
    }
  }
}
</script>

<style scoped>
.expand-button {
  background: none;
  height: 38px;
  width: 38px;
}
.type {
  margin-left: 4px;
  vertical-align: middle;
}
.check-data-row {
  height: 38px;
}
.table-check-item {
  border-bottom: 1px solid #D2D2D2;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}
.type-col {
  width: 100px;
}
.data-cols {
  text-align: center;
  width: 65px;
}
</style>
