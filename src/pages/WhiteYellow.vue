<template>
  <div class="whiteYellow">
    <div class="header-bg">
      <Header></Header>
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
  import Header from '@/components/Header';
  import Bottom from '@/components/Bottom';

  export default {
    components: {
      Header,
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
      h1 {
        line-height: 9rem;
      }
    }

    .whiteYellow-info{
      color: #0a2140;
      background: #FFFFFF;
      min-height: 500px;
      margin: 50px auto 100px;
      h5{
        width: 60%;
        margin: 30px auto 0;
        padding: 20px 0 0 0;

      }
      p{
        width: 70%;
        margin: 10px auto;
        font-size: 18px;
        color: #0b1422;
        line-height: 30px;
        padding: 0 0 50px 0 ;
      }
      .w-one{

      }
      .w-two{
        background-color: #e9f4f9;
      }
      .w-three{
        min-height: 330px;
        width: 750px;
        margin: 0 auto;
        h5{
          width: 100%;
        }
        .w-three-left,.w-three-right{
          width: 350px;
          float: left;
          height: 220px;
          text-align: center;
          margin: 20px 11.5px 0  ;
          box-shadow:2px 2px 5px #333333;
          p{
            width: 90%;
            margin: 0 auto;
            height: 120px;
            padding: 20px 0 0 0;
            right: 0;
          }
          .el-button{
            margin: 20px 0;
          }
        }

      }
    }

  }

</style>
