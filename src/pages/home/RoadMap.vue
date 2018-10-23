<template>
  <div class="roadMap">
    <h2 class="h2">{{$t('home.road_title')}}</h2>

    <div class="roadMap-info">
      <el-tabs  v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="$t('home.road_tab_title0')" name="ice">
         <div class="line"></div>
          <div class="swiper-wrapper flex">
            <div class="swiper-slide">
              <p class="date">{{$t('home.road_tab_ice_1.time')}}</p>
              <div class="triangle"></div>
              <p class="bold">{{$t('home.road_tab_ice_1.p0')}}</p>
              <p>{{$t('home.road_tab_ice_1.p1')}}</p>
              <p class="bold">{{$t('home.road_tab_ice_1.p2')}}</p>
            </div>
            <div class="swiper-slide">
              <p class="date">{{$t('home.road_tab_ice_2.time')}}</p>
              <div class="triangle"></div>
              <p class="bold">{{$t('home.road_tab_ice_2.p0')}}</p>
              <p>{{$t('home.road_tab_ice_2.p1')}}</p>
              <p class="bold">{{$t('home.road_tab_ice_2.p2')}}</p>
              <p class="bold">{{$t('home.road_tab_ice_2.p3')}}</p>
              <p class="bold">{{$t('home.road_tab_ice_2.p4')}}</p>
            </div>
            <div class="swiper-slide">
              <p class="date">{{$t('home.road_tab_ice_3.time')}}</p>
              <div class="triangle"></div>
              <p class="bold">{{$t('home.road_tab_ice_3.p0')}}</p>
              <p class="bold">{{$t('home.road_tab_ice_3.p1')}}</p>
              <p class="bold">{{$t('home.road_tab_ice_3.p2')}}</p>
              <p>{{$t('home.road_tab_ice_3.p3')}}</p>
            </div>
            <div class="swiper-slide">
              <p class="date">{{$t('home.road_tab_ice_4.time')}}</p>
              <div class="triangle"></div>
              <p class="bold">{{$t('home.road_tab_ice_4.p0')}}</p>
              <p>{{$t('home.road_tab_ice_4.p1')}}</p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="$t('home.road_tab_title1')" name="water">
          <div class="line lines"></div>
          <div class="swiper-wrapper flex">
            <div class="swiper-slide">
              <div class="triangle"></div>
              <p class="bold">{{$t('home.road_tab_water_1.p0')}}</p>
              <p>{{$t('home.road_tab_water_1.p1')}}</p>
              <p>{{$t('home.road_tab_water_1.p2')}}</p>
              <p>{{$t('home.road_tab_water_1.p3')}}</p>
              <p>{{$t('home.road_tab_water_1.p4')}}</p>
            </div>
            <div class="swiper-slide">
              <div class="triangle"></div>
              <p>{{$t('home.road_tab_water_2.p0')}}</p>
              <p>{{$t('home.road_tab_water_2.p1')}}</p>
              <p>{{$t('home.road_tab_water_2.p2')}}</p>
              <p>{{$t('home.road_tab_water_2.p3')}}</p>
            </div>
            <div class="swiper-slide">
              <div class="triangle"></div>
              <p class="bold">{{$t('home.road_tab_water_3.p0')}}</p>
              <p>{{$t('home.road_tab_water_3.p1')}}</p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="$t('home.road_tab_title2')" name="steam">
          <div class="line lines"></div>
          <div class="swiper-wrapper flex">
            <div class="swiper-slide">
              <div class="triangle"></div>
              <p>{{$t('home.road_tab_steam_1.p0')}}</p>
              <p>{{$t('home.road_tab_steam_1.p1')}}</p>
            </div>
            <div class="swiper-slide">
              <div class="triangle"></div>
              <p class="bold">Main-net test</p>
              <p>{{$t('home.road_tab_steam_2.p0')}}</p>
              <p>{{$t('home.road_tab_steam_2.p1')}}</p>
              <p>{{$t('home.road_tab_steam_2.p2')}}</p>
            </div>
            <div class="swiper-slide">
              <div class="triangle"></div>
              <p>{{$t('home.road_tab_steam_3.p0')}}</p>
              <p>{{$t('home.road_tab_steam_3.p1')}}</p>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'ice'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .roadMap {
    background: #FFFFFF;
    padding:120px 0 120px;
    h2 {
      color: #0a2140;
    }
    .el-tabs {
      .el-tabs__heade{
        .el-tabs__nav-scroll{
          .el-tabs__nav{
            width: 1280px;
            margin: 0 auto;
          }
        }
      }
      .nav-tabs {
        border-bottom: 0;
        width: 50%;
        height: auto;
        margin: 0 auto;
        text-align: center;
        .nav-item {
          width: 150px;
          height: 30px;
          line-height: 30px;
          margin: 0 30px;
          .nav-link {
            border-radius: 50px;
            color: #70d300;
            background-color: #fff;
          }
          .active {
            -moz-box-shadow: 2px 2px 5px #dee2e6;
            -webkit-box-shadow: 2px 2px 5px #dee2e6;
            box-shadow: 2px 2px 5px #dee2e6;
          }
        }

      }
    }
    .roadMap-info {
      margin-top: 30px;
      .el-tabs {
        .el-tabs__header{
          .el-tabs__nav-wrap{
            &:after{
              background-color: transparent;
            }
            .el-tabs__nav-scroll{
              width: 650px;
              margin: 0 auto;
              text-align: center;
              @media (max-width: 768px) {
                width: 100%;
              }
              .el-tabs__nav{
                padding-top:10px;
                padding-bottom:10px;
                .el-tabs__item{
                  border-radius: 50px;
                  color: #445569;
                  font-size: 24px;
                  width: 150px;
                  height:50px;
                  line-height: 50px;
                  text-align: center;
                  margin: 0 30px;
                  padding: 0;
                  font-weight: bold;
                  @media (max-width: 768px) {
                    width: 100px;
                    margin: 0 10px;
                  }
                  &:hover{
                    color:#56c400;
                    background: #fff;
                    box-shadow: 0 3px 9px rgba(0,0,0,0.2);
                  }
                  &:first-child{
                    margin: 0 0 0 200px;
                  }
                }
                .is-active{
                  color:#56c400;
                  background: #fff;
                  box-shadow: 0 3px 9px rgba(0,0,0,0.2);
                }
                .el-tabs__active-bar{
                 background-color: transparent;
                }
              }
            }
          }
          .el-tabs__content{
            margin: 30px 0 0 0;
          }

        }
        .el-tabs__content{
        }
      }
      .line {
        background: #87e300;
        height: 2px;
        width: 100%;
        position: absolute;
        margin-top: 73px;
      }
      .lines{
        margin-top: 16px;
      }
      .swiper-wrapper {
        max-width: 1280px;
        margin: 50px auto 0;
        justify-content: space-around;
        .swiper-slide {
          flex:1;
          height: 100%;
          position: relative;
          margin-right: 30px;
          &:hover{
            p{
              color:#56c400;
            }
            .triangle{
              box-shadow: 3px 3px 4px #3e8900;
            }
          }
          .date{
            font-size: 16px;
            color: #445569;
            letter-spacing: -.53px;
            padding-bottom: 25px;
          }
          .triangle {
            -webkit-transform: rotate(-315deg);
            -ms-transform: rotate(-315deg);
            transform: rotate(-315deg);
            background-image: -webkit-gradient(linear,left top,left bottom,from(#8fe400),to(#56c400));
            background-image: linear-gradient(-180deg,#8fe400,#56c400);
            height: 32px;
            width: 32px;
            margin: 0 0 35px 6px;
          }
          p {
            color: #445569;
            margin-bottom: 16px;
            font-size: 18px;
            letter-spacing: -.41px;
            line-height: 22px;
          }
        }

      }
    }
  }

</style>
