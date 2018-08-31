/* 多层环图嵌套 */
var chartData = [
    {
        name: '一级告警',
        value: 52
    },
    {
        name: '二级告警',
        value: 30
    },
    {
        name: '三级告警',
        value: 60
    }
]
var chartElement = document.getElementById('mutil-ring-chart');
var mychart = echarts.init(chartElement);
color = ['#fb734e', '#e32f46','#94d96c', '#0bbcb7','#1a9bfc','#7049f0'];
var option = {
    series:[
        {
            type: 'pie',
            name: '多层环图嵌套',
            center: ['50%','50%'],
            radius: ['90%','95%'],
            label:{
                show: false
            },
            labelLine: {
                show: false
            },
            data: [
                {
                    name: '一级告警',
                    value: 52,
                    itemStyle:{
                        color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color:color[0]
                        }, {
                            offset: 1,
                            color: color[1]
                        }])
                    }
                },
                {
                    name: '',
                    value: 100-52,
                    itemStyle:{
                        color: 'gray'
                    }
                },
            ]
        },
        {
            type: 'pie',
            name: '多层环图嵌套',
            center: ['50%','50%'],
            radius: ['70%','75%'],
            label:{
                show: false
            },
            labelLine: {
                show: false
            },
            data: [
                {
                    name: '二级告警',
                    value: 30,
                    itemStyle:{
                        color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color:color[2]
                        }, {
                            offset: 1,
                            color: color[3]
                        }])
                    }
                },
                {
                    name: '',
                    value: 100-30,
                    itemStyle:{
                        color: 'rgb(2,35,81)'
                    }
                },
            ]
        },
        {
            type: 'pie',
            name: '多层环图嵌套',
            center: ['50%','50%'],
            radius: ['50%','55%'],
            label:{
                show: false
            },
            labelLine: {
                show: false
            },
            data: [
                {
                    name: '三级告警',
                    value:73,
                    itemStyle:{
                        color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color:color[4]
                        }, {
                            offset: 1,
                            color: color[5]
                        }])
                    }
                },
                {
                    name: '',
                    value: 100-73,
                    itemStyle:{
                        color: 'gray'
                    }
                },
            ]
        }
    ]
}
mychart.setOption(option);