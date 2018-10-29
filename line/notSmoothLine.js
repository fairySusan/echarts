var line3Element = document.getElementById('line3-chart');
var mychart = echarts.init(line3Element);
var option = {
    grid: {
        show: true,
    },
    xAxis:{
        type:'category',
        show:true,
        position:'bottom',
        axisTick:{
            show:false
        },
        splitLine: {
            lineStyle: {
                color: '#9f9796'
            }
        },  
        data:['23:00','24:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00'],
        axisLabel:{
            show: true,
            interval: 0,//横轴信息全部显示
            color: '#ffffff',
            inside: false,
        }
    },
    yAxis:{
        type:'value',
        show:true,
        min: 50,
        max:100,
        axisLine:{
            show:false
        },
        splitLine: {
            lineStyle: {
                color: '#9f9796'
            }
        },     
        axisTick:{
            show:false
        },
        axisLabel:{
            show: true,
            color: '#ffffff',
            inside: false,
        }
    },
    tooltip:{
        trigger:'axis',
        axisPointer:{
            type:'line'
        }
    },
    series:[
        {
            name:'本期',
            type:'line',
            symbol: 'circle',
            symbolSize: 8,//小圆圈的大小
            lineStyle:{
                color:'rgb(238,120,42)',
                type:'solid'
            },
            itemStyle:{
                color: 'rgb(1,25,61)',
                borderColor: 'rgb(238,120,42)',
                borderWidth: 2
            },
            data:[92,91,90,78,90,80,82,84,92,95,84,82,94]
        }
    ]
}
chartOption = {
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
          return params[0].axisValue + '</br>当前值：' + params[0].value + this.unit + '</br>日常值：' + params[1].value + this.unit;
      }
    },
    grid: {
      left: '0',
      right: '20',
      top: '30',
      bottom: '0',
      containLabel: true,
      show: false,
      backgroundColor: '#000000',
      borderColor: '#000000',
      borderWidth: 1
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      data: ['23:00','24:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00'],
      axisLine: {
        show: false,
        lineStyle: { color: '#2D81D2', width: 2 }
      },
      splitLine: { show: false }, // 去除网格线
      axisTick: {show: false},
      axisLabel: {
        textStyle: {
          color: '#ffffff',
          fontSize: 14
        },
        interval: 0,
      },
    }],
    yAxis: [{
      type: 'value',
      name: '',
      splitLine: {
        lineStyle: {
            color:  ['rgba(255,255,255,0.2)']
        },
        show: true
      }, // 网格线
      axisLabel: {
        textStyle: {
          color: '#ffffff',
          fontSize: 14
        },
        show: true,
        formatter: '{value}'
      },
      axisTick: {show: false},
      axisLine: {
        show: false,
        lineStyle: { color: 'rgba(255,255,255,0.2)', width: 2 }
      },
    },
    ],
    series: [{
      data: [92,91,90,78,90,80,82,84,92,95,84,82,94],
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
           color: 'rgb(1,25,61)',
           borderWidth: 1,
           borderColor: '#0bf76f',
      },
      lineStyle: {
          color: '#0bf76f'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(11, 247, 109, 0.8)' // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(11, 247, 109, 0.1)' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        }
      }
    }, {
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
           color: 'rgb(1,25,61)',
           borderWidth: 1,
           borderColor: '#ffd236',
      },
      lineStyle: {
        color: '#ffd236'
      },
      data: [92,91,90,78,90,80,82,84,92,95,84,82,94],
    }]
  };
mychart.setOption(chartOption);