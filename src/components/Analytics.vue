<template>
  <div class="analytics-container align-left">
    <div class="analytics-content">
      <Typography class="analytics-title">
        Reporting
      </Typography>
      <Typography as="small">
        Analyse long term performance of your checks and export aggregated metrics for external reporting duties.
      </Typography>
      <table class="checks-table">  
        <colgroup>
          <col class="type-col">
          <col class="name-col">
          <col span="4" class="data-cols">
        </colgroup>
        <CheckListHeader />
        <CheckList v-bind:checks="checks" />
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CheckList from './CheckList.vue'
import CheckListHeader from './CheckListHeader.vue'
import Typography from './library/typography/Typography.vue'

export default {
  name: 'Analytics',
  components: {
    CheckList,
    CheckListHeader,
    Typography
  },
  data () {
    return {
      checks: null,
      errors: null,
      searchterm: ''
    }
  },
  created () {
    this.fetchChecks()
  },
  methods: {
    fetchChecks: function () { 
      axios
      .get('http://localhost:3000/checks')
      .then(response => (this.checks = response.data))
      .catch(error => this.errors = error)
    }
  }
}
</script>
<style scoped>
.analytics-container {
  width: 100%;
  overflow: auto;
}
.analytics-content {
  padding-right: 16px;
}
.analytics-title {
  margin-bottom: 8px;
}
.checks-table {
  font-size: 12px;
  margin-top: 24px;
  table-layout: fixed;
  width: 100%;
}
table {
  border-collapse: collapse;
}
.type-col {
  width: 100px;
}
.data-cols {
  width: 65px;
}
</style>
