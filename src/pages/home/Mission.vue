<template>
  <div class="mission">
    <div class="spaceship">
      <div class="spaceship-content">
        <h2 class="h2">{{$t('home.nuls_do_title')}}</h2>
        <template v-for="site in 4">
          <div class="font-30 font-bold mission-text">{{$t('home.nuls_do_info'+site)}}</div>
        </template>
        <div class="font-24 color-green mission-href pointer" @click="toAbout">{{$t('home.nuls_do_info5_more')}}></div>
      </div>
      <div class="img-right"><img src="./../../assets/images/mission-img.png"></div>
    </div>
  </div>
</template>

<script>
  export default {
   methods:{
     toAbout(){
       this.$router.push({
         name: 'whiteYellow',
       });
     },
   },
  }
</script>

<style lang="less">
  .mission {
    background-color: #fff;
    text-align: center;
    clear: none;
    .spaceship {
      min-height: 517px;
      padding: 20px 0;
      position: relative;
      @media (max-width: 768px){

      }
      .spaceship-content {
        max-width: 1280px;
        margin: 0 auto;
        .h2, .mission-text, .mission-href {
          text-align: left;
        }
        .h2 {
          margin-bottom: 60px;
          @media (max-width: 768px){
            text-align: center;
            margin-bottom: 20px;
          }
        }
        .mission-text {
          color: #445569;
          margin-bottom: 5px;
          @media (max-width: 768px){
            margin-bottom: 8px;
            text-align: center;
          }

        }
        .mission-href {
          margin-top: 60px;
          @media (max-width: 768px){
            margin-top: 40px;
          }
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
        min-height: auto;
        padding-top: 20px;
      }

    }
  }
</style>
