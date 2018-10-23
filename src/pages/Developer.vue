<template>
  <div class="developer">
    <div class="header-bg">
      <Header></Header>
      <h1 class="h1 cb">{{$t('developer.title')}}</h1>
    </div>
    <div class="developer-info">
      <div class="d-top">
        <div class="d-list">
          <p><img src="./../assets/images/Github-1.png"></p>
          <el-button type="success">Github</el-button>
        </div>
        <div class="d-list">
          <p><img src="./../assets/images/Docs.png"></p>
          <el-button type="success">Docs</el-button>
        </div>
        <div class="d-list">
          <p><img src="./../assets/images/Tools.png"></p>
          <div class="d-bt">
            <el-button type="success">IDEA Plugin</el-button>
          </div>
          <div class="d-bts">
            <el-button>SDK</el-button>
          </div>
        </div>
      </div>
      <div class="d-bottom cb">
        <h3 class="h3">{{$t('developer.title2')}}</h3>
        <p>{{$t('developer.info')}}</p>
        <div class="d-bts">
          <el-button type="success" @click="toUrl('https://github.com/nuls-io/nuls/releases')" >{{$t('developer.bt1')}}</el-button>
        </div>
        <div class="d-bts">
          <el-button class="btn-lang" @click="toUrl('http://testnet.wallet.nuls.io/#/testNetNULS/testNetNULS')">{{$t('developer.bt2')}}</el-button>
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
    },
    methods: {

      /**
       *  打开新连接
       */
      toUrl(url){
        window.open(url);
      }
    }
  }
</script>

<style lang="less">
  @import url("../assets/css/style.less");

  .developer {
    background-color: #FFFFFF;
    .header-bg {
      background: url("./../assets/images/map-bg.png") no-repeat;
      background-size: 100% 100%;
      height: 300px;
      h1 {
        line-height: 9rem;
      }
    }

    .developer-info {
      max-height: 1050px;
      @media (max-width: 768px) {
        height: 70rem;
      }
      .d-top {
        color: #0b1422;
        width: 1280px;
        margin: 0 auto;
        height: 330px;
        @media (max-width: 768px) {
          height: 650px;
        }
        .d-list {
          background: #FFFFFF;
          box-shadow: 10px 10px 20px 10px #C1C5C9;
          width: 230px;
          height: 310px;
          margin: 2rem 3rem;
          text-align: center;
          padding: 30px 0 0;
          float: left;
          color: #0b1422;
          &:first-child {
            margin-left: 15%;
          }
          @media (max-width: 768px) {
            width: 180px;
            height: 180px;
            margin: 2rem 6rem;
            padding: 30px 0 0;
            float: none;
          }
          p {
            color: #0b1422;
            margin-bottom: 1.5rem;
          }
          .el-button--success {
            width: 160px;
          }
          .d-bts{
            padding-top: 1rem;
            .el-button--default{
              width: 160px;
            }
          }

        }
      }
      .d-bottom {
        background: url("./../assets/images/developer-bg.png") #e9f4f9 no-repeat right;
        background-size: 25%;
        margin: 20px auto 50px;
        padding: 0 0 50px 30px;
        max-height: 765px;
        @media (max-width: 768px) {
          max-width: 335px;
          margin: 20px 0 0 20px;
        }
        h3 {
          color: #0b1422;
          font-size: 28px;
          font-weight: 700;
          opacity: 0.9;
          padding: 50px 0 0 10px;
          margin-left: 20%;
        }
        p {
          color: #0b1422;
          padding: 30px 10px;
          width: 500px;
          margin: 0 0 5% 20%;
        }
        .d-bts {
          margin-left: 20%;
          padding-bottom: 1rem;
        }
      }
    }

  }

</style>
