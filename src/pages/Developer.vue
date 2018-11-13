<template>
  <div class="developer">
    <div class="header-bg">
      <HeaderList></HeaderList>
      <h1 class="h1 cb">{{$t('developer.title')}}</h1>
    </div>
    <div class="developer-info">
      <div class="d-top">
        <div class="w_1280">
          <div class="w_left fl">
            <img class="img" src="./../assets/images/d-top-bg.png">
          </div>
          <div class="w_right fr">
            <h6 class="h6 font-30">Become one of CCC,make NULS better</h6>
            <p class="font-18 c_green cursor-p" @click="toUrl('')">Click for detaile ></p>
            <p class="font-18 c_green cursor-p" @click="toUrl('')">CCC Handbook Guide (test version) ></p>
            <p class="font-18 c_green cursor-p" @click="toUrl('')">Weekly update ></p>
          </div>
        </div>
      </div>
      <div class="d-center cb">
        <div class="w_1280">
          <h2 class="h2">TITLE</h2>
          <ul class="t_ul">
            <li class="t_li fl">
              <img class="img" src="./../assets/images/Github-1.png">
              <p class="c_green cursor-p" @click="toUrl('https://github.com/nuls-io')">Github ></p>
            </li>
            <li class="t_li fl">
              <img class="img" src="./../assets/images/Docs.png">
              <p class="c_green cursor-p" @click="toUrl('http://dev.nuls.io')">Docs ></p>
            </li>
            <li class="t_li fl">
              <img class="img" src="./../assets/images/Tools.png">
              <p class="c_green cursor-p" @click="toUrl('http://dev.nuls.io/contract/IdeaPlugin.html')">IDEA Plugin
                ></p>
              <p class="c_green cursor-p" @click="toUrl('http://dev.nuls.io/docs/sdk.html')">SDK ></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-bottom cb">
        <div class="w_1280">
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
      background: url("./../assets/images/map-bg.jpg") no-repeat;
      background-size: 100% 100%;
      max-height: 300px;
      @media (max-width: 768px) {
        max-height: 150px;
      }
      h1 {
        line-height: 9rem;
        @media (max-width: 768px) {
          line-height: 0;
        }
      }
    }

    .developer-info {
      max-height: 1200px;
      @media (max-width: 768px) {
        max-height: 100%;
      }
      .d-top {
        height: 300px;
        .w_1280 {
          .w_left {
            .img {
              width: auto;
              height: auto;
              margin-top: 50px;
              @media (max-width: 768px) {
                width: 80%;
                margin: 2rem 0 0 1.8rem;
              }
            }
          }
          .w_right {
            @media (max-width: 768px) {
              margin: 0 0 2rem 0;
            }
            .h6 {
              color: @color_1;
              font-size: 28px;
              line-height: 30px;
              margin: 40px 0 30px 0;
              @media (max-width: 768px) {
                margin: 1rem 0 0.5rem 0;
                font-size: 1.2rem;
                text-align: left;
                padding: 0 0 0 0.5rem;
              }
            }
            .c_green {
              line-height: 36px;
              @media (max-width: 768px) {
                padding: 0 0 0 0.5rem;
              }
            }
          }
        }
      }
      .d-center {
        background-color: #F5F9FF;
        height: 380px;
        @media (max-width: 768px) {
          height: 15rem;
        }
        .w_1280 {
          .h2 {
            margin: 0 auto;
            padding: 40px 0;
          }
          .t_ul {
            .t_li {
              width: 33.333%;
              text-align: center;
              @media (max-width: 768px) {
              }
              .img {
                @media (max-width: 768px) {
                  width: 40%;
                }
              }
              .c_green {
                line-height: 40px;
                @media (max-width: 768px) {
                  font-size: 0.8rem;
                  line-height: 1.5rem;
                }
              }
            }
          }
        }
      }
      .d-bottom {
        background: url("./../assets/images/developer-bg.png") #e9f4f9 no-repeat right;
        background-size: 25%;
        margin: 0 auto 120px;
        padding: 0;
        max-height: 1000px;
        @media (max-width: 768px) {
          max-width: 100%;
          margin: 0 0 4rem;
          background: #e9f4f9 no-repeat left;
          padding: 0;
        }
        .w_1280 {
          @media (max-width: 768px) {
            max-width: 100%;
          }
        }
        h3 {
          color: #0b1422;
          font-size: 28px;
          opacity: 0.9;
          padding: 120px 0 60px 0;
          @media (max-width: 768px) {
            margin-left: 0;
            padding: 2rem 0 0 0;
            text-align: center;
          }
        }
        p {
          color: #0b1422;
          padding: 0 0 130px 0;
          max-width: 600px;
          margin: 0;
          text-align: left;
          @media (max-width: 768px) {
            width: 100%;
            margin: 0;
            padding: 1.5rem 0.5rem;
            line-height: 1.5rem;
          }
        }
        .d-bts {
          max-width: 1280px;
          margin: 0 auto;
          padding-bottom: 30px;
          @media (max-width: 768px) {
            text-align: center;
          }
          .el-button {
            width: 225px;
          }
        }
        .d-bts1 {
          margin-bottom: 130px;
          @media (max-width: 768px) {
            padding-bottom: 3rem;
          }
        }
      }
    }

  }

</style>
