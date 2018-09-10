export const buildLineChart = (() => {
  return {
    title: {
      text: '',
      top: 12,
      left: '40%',
      textStyle: {
        color: '#333',
        fontSize: 14
      }
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#303030',
      padding: [10, 8],
      textStyle: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'Microsoft YaHei',
        align: 'left'
      },
      extraCssText: 'border-radius:2px; opacity: 0.8;',
      formatter: function (params) {
        let res = params[0].name
        for (let i = 0, l = params.length; i < l; i++) {
          let rate = params[i].value ? (parseFloat(params[i].value) * 100).toFixed(2) + '%' : '--'
          res += `<br/>${params[i].seriesName}:${rate}`
        }
        return res
      }
    },
    legend: {
      bottom: 0,
      icon: 'circle',
      itemWidth: 8,
      textStyle: {
        fontSize: 12,
        color: '#999'
      },
      data: []
    },
    grid: {
      top: '45px',
      left: '0',
      right: '10px',
      bottom: '0',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: '#ededed',
          type: 'solid'
        }
      },
      axisLabel: {
        color: '#666',
        margin: 24
      }
    },
    yAxis: {
      type: 'value',
      scale: true, // 设置成 true 后坐标刻度不会强制包含零刻度
      axisLabel: {
        formatter: function (value) {
          return (value * 100).toFixed(0) + '%'
        }
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#ededed'
        }
      }
    },
    series: []
  }
})()
