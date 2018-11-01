<template>
    <div class="map">
      <div id="world-map-markers" style="height: 22rem;">
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import '@/assets/js/jquery-jvectormap-2.0.3.css'
  import '@/assets/js/jquery-jvectormap-2.0.3.min'
  import '@/assets/js/jquery-jvectormap-world-mill-en'
  export default {
    data() {
      return {
        //经纬度Info
        ipObj: [],
      }
    },
    mounted() {
      this.methodsMaps(this.ipObj);
    },
    methods: {

      /**
       * 根据坐标标注位置
       * According to coordinate annotation position
       * @param maps
       * @returns {Promise}
       */
      methodsMaps(maps) {
        setTimeout(() => {
          $('#world-map-markers').vectorMap({
            map: 'world_mill_en',
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            zoomOnScroll: false,
            zoomStep: 1,
            backgroundColor: 'transparent',
            regionStyle: {
              initial: {
                fill: 'none',
                'fill-opacity': 0.5,
                stroke: '#6da6f5',
                'stroke-width': 0.8,
                'stroke-opacity': 0.6
              },
              hover: {
                'fill-opacity': 0.7,
                cursor: 'pointer'
              },
              selected: {
                fill: 'yellow'
              },
              selectedHover: {}
            },
            markerStyle: {
              initial: {
                fill: '#00a65a',
                stroke: '#82bd39',
                r: 3,
              },
              hover: {
                r: 4,
                fill: '#dbf433',
                stroke: '#82bd39',
              }
            },
            //markers: maps,
             markers: [
               {latLng: [30.2936, 120.1614], name: 'Hangzhou 5'},
               {latLng: [34.74, 113.66], name: '河南 - 郑州  2010,2011,2012'},
               {latLng: [39.95, 116.34], name: '北京  2013'},
               {latLng: [38.97, 121.53], name: '辽宁 - 大连  2010-2014'},
               {latLng: [29.88, 121.64], name: '浙江 - 宁波  2014.04'},
               ]
          });
        }, 1000);
      },
    },
  }
</script>

<style lang="less">
.map{
  background: url("./../../assets/images/map-bg.jpg") no-repeat;
  -moz-background-size: 100% 100%;
  background-size: 100% 100%;
  height: 500px;
  padding-top: 80px;
  @media (max-width: 768px) {
    height: 280px;
    background-size: 100% 100%;
    padding: 0;
  }
  .jvectormap-zoomin,.jvectormap-zoomout{
    display: none;
  }
}
</style>
