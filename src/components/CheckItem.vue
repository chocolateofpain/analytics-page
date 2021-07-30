<template>
  <table class="table-check-item">
  <tr v-on:click="onClickButton" class="row-height">
    <td class="type-col">
      <Icon :name="showGraph ? 'chevron-down' : 'chevron-right'" :width="12"/>
      <span class="type">{{ checkItemData.type }}</span>
    </td>
    <td>{{ checkItemData.name }}</td>
    <td class="data-col align-center">{{ Math.floor(checkItemData.success * 100) }}%</td>
    <td class="data-col align-center">{{ Math.round(checkItemData.avg) }}ms</td>
    <td class="data-col align-center">{{ Math.round(checkItemData.p95) }}ms</td>
    <td class="data-col align-center">{{ Math.round(checkItemData.p99) }}ms</td>
  </tr>
  <tr v-if="showGraph">
    <td colspan="6">
      <CheckItemChart />
    </td>
  </tr>
  </table>
</template>

<script>
import CheckItemChart from './CheckItemChart.vue'
import Icon from './library/icon/Icon.vue'

export default {
  name: 'CheckItem',
  components: {
    CheckItemChart,
    Icon
  },
  props: [
    'checkItemData'
  ],
  data () {
    return {
      showGraph: false
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
.type {
  margin-left: 4px;
  vertical-align: middle;
}
.table-check-item {
  border-bottom: 1px solid #D2D2D2;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}
</style>
