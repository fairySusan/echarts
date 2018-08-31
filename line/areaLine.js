var lineElement = document.getElementById('line-chart');
var lineChart = echarts.init(lineElement);
var option = {
    xAxis: {
        type:'category',
        data:['1月','2月','3月','4月','5月','6月'],
        axisTick:{
            show:false
        },
        boundaryGap: false,
        splitLine:{
            show:true
        },
        splitArea:{
            show:true
        },
        axisLabel:{
            showMinLabel:true,
            showMaxLabel:true
        }
    },
    yAxis: {
        type: 'value',
        min: 80,
        max:100,    
        axisTick:{
            show:false
        }
    },
    tooltip:{
        trigger:'axis'
    },
    series:[{
        type:'line',
        symbolSize:10,//小圆圈的大小
        smooth:true,
        lineStyle:{
            color:'rgb(42,212,225)',
            type:'solid'
        },
        itemStyle:{
            color:'rgb(42,212,225)'
        },
        areaStyle:{
            color:{
                type:'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops:[
                    {
                        offset:0,color:'rgb(42,212,225)'
                    },
                    {
                        offset:1,color:'white'
                    }
                ]
            },
            opacity:0.3
        },
        data:[90,99,93,95,92,96],
    }]
}
lineChart.setOption(option);