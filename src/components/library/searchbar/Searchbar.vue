<template>
  <input
    :placeholder="placeholder"
    type="text"
    :width="minWidth"
    v-model="searchbar"
  />
</template>

<script>
export default {
  name: 'Searchbar',
  props: {
    placeholder: null,
    minWidth: {
      type: Number,
      default: 200
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
