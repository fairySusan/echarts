$.get('http://127.0.0.1:8081/liaoning',function(res){
    var json = res;
    var mapElement = document.getElementById('map-chart');
    echarts.registerMap('LN', json);
    var mychart = echarts.init(mapElement);
    var option = {
        tooltip:{
            trigger:'item',
            formatter:function(params) {
                var res = '';
                var myseries = option.series;
                for (var i = 0; i < myseries.length; i++) {
                    for(var j=0;j<myseries[i].data.length;j++){
                        if(myseries[i].data[j].name==params.name){
                            res+=myseries[i].name +' : '+Math.abs(myseries[i].data[j].value)+'</br>';
                        }
                    }
                }
                return res;
            }
        },
        visualMap: {
            type:'piecewise',
            pieces:[
                {gt:0,label:'较上期提升'},
                {lt:0,label:'较上期劣化'},
                {value:0,label:'较上期持平', color: 'rgb(229,229,229)'}
            ],
            realtime: false,
            calculable: true,
            inRange: {
                symbol:'circle',
                color: ['rgb(252,128,89)','rgb(168,222,36)']
            }
        },
        series: [{
            name: '本期',
            type: 'map',
            mapType: 'LN', // 自定义扩展图表类型
            label:{
                show:true
            },
            data:[
                {name: '沈阳', value: 89},
                {name: '大连', value: 91},
                {name: '鞍山', value: 92},
                {name: '营口', value: 93},
                {name: '铁岭', value: 94},
                {name: '葫芦岛', value: 95},
                {name: '锦州', value: 96},
                {name: '抚顺', value: 88},
                {name: '辽阳', value: 87},
                {name: '朝阳', value: 86},
                {name: '丹东', value: 91},
                {name: '本溪', value: 92},
                {name: '阜新', value: 93},
                {name: '盘锦', value: 96}
            ],
            nameMap:{
                '沈阳市':'沈阳',
                '大连市':'大连',
                '鞍山市':'鞍山',
                '营口市':'营口',
                '铁岭市':'铁岭',
                '葫芦岛市':'葫芦岛',
                '锦州市':'锦州',
                '抚顺市':'抚顺',
                '辽阳市':'辽阳',
                '朝阳市':'朝阳',
                '丹东市':'丹东',
                '本溪市':'本溪',
                '阜新市':'阜新',
                '盘锦市':'盘锦'
            }
        },{
            name: '上期',
            type: 'map',
            mapType: 'LN', // 自定义扩展图表类型
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
                {name: '沈阳', value: -90},
                {name: '大连', value: -93},
                {name: '鞍山', value: -91},
                {name: '营口', value: -94},
                {name: '铁岭', value: -91},
                {name: '葫芦岛', value: -90},
                {name: '锦州', value: -95},
                {name: '抚顺', value: -96},
                {name: '辽阳', value: -97},
                {name: '朝阳', value: -80},
                {name: '丹东', value: -81},
                {name: '本溪', value: -95},
                {name: '阜新', value: -88},
                {name: '盘锦', value: -96}
            ],
            nameMap:{
                '沈阳市':'沈阳',
                '大连市':'大连',
                '鞍山市':'鞍山',
                '营口市':'营口',
                '铁岭市':'铁岭',
                '葫芦岛市':'葫芦岛',
                '锦州市':'锦州',
                '抚顺市':'抚顺',
                '辽阳市':'辽阳',
                '朝阳市':'朝阳',
                '丹东市':'丹东',
                '本溪市':'本溪',
                '阜新市':'阜新',
                '盘锦市':'盘锦'
            }
        }]
    };
    mychart.setOption(option);
});
