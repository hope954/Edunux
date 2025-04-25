<template>
  <div>
    <!-- 定义一个容器用于显示中国地图 -->
    <div id="china-map" style="width: 800px;height:600px;">
      
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
// 按需引入中国地图数据
import chinaJson from 'echarts/map/json/china.json';
// 注册中国地图
echarts.registerMap('china', chinaJson);
//5版本之后没有map文件，此时会出错，单独安装map或只在地图处使用4的版本即可解决该问题
export default {
  name: 'ChinaMapDemo',
  mounted() {
    // 模拟不同地区的问卷数量数据
    const data = [
      { name: '东北', value: 6  },
      { name: '吉林', value: 6 },
      { name: '黑龙江', value: 6 },
      { name: '河北', value: 30 },
      { name: '北京', value: 10 },
      { name: '天津', value: 5 },
      { name: '山西', value: 15 },
      { name: '内蒙古', value: 1 },
      // 可以继续添加更多地区的数据
    ];

    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('china-map'));

    // 指定图表的配置项和数据
    const option = {
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        min: 0,
        max: 50,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
        inRange: {
                    color: ['#e0f7fa', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6']
                }
      },
      series: [
        {
          name: '问卷数量',
          type: 'map',
          map: 'china',
          label: {
            show: true
          },
          data: data,
          itemStyle: {
                        normal: {
                            areaColor: '#e0f7fa',
                            borderColor: '#b3e5fc',
                            borderWidth: 1
                        },
                        emphasis: {
                            areaColor: '#4fc3f7',
                            borderColor: '#29b6f6',
                            borderWidth: 2
                        }
                    }
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
};
</script>    