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
mychart.setOption(option);