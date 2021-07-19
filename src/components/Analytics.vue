<template>
  <div>
    <Typography as="h2">
      Reporting
    </Typography>
    <div>Analyse long term performance of your checks and export aggregated metrics for external reporting duties.</div>
      <CheckItem v-for="(item, index) in checks" :key='index' v-bind:checkItemData="item" />
  </div>
</template>

<script>
import '@primer/octicons/build/build.css'
import axios from 'axios';
import CheckItem from './CheckItem.vue'
import Typography from './library/typography/Typography.vue'

export default {
  name: 'Analytics',
  components: {
    CheckItem,
    Typography
  },
  data () {
    return {
      checks: null
    }
  },
  created () {
    axios
      .get('http://localhost:3000/checks')
      .then(response => (this.checks = response.data))
  }
}
</script>
