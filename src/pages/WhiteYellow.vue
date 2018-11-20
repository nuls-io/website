<template>
  <div class="whiteYellow">
    <div class="header-bg">
      <HeaderList></HeaderList>
      <h1 class="h1 cb">{{$t('nav.about5')}}?</h1>
    </div>
    <div class="whiteYellow-info">
      <div class="w-one">
        <h5 class="h5">{{$t('whiteYellow.h51')}}</h5>
        <p>{{$t('whiteYellow.p1')}}</p>
      </div>
      <div class="w-two">
        <p>{{$t('whiteYellow.p2')}}</p>
      </div>
      <div class="w-three">
        <h5 class="h5">{{$t('whiteYellow.h53')}}</h5>
        <div class="w-three-left">
          <p>{{$t('whiteYellow.p3')}}</p>
          <el-button type="success" @click="toDownload('white')">{{$t('whiteYellow.download')}}</el-button>
        </div>
        <div class="w-three-right">
          <p>{{$t('whiteYellow.p4')}}</p>
          <el-button type="success" @click="toDownload('Yellow')">{{$t('whiteYellow.download')}}</el-button>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
    <GoTop></GoTop>
  </div>
</template>

<script>
  import HeaderList from '@/components/HeaderList';
  import Bottom from '@/components/Bottom';
  import GoTop from '@/components/GoTop';
  import {tolink} from '@/util/util';

  export default {
    data() {
      return {
        language:sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') ==='zh' ? 1 : 2 : 2,
      }
    },
    components: {
      HeaderList,
      Bottom,
      GoTop,
    },
    mounted() {
      setInterval(() => {
        this.language=sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') ==='zh' ? 1 : 2 : 2
      }, 100);
    },
    methods: {

      /**
       * 下载文件地址
       * @param filelink
       * @param link
       */
      toDownload(link) {
        if(link === 'white'){
          let cnUrl ='https://nuls.io/api/v1/download/files/papers/white/NULS_whitepaper_zh_V1.0.pdf';
          let enUrl ='https://nuls.io/api/v1/download/files/papers/white/NulsWhitepaper1.1.pdf';
          tolink(this.language.toString() ===  '1' ? cnUrl : enUrl);
        }else {
          let cnUrl ='https://nuls.io/api/v1/download/files/papers/white/NULS_whitepaper_zh_V1.0.pdf';
          let enUrl ='https://nuls.io/api/v1/download/files/papers/yellow/NulsYellowpaper1.1.pdf';
          tolink(this.language.toString() ===  '1' ? cnUrl : enUrl);
        }
      },
    }
  }
</script>

<style lang="less">
  @import url("../assets/css/style.less");

  .whiteYellow {
    background-color: #FFFFFF;
    .header-bg {
      background: url("./../assets/images/top_bg.jpg") no-repeat 100% 100%;
      height: 300px;
      @media (max-width: 768px) {
        height: auto;
      }
      h1 {
        line-height: 9rem;
        @media (max-width: 768px) {
          line-height: 0;
        }
      }
    }

    .whiteYellow-info{
      color: #0a2140;
      background: #FFFFFF;
      margin: 50px auto 100px;
      @media (max-width: 768px) {
        margin: 1rem auto;
      }
      h5{
        width: 70%;
        margin: 0 auto;
        padding: 60px 0 40px 0;
        line-height: 40px;
        color: #0a2140;
        @media (max-width: 768px) {
          width: 100%;
          padding: 0.5rem 1rem;
          line-height: 1.8rem;
          text-align: left;
          font-size: 1rem;
        }
      }
      p{
        width: 70%;
        margin: 10px auto;
        font-size: 24px;
        color: #445569;
        line-height: 34px;
        padding: 0 0 100px 0 ;
        @media (max-width: 768px) {
          width: 90%;
          font-size: 0.8rem;
          line-height: 1.4rem;
          padding: 0 0 2rem 0 ;
        }
      }
      .w-one{
        min-height: 100px;
      }
      .w-two{
        background-color: #e9f4f9;
        p{
          padding: 100px 0 100px 0;
          @media (max-width: 768px) {
            font-size: 0.8rem;
            line-height: 1.4rem;
            padding: 2rem 0;
          }
        }
      }
      .w-three{
        min-height: 550px;
        max-width: 1280px;
        margin: 0 auto;
        @media (max-width: 768px) {
          max-width: 100%;
          min-height: 38rem;
        }
        h5{
          max-width: 100%;
        }
        .w-three-left,.w-three-right{
          width: 590px;
          float: left;
          height: 360px;
          text-align: center;
          margin: 20px 0 0 0  ;
          box-shadow: 2px 2px 5px 5px #C1C5C9;
          @media (max-width: 768px) {
            width: 90%;
            margin: 1rem 5%;
            float: none;
            height: auto;
          }
          p{
            width: 90%;
            margin: 0 auto;
            height: 120px;
            padding: 78px 0 80px 0;
            color: #445569;
            font-size: 24px;
            line-height: 34px;
            right: 0;
            @media (max-width: 768px) {
              font-size: 0.8rem;
              line-height: 1.4rem;
              padding: 2rem 0;
              text-align: left;
            }
          }
          .el-button{
            margin: 80px 0 0 0;
            @media (max-width: 768px) {
              margin: 1rem 0 2rem 0;
            }
          }
        }
        .w-three-right{
          float: right;
        }
      }
    }
  }

</style>
