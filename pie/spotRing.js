var chartElement = document.getElementById('spot-ring-chart');
var mychart = echarts.init(chartElement);
var option = {
    grid: {
        show: false,
        left: 'center',
        top: 'middle',
        containLabel: true,
        backgroundColor: '#000000',
        borderColor: '#000000',
        borderWidth: 1
    },
    series:[{
        type: 'gauge',
        name: '带小点环状图',
        title: '带小点环状图',
        radius: '50%',
        splitNumber:1,
        axisTick:{
            show:false
        },
        axisLine:{
            lineStyle:{
                color:[
                    [0.9, {
                        type: 'linear',
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(66,85,120,0.9)' // 0% 处的颜色
                            // color: this.getNeedColor(this.ownConfig, 0, 1)
                        }, {
                            offset: 1,
                            color: 'rgba(203,64,69,0.9)' //100% 处的颜色
                            // color: this.getNeedColor(this.ownConfig, 0, 2) // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }],
                    [1, 'rgba(66,85,120,0.9)'],
                ],
                width: 10,
            }
        },
        detail:{
        },
        data: [{
            value: 50,
        }],
    },{
        name:'圆球',
        type: 'graph',
        ribbonType: true,
        layout: 'none',
        symbolSize: 16,
        width: '100%',
        height: '100%',
        cursor: 'default',
        circular: {
            rotateLabel: true
        },
        itemStyle: {
            normal: {
                label: {
                    show: false,
                },
                color: 'rgba(203,64,69,0.9)'
            },
            emphasis: {
                label: {
                    show: false,
                }
            }
        },
        data: [{
            name: '利用率',
            x: 100,
            y: 100,
            value: 30,
        },
        {
            name: '公司A2',
            min: 0,
            max: 100,
            value: 80,
        }
    ],
    }]
}
mychart.setOption(option);