<template>
  <tr>
    <td><Icon name="chevron-right" :width="12" /><span class="type">{{ checkItemData.type }}</span></td>
    <td>{{ checkItemData.name }}</td>
    <td class="align-center">{{ Math.floor(checkItemData.success * 100) }}%</td>
    <td class="align-center">{{ Math.round(checkItemData.avg) }}ms</td>
    <td class="align-center">{{ Math.round(checkItemData.p95) }}ms</td>
    <td class="align-center">{{ Math.round(checkItemData.p99) }}ms</td>
  </tr>
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
.type {
  margin-left: 4px;
  vertical-align: middle;

}
tr {
  border-bottom: 1px solid #D2D2D2;
  height: 38px;
}
</style>
