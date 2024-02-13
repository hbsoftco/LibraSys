<template>
  <CardWrapper>
    <div id="chart">
      <apexchart
        type="polarArea"
        width="380"
        :options="data.chartOptions"
        :series="data.series"
      ></apexchart>
    </div>
  </CardWrapper>
</template>

<script setup lang="ts">
import CardWrapper from '@/components/common/CardWrapper.vue'
import { reactive } from 'vue'

const data = reactive({
  series: [42, 47, 52, 58, 65],
  chartOptions: {
    chart: {
      width: 380,
      type: 'polarArea'
    },
    labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
    fill: {
      opacity: 1
    },
    stroke: {
      width: 1,
      colors: undefined
    },
    yaxis: {
      show: false
    },
    legend: {
      display: false,
      position: 'bottom'
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        },
        spokes: {
          strokeWidth: 0
        }
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 0.6
      }
    },
    responsive: [
    {
      breakpoint: 1000,
      options: {
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        legend: {
          position: "bottom"
        }
      }
    }
  ]
  }
})
</script>
