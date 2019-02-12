var flowLine = document.getElementById('flow-line');
var mychart = echarts.init(flowLine);
pointCoord1 = [
    {name: '北海',value: [0,0]},
    {name: '贺州',value: [0,10]},
    {name: '百色',value: [0,20]},
    {name: '桂林',value: [0,30]},
    {name: '玉林',value: [0,40]},
    {name: '河池',value: [0,50]},

    {name: '南宁',value: [30,30]},

    {name: '贵港',value: [50,0]},
    {name: '柳州',value: [50,30]},
    {name: '钦州',value: [50,50]},
];
pointCoord2 = [
    {name: '北海',value: [0,0]},
    {name: '贺州',value: [0,10]},
    {name: '百色',value: [0,20]},
    {name: '桂林',value: [0,30]},
    {name: '玉林',value: [0,40]},
    {name: '河池',value: [0,50]},
];
pointCoord3 = [
    {name: '贵港',value: [50,0]},
    {name: '柳州',value: [50,30]},
    {name: '钦州',value: [50,50]},
];
function convertLinks(data1, data2) {
    let linksData = [];
    data1.forEach(element => {
        linksData.push({
            source: element.name,
            target: '南宁'
        })
    });
    data2.forEach(el => {
        linksData.push({
            source: '南宁',
            target: el.name
        })
    })
    console.log('cccc', linksData);
    return linksData;
}
function convertLines(data1, data2) {
    let linesData = [];
    data1.forEach(element => {
        linesData.push({
           coords:[element.value,[30,30]]
        })
    });
    data2.forEach(el => {
        linesData.push({
            coords:[[30,30],el.value]
        })
    });
    console.log('cvvvvcc', linesData);
    return linesData;
}
var option = {
    title: {
        text: "互联网流量",
        textStyle: {
            color: '#ffffff'
        },
        top: "top",
        left: "center"
    },
    xAxis:{
        type: 'value',
        show: false
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [
        {
            type: 'graph', // 节点
            name: '节点1',
            coordinateSystem: 'cartesian2d', // 2维直角坐标系
            symbolSize: 40,
            symbol: 'circle',
            itemStyle: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 1,
                    colorStops: [{
                        offset: 0, color: 'red'
                    }, {
                        offset: 1, color: 'white'
                    }]
                }
            },
            focusNodeAdjacency: true, // 鼠标移到节点上，突出该节点
            label: {
                show: true
            },
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: 'red'
                    },{
                        offset: 1, color: 'white'
                    }]
                }
            },
            data: pointCoord1,
            links: convertLinks(pointCoord2, pointCoord3)
        },
        // 添加线的光点特效
        {
            type: 'lines',
            name: 'lines',
            coordinateSystem: 'cartesian2d',
            effect: {
                show: true,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'white'
                    },{
                        offset: 1, color: 'red'
                    }]
                }
            },
            data: convertLines(pointCoord2, pointCoord3)
        }
    ]
}
mychart.setOption(option);