<template>
  <div class="app-chat">
    <apexchart height="400" width="100%" type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
name: "SampleBarChat",
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ["January","February","March","April","May","June","July",
          "August","September","October","November","December"]
        },
      colors: ['#295AA9', '#63CAF2', '#B2D9A0'],

    stroke: {
          curve: 'smooth'
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350
          }
        }
      },
      series: [{
        name: 'No. of Likes',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 10, 10, 250, 10]
      },
        {
          name: 'No. of Comments',
          data: [3, 14, 5, 20, 149, 60, 170, 201, 80, 100, 100, 1000]
        },
        {
          name: 'No. of Views',
          data: [300, 400, 350, 500, 490, 600, 300, 200, 980, 800, 1000, 1000]
        }]
    }
  },
}
</script>

<style scoped>

</style>