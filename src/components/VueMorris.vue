<template>
  <div id="chart">
    <donut-chart
      id="donut"
      :data="donutData"
      colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
      resize="true">
    </donut-chart>
    <bar-chart
      id="bar"
      :data="barData"
      bar-colors='[ "#FF6384" ]'
      xkeys="day"
      ykeys="hours"
      grid="true"
      resize="true">
    </bar-chart>
  </div>
</template>
<script>
import { DonutChart, BarChart } from 'vue-morris'
// import { BarChart } from 'vue-morris'
import Raphael from 'raphael/raphael'
global.Raphael = Raphael

export default {
  name: 'VueMorris',
  data: function () {
    return {
      donutData: [
        { label: 'Red', value: 300 },
        { label: 'Blue', value: 50 },
        { label: 'Yellow', value: 100 }
      ],
      barData: [
        { day: 'lundi', hours: 8 },
        { day: 'mardi', hours: 9 },
        { day: 'mercredi', hours: 8 }
      ]
    }
  },
  components: {
    DonutChart, BarChart
  }
}
</script>
