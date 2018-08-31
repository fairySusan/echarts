const MockData = [
    {name: '丰都', value: 0.9,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '重庆', value: 0.05,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '合川', value: 0.13,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '彭水', value: 0.12,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '秀山', value: 0.09,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '忠县', value: 0.03,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '开州', value: 0.05,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '垫江', value: 0.1,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '城口', value: 0.7,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '大足', value: 0.4,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '綦江', value: 0.17,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '万州', value: 0.13,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '长寿', value: 0,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '黔江', value: 0.04,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '江津', value: 0.05,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '璧山', value: 0.03,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '双桥', value: 0.16,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '万盛', value: 0.18,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '涪陵', value: 0.19,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '永川', value: 0.3,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '潼南', value: 0.04,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '荣昌', value: 0.04,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '梁平', value: 0.04,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '武隆', value: 0.6,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '云阳', value: 0.3,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '奉节', value: 0.15,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '巫山', value: 0.01,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '巫溪', value: 0.1,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '石柱', value: 0.13,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '酉阳', value: 0.16,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '南川', value: 0.13,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]},
    {name: '铜梁', value: 0.1,list:  [     {name:'OLT退服衍生告警数',value:5},     {name:'OLT退服数',value:80},     {name:'OLT退服率',value:0.05},     {name:'影响用户数',value:50},     {name:'影响用户率',value:0.3}, ]}
  ];
const listData = [
    {name:'OLT退服衍生告警数',value:5},
    {name:'OLT退服数',value:80},
    {name:'OLT退服率',value:0.05},
    {name:'影响用户数',value:50},
    {name:'影响用户率',value:0.3},
]
geoCoordMap = [
    {
        name: '重庆',
        coord: [106.57, 29.55]
    },
    // {
    //     name: '双桥',
    //     coord:  [105.78, 29.48]
    // },
    {
        name: '万州',
        coord:  [108.3911, 30.6958]
    },
    {
        name: '涪陵',
        coord: [107.3364, 29.6796]
    },
    {
        name: '黔江',
        coord: [108.7207, 29.4708]
    },
    {
        name: '长寿',
        coord: [107.1606, 29.9762]
    },
    {
        name: '綦江',
        coord: [106.6553, 28.8171]
    },
    {
        name: '大足',
        coord: [105.7544, 29.6136]
    },
    {
        name: '璧山',
        coord: [106.2048, 29.5807]
    },
    {
        name: '永川',
        coord: [105.8643, 29.2566]
    },
    {
        name: '江津',
        coord: [106.2158, 28.9874]
    },
    {
        name: '潼南',
        coord: [105.7764, 30.1135]
    },
    {
        name: '梁平',
        coord: [107.7429, 30.6519]
    },
    {
        name: '城口',
        coord: [108.7756, 31.9098]
    },
    {
        name: '丰都',
        coord: [107.8418, 29.9048]
    },
    {
        name: '垫江',
        coord: [107.4573, 30.2454]
    },
    {
        name: '武隆',
        coord: [107.75, 29.33],
    },
    {
        name: '忠县',
        coord: [107.8967, 30.3223]
    },
    {
        name: '开州',
        coord: [108.4131, 31.2561]
    },
    {
        name: '云阳',
        coord:  [108.8306, 31.0089]
    },
    {
        name: '奉节',
        coord: [109.3909, 30.9265]
    },

    {
        name: '巫山',
        coord:  [109.88, 31.08]
    },
    {
        name: '巫溪',
        coord: [109.3359, 31.4813]
    },
    {
        name: '石柱',
        coord: [108.2813, 30.1025]
    },
    {
        name: '秀山',
        coord: [109.0173, 28.5205]
    },
    {
        name: '酉阳',
        coord: [108.8196, 28.8666]
    },
    {
        name: '彭水',
        coord: [108.2043, 29.3994]
    },
    {
        name: '合川',
        coord: [106.3257, 30.108]
    },
    {
      name: '南川',
      coord: [107.1716, 29.1302]
    },
    {
      name: '铜梁',
      coord: [106.0291, 29.8059]
    },
    {
      name: '荣昌',
      coord: [105.5127, 29.4708]
    },
    {
      name: '万盛',
      coord: [106.908, 28.9325]
    },
  ];
