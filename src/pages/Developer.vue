<template>
  <div class="developer">
    <div class="header-bg">
      <HeaderList></HeaderList>
      <h1 class="h1 cb">{{$t('developer.title')}}</h1>
    </div>
    <div class="developer-info">
      <div class="d-top">
        <div class="d-list">
          <p><img src="./../assets/images/Github-1.png"></p>
          <el-button type="success" @click="toUrl('https://github.com/nuls-io')">Github</el-button>
        </div>
        <div class="d-list">
          <p><img src="./../assets/images/Docs.png"></p>
          <el-button type="success" @click="toUrl('http://dev.nuls.io')">Docs</el-button>
        </div>
        <div class="d-list">
          <p><img src="./../assets/images/Tools.png"></p>
          <div class="d-bt">
            <el-button type="success" @click="toUrl('http://dev.nuls.io/contract/IdeaPlugin.html')">IDEA Plugin</el-button>
          </div>
          <div class="d-bts">
            <el-button @click="toUrl('http://dev.nuls.io/docs/sdk.html')">SDK</el-button>
          </div>
        </div>
      </div>
      <div class="d-bottom cb">
        <div class="w1280">
          <h3 class="h3">{{$t('developer.title2')}}</h3>
          <p>{{$t('developer.info')}}</p>
          <div class="d-bts">
            <el-button type="success" @click="toUrl('https://github.com/nuls-io/nuls/releases')">{{$t('developer.bt1')}}
            </el-button>
          </div>
          <div class="d-bts d-bts1">
            <el-button class="btn-lang" @click="toUrl('http://testnet.wallet.nuls.io/#/testNetNULS/testNetNULS')">
              {{$t('developer.bt2')}}
            </el-button>
          </div>
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
    },
    methods: {

      /**
       *  打开新连接
       */
      toUrl(url) {
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
      max-height: 300px;
      @media (max-width: 768px) {
        max-height: 150px;
      }
      h1 {
        line-height: 9rem;
        @media (max-width: 768px) {
          line-height: 4rem;
        }
      }
    }

    .developer-info {
      max-height: 1050px;
      @media (max-width: 768px) {
        max-height: 100%;
      }
      .d-top {
        color: #0b1422;
        width: 1280px;
        margin: 0 auto;
        height: 330px;
        @media (max-width: 768px) {
          width: 100%;
          height: auto;
        }
        .d-list {
          background: #FFFFFF;
          box-shadow: 10px 10px 20px 10px #C1C5C9;
          width: 230px;
          height: 310px;
          margin: 100px 0 120px 192px;
          text-align: center;
          padding: 30px 0 0;
          float: left;
          color: #0b1422;
          &:first-child {
            margin-left: 0;
            @media (max-width: 768px) {
              margin: 2rem 5%;
            }
          }
          @media (max-width: 768px) {
            width: 90%;
            height: auto;
            margin: 2rem 5%;
            padding: 1.5rem 0 0.5rem;
            float: none;
          }
          p {
            color: #0b1422;
            margin-bottom: 1.5rem;
          }
          .el-button--success {
            width: 160px;
            margin-top: 10px;
          }
          .d-bts {
            padding-top: 1rem;
            .el-button--default {
              width: 160px;
            }
          }

        }
      }
      .d-bottom {
        background: url("./../assets/images/developer-bg.png") #e9f4f9 no-repeat right;
        background-size: 25%;
        margin: 20px auto 120px;
        padding: 0;
        max-height: 765px;
        @media (max-width: 768px) {
          max-width: 100%;
          margin: 1rem 0 4rem;
          background: #e9f4f9 no-repeat left;
          padding: 0;
        }
        .w1280 {
          max-width: 1280px;
          margin: 0 auto;
          @media (max-width: 768px) {
            max-width: 90%;
          }
        }
        h3 {
          color: #0b1422;
          font-size: 28px;
          opacity: 0.9;
          padding: 120px 0 60px 0;
          @media (max-width: 768px) {
            margin-left: 0;
            padding: 3rem 0 1.5rem 0;
          }
        }
        p {
          color: #0b1422;
          padding: 0 0 130px 0;
          max-width: 600px;
          margin: 0;
          text-align: left;
          @media (max-width: 768px) {
            width: 90%;
            margin: 0;
            padding: 1.5rem 0.5rem;
          }
        }
        .d-bts {
          max-width: 1280px;
          margin: 0 auto;
          padding-bottom: 30px;
        }
        .d-bts1 {
          padding-bottom: 130px;
          @media (max-width: 768px) {
            padding-bottom: 3rem;
          }
        }
      }
    }

  }

</style>
