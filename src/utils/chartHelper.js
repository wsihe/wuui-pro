export const buildLineChart = (() => {
  return {
    legend: {
      top: 0,
      right: 0
    },
    tooltip: {
      trigger: 'axis'
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

export const buildCardChart = (() => {
  return {
    legend: {
      show: false
    },
    tooltip: {
      trigger: 'axis',
      confine: true,
      formatter: function (params) {
        let res = params.reduce((pre, item) => {
          let dot = `<span style="display:inline-block;border-radius:50%;margin:2px;background:${item.color};width:5px;height:5px"></span>`
          return pre + `${dot} ${item.name} <span style="margin-left:15px"> ${item.value}</span>`
        }, '')
        return res
      }
    },
    grid: {
      top: '12%',
      left: '-20px',
      right: '-20px',
      bottom: '0'
    },
    xAxis: {
      type: 'category',
      show: false
    },
    yAxis: [{
      type: 'value',
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    }],
    series: []
  }
})()
