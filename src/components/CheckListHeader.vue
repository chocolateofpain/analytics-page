<template>
  <thead class="table-header">
    <th>type</th>
    <th>name</th>
    <th class="align-center">success</th>
    <th class="align-center">avg</th>
    <th class="align-center">p95</th>
    <th class="align-center">p99</th>
  </thead>
</template>

<script>
export default {
  name: 'CheckListHeader'
}
</script>

<style scoped>
.table-header {
  border-bottom: 1px solid #000000;
  height: 28px;
  text-transform: uppercase;
}
</style>
