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
        <h5 class="h5">{{$t('whiteYellow.h52')}}</h5>
        <p>{{$t('whiteYellow.p2')}}</p>
      </div>
      <div class="w-three">
        <h5 class="h5">{{$t('whiteYellow.h53')}}</h5>
        <div class="w-three-left">
          <p>{{$t('whiteYellow.p3')}}</p>
          <el-button type="success">{{$t('whiteYellow.download')}}</el-button>
        </div>
        <div class="w-three-right">
          <p>{{$t('whiteYellow.p4')}}</p>
          <el-button type="success">{{$t('whiteYellow.download')}}</el-button>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import HeaderList from '@/components/HeaderList';
  import Bottom from '@/components/Bottom';

  export default {
    components: {
      HeaderList,
      Bottom,
    }
  }
</script>

<style lang="less">
  @import url("../assets/css/style.less");

  .whiteYellow {
    background-color: #FFFFFF;
    .header-bg {
      background: url("./../assets/images/top_bg.png") no-repeat 100% 100%;
      height: 300px;
      @media (max-width: 768px) {
        height: auto;
      }
      h1 {
       padding: 30px 0 0 0;
        @media (max-width: 768px) {
          padding: 1.8rem 0 2.6rem 0;
        }
      }
    }

    .whiteYellow-info{
      color: #0a2140;
      background: #FFFFFF;
      min-height: 500px;
      margin: 50px auto 100px;
      h5{
        width: 70%;
        margin: 0 auto;
        padding: 120px 0 60px 0;
        color: #0a2140;
        @media (max-width: 768px) {
          width: 90%;
          padding: 30px 0 30px 0;
        }
      }
      p{
        width: 70%;
        margin: 10px auto;
        font-size: 30px;
        color: #445569;
        line-height: 48px;
        padding: 0 0 100px 0 ;
        @media (max-width: 768px) {
          width: 90%;
          font-size: 1.2rem;
          line-height: 1.4rem;
          padding: 0 0 2rem 0 ;
        }
      }
      .w-one{
        min-height: 100px;
      }
      .w-two{
        background-color: #e9f4f9;
      }
      .w-three{
        min-height: 680px;
        max-width: 1280px;
        margin: 0 auto;
        @media (max-width: 768px) {
          max-width: 100%;
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
          box-shadow:2px 2px 5px #333333;
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
            line-height: 36px;
            right: 0;
            @media (max-width: 768px) {
              padding: 1.2rem 0 1.2rem 0;
              font-size: 1.4rem;
              line-height: 1.8rem;
              text-align: left;
            }
          }
          .el-button{
            margin: 80px 0 0 0;
            @media (max-width: 768px) {
              margin: 4rem 0 2rem 0;
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
