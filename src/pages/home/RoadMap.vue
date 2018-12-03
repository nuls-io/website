<template>
  <div class="roadmap-bg">
    <div class="container">
      <h2 class="h2">{{$t('home.road_title')}}</h2>
      <div class="buttons">
        <div class="buttonParent" @click="setActive('ice')">
          <div class="button" :class="{ isActive: isActive('ice') }">
            {{$t('home.road_tab_title0')}}
          </div>
        </div>
        <div class="buttonParent" @click="setActive('water')">
          <div class="button" :class="{ isActive: isActive('water') }">
            {{$t('home.road_tab_title1')}}
          </div>
        </div>
        <div class="buttonParent" @click="setActive('steam')">
          <div class="button" :class="{ isActive: isActive('steam') }">
            {{$t('home.road_tab_title2')}}
          </div>
        </div>
      </div>
    </div>
    <div class="roadmap">
      <div :class="active" class="line"/>
      <div class="container">
        <swiper v-if="isActive('ice')" :options="swiperOptions" :key="`${slidesPerView}-${active}`">
          <swiper-slide class="swiper-slide-ice">
            <p class="date">{{$t('home.road_tab_ice_1.time')}}</p>
            <div class="triangle"></div>
            <p>{{$t('home.road_tab_ice_1.p0')}}</p>
            <p>{{$t('home.road_tab_ice_1.p1')}}</p>
            <p>{{$t('home.road_tab_ice_1.p2')}}</p>
          </swiper-slide>
          <swiper-slide class="swiper-slide-ice">
            <p class="date">{{$t('home.road_tab_ice_2.time')}}</p>
            <div class="triangle"></div>
            <p>{{$t('home.road_tab_ice_2.p0')}}</p>
            <p>{{$t('home.road_tab_ice_2.p1')}}</p>
            <p>{{$t('home.road_tab_ice_2.p2')}}</p>
            <p>{{$t('home.road_tab_ice_2.p3')}}</p>
            <p>{{$t('home.road_tab_ice_2.p4')}}</p>
          </swiper-slide>
          <swiper-slide class="swiper-slide-ice">
            <p class="date cbuld">{{$t('home.road_tab_ice_3.time')}}</p>
            <div class="triangle active"></div>
            <p class="cbuld">{{$t('home.road_tab_ice_3.p0')}}</p>
            <p class="cbuld">{{$t('home.road_tab_ice_3.p1')}}</p>
            <p class="cbuld">{{$t('home.road_tab_ice_3.p2')}}</p>
            <p class="cbuld">{{$t('home.road_tab_ice_3.p3')}}</p>
          </swiper-slide>
          <swiper-slide class="swiper-slide-ice">
            <p class="date">{{$t('home.road_tab_ice_4.time')}}</p>
            <div class="triangle"></div>
            <p>{{$t('home.road_tab_ice_4.p0')}}</p>
            <p>{{$t('home.road_tab_ice_4.p1')}}</p>
            <p>{{$t('home.road_tab_ice_4.p2')}}</p>
          </swiper-slide>
        </swiper>
        <swiper v-if="isActive('water')" :options="swiperOptions" :key="`${slidesPerView}-${active}`">
          <swiper-slide>
            <div class="triangle"/>
            <p class="bold">{{$t('home.road_tab_water_1.p0')}}</p>
            <p>{{$t('home.road_tab_water_1.p1')}}</p>
            <p>{{$t('home.road_tab_water_1.p2')}}</p>
            <p>{{$t('home.road_tab_water_1.p3')}}</p>
          </swiper-slide>
          <swiper-slide>
            <div class="triangle"/>
            <p class="bold">{{$t('home.road_tab_water_2.p0')}}</p>
            <p>{{$t('home.road_tab_water_2.p1')}}</p>
            <p>{{$t('home.road_tab_water_2.p2')}}</p>
            <p>{{$t('home.road_tab_water_2.p3')}}</p>
            <p>{{$t('home.road_tab_water_2.p4')}}</p>
          </swiper-slide>
          <swiper-slide>
            <div class="triangle"/>
            <p class="bold">{{$t('home.road_tab_water_3.p0')}}</p>
            <p>{{$t('home.road_tab_water_3.p1')}}</p>
            <p>{{$t('home.road_tab_water_3.p2')}}</p>
            <p>{{$t('home.road_tab_water_3.p3')}}</p>
          </swiper-slide>
          <swiper-slide>
            <div class="triangle"/>
            <p class="bold">{{$t('home.road_tab_water_4.p0')}}</p>
            <p>{{$t('home.road_tab_water_4.p1')}}</p>
            <p>{{$t('home.road_tab_water_4.p2')}}</p>
            <p>{{$t('home.road_tab_water_4.p3')}}</p>
            <p>{{$t('home.road_tab_water_4.p4')}}</p>
          </swiper-slide>
          <swiper-slide>
            <div class="triangle"/>
            <p class="bold">{{$t('home.road_tab_water_5.p0')}}</p>
            <p>{{$t('home.road_tab_water_5.p1')}}</p>
            <p>{{$t('home.road_tab_water_5.p2')}}</p>
            <p>{{$t('home.road_tab_water_5.p3')}}</p>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"/>
        </swiper>
        <swiper v-if="isActive('steam')" :options="swiperOptions" :key="`${slidesPerView}-${active}`">
          <swiper-slide>
            <div class="triangle"/>
            <p>{{$t('home.road_tab_steam_1.p0')}}</p>
            <p>{{$t('home.road_tab_steam_1.p1')}}</p>
          </swiper-slide>
          <swiper-slide>
            <div class="triangle"/>
            <p class="bold">{{$t('home.road_tab_steam_2.p0')}}</p>
            <p>{{$t('home.road_tab_steam_2.p1')}}</p>
            <p>{{$t('home.road_tab_steam_2.p2')}}</p>
            <p>{{$t('home.road_tab_steam_2.p3')}}</p>
          </swiper-slide>
          <swiper-slide>
            <div class="triangle"/>
            <p>{{$t('home.road_tab_steam_3.p0')}}</p>
            <p>{{$t('home.road_tab_steam_3.p1')}}</p>
          </swiper-slide>
        </swiper>
      </div>
      .
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css';
  import {swiper, swiperSlide} from 'vue-awesome-swiper';

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        active: 'ice',
        slidesPerView: null,
        windowWidth: window.innerWidth
      };
    },
    mounted() {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth;
      })
    },
    computed: {
      swiperOptions() {
        let slidesPerView = 4;

        if (this.windowWidth < 550) {
          slidesPerView = 1;
        }
        else if (this.windowWidth < 750) {
          slidesPerView = 2;
        }
        else if (this.windowWidth < 1000) {
          slidesPerView = 3;
        }

        if (slidesPerView !== this.slidesPerView || this.slidesPerView === null) {
          this.slidesPerView = slidesPerView;
        }

        return {
          slidesPerView,
          initialSlide: this.active === 'ice' ? 2 : 0,
          spaceBetween: 30,
          grabCursor: true,
          pagination: {
            el: '.swiper-pagination'
          }
        };
      }
    },
    methods: {
      setActive(key) {
        this.active = key;
      },
      isActive(key) {
        return this.active === key;
      }
    }
  }
