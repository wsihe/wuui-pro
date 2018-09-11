export const buildLineChart = (() => {
  return {
    legend: {
      top: 0,
      right: 0
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        var res = params[0].name
        for (var i = 0, l = params.length; i < l; i++) {
          res += '<br/>' + params[i].seriesName + ' : ' + params[i].value
        }
        return res
      }
    },
    grid: {
      top: '12%',
      left: '30px',
      right: '0',
      bottom: '20px'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: [{
      type: 'value'
    }],
    series: []
  }
})()
