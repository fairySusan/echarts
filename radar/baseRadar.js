var radarElement = document.getElementById('radar-chart');
var mychart = echarts.init(radarElement);
var option = {
    legend:{},
    tooltip:{},
    radar:{
        indicator:[
            {name:'客户反映',max:95,color: 'red'},
            {name:'业务感知',max:96},
            {name:'服务感知',max:99},
            {name:'竞对感知',max:96},
            {name:'场景感知',max:95},
            {name:'最差感知',max:94},
            {name:'覆盖感知',max:96},
            {name:'容量感知',max:98},
            {name:'结构感知',max:99}
        ],
        name:{
            formatter:function(v){
                console.log(v);
                return v;
            }
        },
        tooltip:{},
        triggerEvent:true
    },
    series:[{
        type:'radar',
        symbol:'circle',
        symbolSize:6,
        data:[
        {
            name:'本期',
            value:[90,92,99,94,95,93,96,98,95],
            areaStyle:{
                color:'rgb(34,191,239)',
                opacity:0.3
            },
            lineStyle:{
                color:'rgb(34,191,239)'
            },
            itemStyle:{
                color:'rgb(34,191,239)'
            }
        },{
            name:'上期',
            value:[93,94,95,93,89,84,92,91,90],
            areaStyle:{
                color:'rgb(219,98,215)',
                opacity:0.3
            },
            lineStyle:{
                color:'rgb(219,98,215)'
            },
            itemStyle:{
                color:'rgb(219,98,215)'
            }
        },{
            name:'最优',
            value:[95,96,99,96,95,94,96,98,99],
            areaStyle:{
                color:'rgb(146,193,30)',
                opacity:0.3
            },
            lineStyle:{
                color:'rgb(146,193,30)'
            },
            itemStyle:{
                color:'rgb(146,193,30)'
            }
        }],
    }]
}
mychart.setOption(option);
mychart.on('click', function (params) {
    // 控制台打印数据的名称
    console.log(params);
});