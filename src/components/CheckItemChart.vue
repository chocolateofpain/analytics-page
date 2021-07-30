<template>
  <highcharts :options="chartOptions" class="chart-container"></highcharts>
</template>

<script>
import axios from 'axios'
import { Chart } from 'highcharts-vue'
import { formatDataForHighchartsSeries } from './utils'

export default {
  name: 'CheckItemChart',
  components: {
    highcharts: Chart,
  },
  computed: {
    
  },
  created () {
    axios
      .get('http://localhost:3000/check_stats')
      .then(response => formatDataForHighchartsSeries(response.data, ['avg', 'p95', 'p99']))
      .then(response => this.chartOptions.series = response)
  },
  data () {
    return {
      chartData: null,
      chartOptions: {
        xAxis: {
          type: 'datetime',
          // min: Date.UTC(2021, 7, 25),
          // dateTimeLabelFormats: {
          //   hour: '%H:%M',
          // }
        },
        yAxis: {
        // type: 'datetime',
        title: '',
        },
        legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
        },
        plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              // pointStart: Date.UTC(2000, 7, 25)
          }
        },
        series: [],
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
