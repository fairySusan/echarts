/*用geo模拟地图轮廓阴影 */
var data1 = [
    {name: '张家口市', value: 136,  itemStyle: {
        color: {
            type: 'linear',
            x: 0,
            y:0,
            x1: 1,
            y1: 0,
            colorStops: [{
                offset: 0, color: 'red' // 0% 处的颜色
            }, {
                offset: 1, color: 'blue' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
    }},
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
var regions = [
    {
        name: '张家口市',
        itemStyle: {
            color: {
              type: 'linear',
                x: 0,
                y:0,
                x1: 0,
                y1: 1,
                colorStops: [{
                    offset: 0, color: '#2467bc' // 0% 处的颜色
                }, {
                    offset: 1, color: '#2b58b9' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    },
    {
        name: '保定市',
        itemStyle: {
            color: {
                type: 'linear',
               x: 0,
                y:0,
               x1: 0,
               y1: 1,
                colorStops: [{
                    offset: 0, color: '#2b58b9' // 0% 处的颜色
                }, {
                    offset: 1, color: '#2a5bbb' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    },
    {
        name: '石家庄市',
        itemStyle: {
            color: {
                type: 'linear',
               x: 0,
                y:0,
               x1: 0,
               y1: 1,
                colorStops: [{
                    offset: 0, color: '#2a5bbb' // 0% 处的颜色
                }, {
                    offset: 1, color: '#3a35b2' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    },
    {
        name: '邢台市',
        itemStyle: {
            color: {
                type: 'linear',
               x: 0,
                y:0,
               x1: 0,
               y1: 1,
                colorStops: [{
                    offset: 0, color: '#3a35b2' // 0% 处的颜色
                }, {
                    offset: 1, color: '#432cb8' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    },
    {
        name: '邯郸市',
        itemStyle: {
            color: {
                type: 'linear',
               x: 0,
                y:0,
               x1: 0,
               y1: 1,
                colorStops: [{
                    offset: 0, color: '#432cb8' // 0% 处的颜色
                }, {
                    offset: 1, color: '#481db3' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    },
    {
        name: '承德市',
        itemStyle: {
            color: {
                type: 'linear',
               x: 0,
                y:0,
               x1: 0,
               y1: 1,
                colorStops: [{
                    offset: 0, color: '#2467bc' // 0% 处的颜色
                }, {
                    offset: 1, color: '#2367b9' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    },
    {
        name: '唐山市',
        itemStyle: {
            color: {
                type: 'linear',
               x: 0,
                y:0,
               x1: 0,
               y1: 1,
                colorStops: [{
                    offset: 0, color: '#2467bc' // 0% 处的颜色
                }, {
                    offset: 1, color: '#314ab5' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    },
   {
        name: '衡水市',
        itemStyle: {
            color: {
                type: 'linear',
               x: 0,
                y:0,
               x1: 0,
               y1: 1,
                colorStops: [{
                    offset: 0, color: '#2a5bbb' // 0% 处的颜色
                }, {
                    offset: 1, color: '#432cb8' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    },{
        name: '沧州市',
        itemStyle: {
            color: {
                type: 'linear',
               x: 0,
                y:0,
               x1: 0,
               y1: 1,
                colorStops: [{
                    offset: 0, color: '#2a5bbb' // 0% 处的颜色
                }, {
                    offset: 1, color: '#313eb4' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    },
    {
        name: '廊坊市',
        itemStyle: {
            color: {
                type: 'linear',
               x: 0,
                y:0,
               x1: 0,
               y1: 1,
                colorStops: [{
                    offset: 0, color: '#2b58b9' // 0% 处的颜色
                }, {
                    offset: 1, color: '#324cba' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    },
    {
        name: '秦皇岛市',
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                y:0,
               x1: 0,
               y1: 1,
                colorStops: [{
                    offset: 0, color: '#2367b9' // 0% 处的颜色
                }, {
                    offset: 1, color: '#2b59ba' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    }
]
$.get('http://127.0.0.1:8081/hebei',function(res){
    var json = res;
    var mapElement = document.getElementById('hebei-map-chart');
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
        geo: {
            map: 'hebei',
            roam: 'scale',
            zoom: 1.2,
            left: '34%',
            top: '12%',
            itemStyle: {
               // color: '#0045cc',
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'blue' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth: 0,
                shadowColor: 'rgba(0,54,255,1)',
                shadowBlur: 50
            },
            silent: true,
           regions: regions
        },
        series: [{
            type: 'map',
            map: 'hebei',
            zoom: 1.2,
            roam: 'scale',
            label: {
                show: true,
                color: '#ffffff'
            },
            itemStyle: {
                areaColor: '#0045cc',
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
            data: data1,
        }]
    };
    mychart.setOption(option);
});