$.get('http://127.0.0.1:8081/chongqing',function(res){
    var json = res;
    var mapElement = document.getElementById('cq-map-chart');
    echarts.registerMap('CQ', json);
    var mychart = echarts.init(mapElement);
    var option = {
        tooltip:{
            trigger:'item',
            backgroundColor: 'rgba(6,34,86,0.8)',
            opacity: 0.8,
            extraCssText: "width:373px;height:233px;background: url(./gis-tip.png) no-repeat;",
            formatter:function(params) {
                console.log("params",params);
                let res = '';
                if(params.data){
                    res = `<div style="width: 150px; top: 5px; left: 30px;height: 20px;font-family: MicrosoftYaHei-Bold;font-size: 20px;font-weight: normal;font-stretch: normal;letter-spacing: 2px;color: #ec792f;">${params.data.name}</div>`;
                    params.data.list.forEach((element) => {
                        res = res + `<div style="display:flex;flex-direction:row;flex-flow: row nowrap;justify-content: flex-start;align-items:center;font-size: 18px;margin-top:10px;">
                        <div style="width: 12px;height: 12px;border: solid 2px #37dcda;border-radius: 8px;"></div>&nbsp;&nbsp;${element.name}：  
                        <div style="font-family: Led Font;font-size: 24px;color: #ffea00;">${element.value}</div></div>`;
                    })
                    return res;
                }
            },
            position: (pos, params, dom, rect, size) => {
                const obj = {
                  left: pos[0] - size.contentSize[0] / 2 + 10,
                  top: pos[1] - size.contentSize[1],
                };
                return obj;
            },
        },
        visualMap: {
            name:'图例',
            type:'piecewise',
            pieces:[
                {gt:0.15,label:'>15%', color: '#fe8d29'},
                {lt:0.1,label:'<10%', color: '#29dedc'},
                {gt:0.1,lt:0.15,label:'10%-15%', color: '#08a9fd'}
            ],
            realtime: false,
            calculable: true,
            inRange: {
                symbol:'circle'
            },
            right:10,
            itemGap: 5,
            bottom: 10,
            align: 'left',
            itemWidth: 10,
            textStyle: {
                color: '#ffffff'
            },
            // selectedMode : 'single',
            backgroundColor: 'rgb(1,24,56)',
            borderWidth: 0.5,
            borderColor: '#ffffff',
            color: '#ffffff',
        },
        // geo:{
        //     show: true,
        //     map: 'chongqing',
        // },
        series:[
            {
                name: '本期',
                type: 'map',
                mapType: 'CQ', // 自定义扩展图表类型
                itemStyle: {
                    normal: {
                      borderColor: '#022351',
                      borderWidth: 2,
                    }
                },
                label:{
                    show:true,
                    fontSize: 12,
                    color: '#ffffff',
                    fontFamily: 'MicrosoftYaHei'
                },
                emphasis: {
                    label: {
                        show: true,
                        color: '#ffffff'
                    },
                    itemStyle: {
                        areaColor: 'auto',
                        borderColor: '#ffffff',
                        borderWidth: 1.5,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 5,
                        shadowOffsetY: 5
                    }
                },
                markPoint: {
                    symbol: 'circle',
                    symbolSize: 5,
                    symbolOffset: [0, -10],
                    itemStyle: {
                        color: 'rgb(2,35,81)',
                        borderColor: "#ffffff",
                        borderWidth: 2
                    },
                    data: geoCoordMap
                },
                zoom: 1.2,
                selectedMode: 'single',
                data: MockData
            }
        ]
    };
    mychart.setOption(option);
})