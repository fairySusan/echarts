var pie1Element = document.getElementById('pie1-chart');
var mychart = echarts.init(pie1Element);
var option = {
    legend: {
        orient: 'vertical',
        x: 'right',
        top: '50%',
        itemGap: 20,
        itemWidth: 10,
        itemHeight: 10,
        textStyle:{
            color: '#ffffff'
        },
        data:['传输原因','停电原因','设备原因','其他原因']
    },
    series:[{
        type: 'pie',
        radius: ['50%', '70%'],
        label:{
            show:false
        },
        labelLine:{
            show: false
        },
        data:[
            {value:25, name:'传输原因',itemStyle:{color:'#00baff',borderWidth: 20, borderColor: 'rgb(2,35,81)'}},
            {value:25, name:'停电原因',itemStyle:{color:'#b4872f',borderWidth: 20, borderColor: 'rgb(2,35,81)'}},
            {value:25, name:'设备原因',itemStyle:{color:'#37d091',borderWidth: 20, borderColor: 'rgb(2,35,81)'}},
            {value:25, name:'其他原因',itemStyle:{color:'#ca4242',borderWidth: 20, borderColor: 'rgb(2,35,81)'}}
        ]
    }]
}
mychart.setOption(option);