</script>

<style lang="less">
  .roadmap-bg {
    background-color: #ebf4f9;
    .container {
      .h2 {
        margin: 0 auto;
        padding: 120px 0 80px 0;
      }
    }
  }

  .buttonParent {
    display: inline-block;
  }

  .button.roadmapButton .btn__content {
    font-size: 24px;
    letter-spacing: 1px;
    line-height: 76px;
    padding: 0 43px;
  }

  .roadmap {
    margin: 174px 0 0 0;
  }

  .roadmap .line {
    background: #87e300;
    height: 2px;
    width: 100%;
  }

  .roadmap .container {
    margin: -124px auto 0;
    padding: 0 0 100px 0;
  }

  .roadmap .items {
    display: flex;
  }

  .roadmap .item {
    width: 33%;
    padding: 0 30px;
  }

  .line.ice {
    position: relative;
    top: -42px;
    @media (max-width: 768px) {
      top: -53px;
    }
  }

  .line.water,
  .line.steam {
    position: relative;
    top: -97px;
  }

  p {
    padding: 0;
    margin: 10px 0 0 0;
    font-size: 16px;
    color: #0a2140;
    line-height: 28px;
    @media (max-width: 768px) {
      margin: 0.3rem 0 0 0;
      font-size: 0.8rem;
      line-height: 1.5rem;
    }
  }

  p.bold {
    font-family: SofiaProRegular, sans-serif;
    font-size: 16px;
    color: #0a2140;
    line-height: 28px;
  }

  p.date {
    font-family: SofiaProRegular, sans-serif;
    font-size: 16px;
    color: #445569;
    letter-spacing: -0.53px;
    padding-bottom: 25px;
  }

  .triangle {
    transform: rotate(-315deg);
    background-image: linear-gradient(-180deg, #8fe400 0%, #56c400 100%);
    height: 32px;
    width: 32px;
    margin: 0 0 15px 6px;
  }

  .triangle .active {
    box-shadow: 4px 4px;
    color: #3e8900;
  }

  .cbuld.date, .cbuld.bold, .cbuld {
    color: #56c400;
  }

  .button {
    border-radius: 50px;
    color: #445569;
    font-size: 24px;
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    padding: 0;
    font-weight: bold;
    margin: 0 20px;
  }

  .button.isActive,
  .button:hover {
    cursor: pointer;
    color: #56c400;
    background: #fff;
    box-shadow: 2px 4px 12px 2px #03143712;
  }

  .buttons {
    width: fit-content;
    margin: 0 auto;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .button {
      width: 100px;
      margin: 0 0.5rem;
      font-size: 20px;
    }

    .button:first-child {
      margin: 0 10px 0 0;
    }

    .button:last-child {
      margin: 0 0.2rem 0 0;
    }
  }

  .swiper-pagination {
    bottom: -4px !important;
    padding-bottom: 15px;
  }

  .swiper-slide {
    padding: 10px 1rem 1.5rem;
  }

  .swiper-slide-ice {
    padding: 0 1rem 1.5rem;
  }
</style>
