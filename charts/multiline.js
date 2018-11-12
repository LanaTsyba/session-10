Vue.component('multibar-chart', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["Mediterranean Migrant Crisis","Protests of Islam critical PEGIDA movement in Dresden","Financial Crisis in Greece","Ukraine conflict between Russia and Western Countries"],
      datasets: [
        {
          label: 'Very high trust',
          borderColor: '#abc491',
          backgroundColor: 'transparent',
          data: [0.03,0.03,0.04,0.02]
        },
        {
          label: 'High trust',
          borderColor: '#7fab54',
          backgroundColor: 'transparent',
          data: [0.45,0.37,0.31,0.3]
        },
        {
          label: 'No answer',
          borderColor: '#bbc491',
          backgroundColor: 'transparent',
          data: [0.02,0.04,0.02,0.02]
        },
        {
          label: 'Low trust',
          borderColor: '#dbc491',
          backgroundColor: 'transparent',
          data: [0.41,0.41,0.46,0.52]
        },
        {
          label: 'Very low trust',
          borderColor: '#cbc491',
          backgroundColor: 'transparent',
          data: [0.09,0.15,0.17,0.14]
        }
      ]
    };

    var options = this.options || {scales: {
        yAxes:  [
          {
            display: false,
            ticks: {
              beginAtZero: true
            }
          }          } };

    this.renderChart(data, options);
  }
})
