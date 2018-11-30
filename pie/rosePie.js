var chartElement = document.getElementById('rose-pie');
var mychart = echarts.init(chartElement);
var option = {
    backgroundColor: '#fff',
  color: ['#2c54af','#3256b5','#3c5cbf','#4862cb','#6670e9','#7c7cff','#767af9',],
  calculable : true,
    angleAxis: {
      interval: 1,
      type: 'category',
      data: ['08/17-08/23',
          '08/18-08/24',
          '08/19-08/25',
          '08/20-08/26',
          '08/21-08/27',
          '08/22-08/28',
          '08/23-08/29',
          '08/24-08/30',
          '08/25-08/31',
          '08/26-09/01',
          '08/27-09/02',
          '08/28-09/03',
          '08/29-09/04',
          '08/30-09/05',
          '08/31-09/06',
      ],
      minInterval: 0,
      maxInterval: 50,
      axisLine: {
          show: true,
          lineStyle: {
              color: "#aaa",
              width: 1,
              type: "solid"
          },
      },
      axisLabel: {
          interval: 0,
           rotate:40  ,
          show: false,
          inside: false,
          color: "#666",
          margin: 0,
          fontSize: 12,
          //  formatter: function (value, index) {
          //     var res = '';
          //     res = '<div style="color:red;">'+value+'</div>';
          //     return res;
          // }
      },
      splitLine:{
          show: true,
          lineStyle:{
              color: '#eee',
              type:'solid',
          }
          
      }
  },
  radiusAxis: {
     min: 0,
      max: 1.41,
      interval: 0,
      axisLine: {
          show: false,
      },
      axisLabel: {
          show: false,
      },
      splitLine: {
          show: false,
      }
  },
  polar:{
      radius: '65%',
  },
  series : [
      {
          name:'增值电信业务统计表',
          type:'pie',
          radius : [5, 150],
          roseType: 'radius',
          label:{
              show:true,
              position:'inside',
              formatter: '{c}'
          },
          data:[
             {
              value: 1.1,
              name:'08/17-08/23',
              itemStyle:{
                  color: '#2c54af',
                  shadowBlur: 30,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
          },
          {
              value: 1.1,
              name: '08/18-08/24',
              itemStyle:{
                  color: '#3256b5',
                  shadowBlur: 30,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
          },
          {
              value: 1.1,
              name: '08/19-08/25',
              itemStyle:{
                  color: '#3c5cbf',
                  shadowBlur: 30,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
          },
          {
              value: 1.1,
              name:'08/20-08/26',
              itemStyle:{
                  color: '#4862cb',
                  shadowBlur: 30,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
          },
          {
              value: 1.1,
             name:'08/21-08/27',
             itemStyle:{
                  color: '#6670e9',
                  shadowBlur: 30,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
          },
          {
              value: 1.1,
              name:'08/22-08/28',
              itemStyle:{
                  color: '#7c7cff',
                  shadowBlur: 30,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
          },
          {
              value: 1,
              name:'08/23-08/29',
              itemStyle:{
                  color: '#767af9',
                  shadowBlur: 30,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
          },
           {
              value: 1,
              name:'08/24-08/30',
              itemStyle:{
                  color: '#767af9',
                  shadowBlur: 30,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
          },
           {
              value: 1,
              name:'08/25-08/31',
              itemStyle:{
                  color: '#767af9',
                  shadowBlur: 30,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
          },
           {
              value: 1,
              name:'08/26-09/01',
              itemStyle:{
                  color: '#767af9',
                  shadowBlur: 30,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
          }, {
              value: 1.1,
              name:'08/27-09/02',
              itemStyle:{
                  color: '#767af9',
                  shadowBlur: 30,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
          }, {
              value: 1.1,
              name:'08/28-09/03',
              itemStyle:{
                  color: '#767af9',
                  shadowBlur: 30,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
          }, {
              value: 1.2,
              name:'08/29-09/04',
              itemStyle:{
                  color: '#767af9',
                  shadowBlur: 30,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
          }, {
              value: 1.1,
              name:'08/30-09/05',
              itemStyle:{
                  color: '#767af9',
                  shadowBlur: 30,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
          }, {
              value: 1.2,
              name:'08/31-09/06',
              itemStyle:{
                  color: '#767af9',
                  shadowBlur: 30,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
          }
          
          ],
          coordinateSystem: 'polar'
      },
      {
      radius: ['70%', '70%'],
      type: 'sunburst',
      sort: null,
      //highlightPolicy: 'ancestor',
      data: [{
          value:  0.83,
          name:'08/17-08/23'
          
      }, {
          value: 0.83,
           name:'08/18-08/24'
         
      }, {
          value: 0.84,
           name:'08/19-08/25'
         
      }, {
          value: 0.86,
          name:'08/20-08/26'
      },{
          value: 0.88,
          name:'08/21-08/27'
      },{
          value:0.84,
          name:'08/22-08/28'
      },{
          value:0.82,
          name:'08/23-08/29'
      },{
          value:0.82,
          name:'08/24-08/30'
      },{
          value:0.82,
          name:'08/25-08/31'
      },{
          value:0.82,
          name:'08/26-09/01'
      },{
          value:0.82,
          name:'08/27-09/02'
      },{
          value:0.82,
          name:'08/28-09/03'
      },{
          value:0.82,
          name:'08/29-09/04'
      },{
          value:0.82,
          name:'08/30-09/05'
      },{
          value:0.82,
          name:'08/31-09/06',
      }],
      label: {
          color: '#666',
          position: 'outside',
          fontSize: 12
      },
      levels: [{}, {
          label: {
              rotate: 'tangential',
               position: ['60%', '100%']
          }
      }, ]
  }
  ]
};
mychart.setOption(option);
