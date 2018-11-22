<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <Mission></Mission>
    <div class="cubes">
      <img src="./../assets/images/cube.svg">
    </div>
    <Architecture></Architecture>
    <Ecosystem></Ecosystem>
    <Wallet></Wallet>
    <Map></Map>
    <RoadMap></RoadMap>
    <GoTop></GoTop>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import HomeHeader from '@/pages/home/HomeHeader';
  import Mission from '@/pages/home/Mission';
  import Architecture from '@/pages/home/Architecture';
  import Ecosystem from '@/pages/home/Ecosystem';
  import Wallet from '@/pages/home/Wallet';
  import Map from '@/pages/home/Map';
  import RoadMap from '@/pages/home/RoadMap';
  import Bottom from '@/components/Bottom';
  import GoTop from '@/components/GoTop';

  export default {
    data() {
      return {}
    },
    components: {
      HomeHeader,
      Mission,
      Bottom,
      Architecture,
      Ecosystem,
      Wallet,
      /*Map,*/
      RoadMap,
      GoTop,
    },
    mounted() {

    },
    methods: {}

  }
</script>

<style lang="less" type="text/less">
  @import url("./../assets/css/style.less");

  .home {
    background-color: #FFFFFF;
    .cubes {
      max-width: 1280px;
      margin: 0 0 0 60%;
      height: 1px;
      z-index: 2;
      position: absolute;
      @media (max-width: 768px){
        margin: 0 0 0 10%;
      }
      img {
        width: 200px;
        right: 10%;
        float: right;
        margin: -65px -300px 0 0;
      }

    }
  }
</style>
