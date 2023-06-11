<template>
  <div>
    <div id="main" style="width: 100%; height: 300px"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted,inject } from 'vue';
const echarts:any=inject('echarts')
//初始化表格

onMounted(()=>{
  const myChart = echarts.init(document.getElementById("main"));
  // 指定图表的配置项和数据
  const option = {
    tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'cross' }
    },
    legend: {},
    //这里的yAxis就是竖轴，xAxis就是横轴
    // yAxis and xAxis 交换可以改变横向或竖向
    yAxis:{
      
    },
    xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
      ]
    }],
    // 数据的来源
    series:[
      {
        name:'使用次数',
        // bar就是柱状图
        type:'line',
        // 数据
        data:[10,20,30,23,4,45,65,8,2]
      }
    ]
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})

</script>


<style scoped >

</style>