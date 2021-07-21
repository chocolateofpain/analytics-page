<template>
  <highcharts :options="chartOptions" class="chart-container"></highcharts>
</template>

<script>
import { Chart } from 'highcharts-vue'

// just for styling purposes
const timeNow = new Date()
const finalTime = new Date(timeNow.getTime() - (7 * 24 * 3600 * 1000))

export default {
  name: 'CheckItemChart',
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: {
        xAxis: {
        type: 'datetime'
        },
        series: [{
          data: [1,2,3], // sample data
          pointStart: Date.UTC(finalTime.getFullYear(), finalTime.getMonth(), finalTime.getDate()),
          pointInterval: 3 * 3600 * 1000 // one hour
        }],
        title: '',
        subtitle: ''
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  height: 140px;
  width: 100%;
}
</style>
