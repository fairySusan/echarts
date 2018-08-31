var line2Element = document.getElementById('line2-chart');
var mychart = echarts.init(line2Element);
var option = {
    xAxis:{
        type:'category',
        show:true,
        position:'bottom',
        axisTick:{
            show:false
        },
        splitArea:{
            show:true,
            
        },
        data:['沈阳','大连','鞍山','营口','铁岭','葫芦岛','锦州','抚顺','辽阳','朝阳','丹东','本溪','阜新'],
        axisLabel:{
            show: true,
            interval: 0,//横轴信息全部显示
            inside: false,
            formatter: function (value) {
                //x轴的文字改为竖版显示
                var str = value.split("");
                return str.join("\n");
            },
        }
    },
    yAxis:{
        type:'value',
        show:true,
        min: 50,
        max:100,    
        axisTick:{
            show:false
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
            symbolSize:10,//小圆圈的大小
            smooth:true,
            lineStyle:{
                color:'rgb(38,192,239)',
                type:'solid'
            },
            itemStyle:{
                color:'rgb(38,192,239)'
            },
            data:[92,91,90,78,90,80,82,84,92,95,84,82,94]
        },
        {
            name:'上期',
            type:'line',
            symbolSize:10,//小圆圈的大小
            smooth:true,
            lineStyle:{
                color:'rgb(219,98,215)',
                type:'solid'
            },
            itemStyle:{
                color:'rgb(219,98,215)'
            },
            data:[80,93,87,78,90,94,82,84,82,95,94,92,87]
        }
    ]
}
mychart.setOption(option);