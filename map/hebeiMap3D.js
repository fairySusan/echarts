var data = [
    {name: '张家口市', value: 136},
    {name: '承德市', value: 106},
    {name: '秦皇岛市', value: 96},
    {name: '唐山市', value: 136},
    {name: '保定市', value: 116},
    {name: '廊坊市', value: 100},
    {name: '石家庄市', value: 136},
    {name: '沧州市', value: 90},
    {name: '衡水市', value: 110},
    {name: '邢台市', value: 86},
    {name: '邯郸市', value: 136}
]
$.get('http://127.0.0.1:8081/hebei',function(res){
    var json = res;
    var mapElement = document.getElementById('hebei-3dmap-chart');
    echarts.registerMap('hebei', json);
    var mychart = echarts.init(mapElement);
    var option = {
        tooltip:{
            trigger:'item'
        },
        visualMap: {
            type:'piecewise',
            pieces:[],
            realtime: false,
            calculable: true,
            inRange: {}
        },
        geo3D: {
            map: 'hebei',
            roam: true,
        //     environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //         offset: 0, color: '#00aaff' // 天空颜色
        //       }, {
        //         offset: 0.7, color: '#998866' // 地面颜色
        //       }, {
        //         offset: 1, color: '#998866' // 地面颜色
        //       }], false)
         },
        series: [{
            type: 'map3D',
            map: 'hebei',
            regionHeight: 4,
            roam: true,
            label: {
                show: true,
                textStyle: {
                    color: '#ffffff'
                }
            },
            itemStyle: {
                color: '#0145CC',
                borderColor: 'rgb(2,35,81)',
                borderWidth: 2
            },
            emphasis: {
                label: {
                    show: false,
                },
                itemStyle: {
                    color: '#0145CC',
                }
            },
            shading: 'lambert',
            light:{
                main:{
                    color: '#fff',
                    intensity:1,
                    shadow: true
                },
                ambient: {
                    color: '#fff',
                    intensity: 1
                }
            },
            data: data,
        }]
    };
    mychart.setOption(option);
});
