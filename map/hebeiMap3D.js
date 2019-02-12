var data = [
    {name: '张家口市', value: 136,  height: 1},
    {name: '承德市', value: 106,  height: 1},
    {name: '秦皇岛市', value: 96,  height: 1},
    {name: '唐山市', value: 136,  height: 1},
    {name: '保定市', value: 116,  height: 1},
    {name: '廊坊市', value: 100,  height: 1},
    {name: '石家庄市', value: 136,  height: 8},
    {name: '沧州市', value: 90,  height: 1},
    {name: '衡水市', value: 110,  height: 1},
    {name: '邢台市', value: 86,  height: 1},
    {name: '邯郸市', value: 136, height: 1}
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
            show: false,
            roam: true,
            boxHeight: 10,
            environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0, color: '#00aaff' // 天空颜色
              }, {
                offset: 0.7, color: '#998866' // 地面颜色
              }, {
                offset: 1, color: '#998866' // 地面颜色
              }], false)
         },
        series: [{
            type: 'map3D',
            map: 'hebei',
            // regionHeight: 1,
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
            boxHeight: 10,
        }]
    };
    mychart.setOption(option);
});
