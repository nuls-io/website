<template>
  <div class="mission">
    <div class="spaceship">
      <div class="spaceship-content">
        <h2 class="h2">{{$t('home.nuls_do_title')}}</h2>
        <template v-for="site in 4">
          <div class="font-30 font-bold mission-text">{{$t('home.nuls_do_info'+site)}}</div>
        </template>
        <div class="font-24 color-green mission-href pointer">{{$t('home.nuls_do_info5_more')}}></div>
      </div>
      <div class="img-right"><img src="./../../assets/images/mission-img.png"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mission"
  }
</script>

<style lang="less">
  .mission {
    background-color: #fff;
    text-align: center;
    clear: none;
    .spaceship {
      min-height: 517px;
      padding: 120px 0;
      position: relative;
      .spaceship-content {
        max-width: 1280px;
        margin: 0 auto;
        .h2, .mission-text, .mission-href {
          text-align: left;
        }
        .h2 {
          margin-bottom: 60px;
        }
        .mission-text {
          color: #445569;
          margin-bottom: 5px;
        }
        .mission-href {
          margin-top: 60px;
        }
      }
      .img-right {
        position: absolute;
        top: 80px;
        right: 0;
        @media (max-width: 768px) {
          display: none;
        }
      }
      @media (max-width: 768px) {
        width: auto;
        min-height: 400px;
        padding-top: 20px;
      }

    }
  }
</style>
