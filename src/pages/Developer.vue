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
          <div class="w_right fl">
            <h6 class="h6 font-30">{{$t('developer.title3')}}</h6>
            <!--<p class="font-18 c_green cursor-p" @click="toUrl('https://nuls.community/d/9-invitation-of-community-developers')">{{$t('developer.info1')}} <i class="el-icon-arrow-right"></i></p>-->
            <p class="font-18 c_green cursor-p" @click="languageUrl">{{$t('developer.info1')}} <i class="el-icon-arrow-right"></i></p>
            <p class="font-18 c_green cursor-p" @click="toUrl('https://goo.gl/AhwqhM')">{{$t('developer.info2')}} <i class="el-icon-arrow-right"></i></p>
            <p class="font-18 c_green cursor-p" @click="toUrl('https://nuls.community/t/development')">{{$t('developer.info3')}} <i class="el-icon-arrow-right"></i></p>
          </div>
        </div>
      </div>
      <div class="d-center cb">
        <div class="w_1280">
          <h2 class="h2">{{$t('developer.title4')}}</h2>
          <ul class="t_ul">
            <li class="t_li fl">
              <p class="img shadow"><img src="./../assets/images/Github-1.png"></p>
              <p class="c_green cursor-p" @click="toUrl('https://github.com/nuls-io')">Github <i class="el-icon-arrow-right"></i></p>
            </li>
            <li class="t_li fl">
              <p class="img shadow"><img src="./../assets/images/Docs.png"></p>
              <p class="c_green cursor-p" @click="toUrl('http://dev.nuls.io')">{{$t('developer.docs')}} <i class="el-icon-arrow-right"></i></p>
            </li>
            <li class="t_li fl">
              <p class="img shadow"><img style="margin-top: 17px" src="./../assets/images/Tools.png"></p>
              <p class="c_green cursor-p" @click="toUrl('http://dev.nuls.io/contract/IdeaPlugin.html')">IDEA {{$t('developer.plugin')}}
                <i class="el-icon-arrow-right"></i></p>
              <p class="c_green cursor-p" @click="toUrl('http://dev.nuls.io/docs/sdk.html')">SDK <i class="el-icon-arrow-right"></i></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-bottom cb">
        <div class="w_1280">
          <h2 class="h2">{{$t('developer.title2')}}</h2>
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
    data() {
      return {
      }
    },
    components: {
      HeaderList,
      Bottom,
    },
    methods: {

      /**
       * 根据语言跳转链接
       **/
      languageUrl(){
        let language = sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') : 'en';
        this.toUrl(language ==='en' ? 'https://nuls.community/d/9-invitation-of-community-developers' : 'https://nuls.community/d/90-nuls' )
      },

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
        line-height: 6rem;
        @media (max-width: 768px) {
          line-height: 0;
        }
      }
    }

    .developer-info {
      min-height: 1200px;
      @media (max-width: 768px) {
        min-height: 45rem;
        max-height: 100%;
      }
      .d-top {
        height: 300px;
        .w_1280 {
          .w_left {
            .img {
              width: 418px;
              height: 168px;
              margin-top: 120px;
              @media (max-width: 768px) {
                width: 90%;
                height: auto;
                margin: 2rem 0 0 1rem;
              }
            }
          }
          .w_right {
            margin: 0 0 100px 96px;
            @media (max-width: 768px) {
              margin: 0 0 2rem 0;
            }
            .h6 {
              color: #0a2140;
              font-size: 24px;
              margin: 120px 0 30px 0;
              @media (max-width: 768px) {
                margin: 1rem 0 0.5rem 0;
                font-size: 1.2rem;
                text-align: left;
                padding: 0 0 0 0.5rem;
              }
            }
            .c_green {
              line-height: normal;
              padding: 0 0 20px 0;
              @media (max-width: 768px) {
                padding: 0 0 0.5rem 0.5rem;
              }
            }
          }
        }
      }
      .d-center {
        background-color: #F5F9FF;
        height: 545px;
        @media (max-width: 768px) {
          height: 15rem;
        }
        .w_1280 {
          .h2 {
            margin: 0 auto;
            padding: 114px 0 80px;
            @media (max-width: 768px) {
              padding: 1rem 0 1rem;
            }
          }
          .t_ul {
            width: 1000px;
            min-height: 100px;
            margin: 0 auto;
            @media (max-width: 768px) {
              width: 100%;
            }
            .t_li {
              width: 33.333%;
              text-align: center;
              @media (max-width: 768px) {
              }
              .img {
                background-color: #ffffff;
                height: 92px;
                width: 92px;
                border-radius: 92px;
                text-align: center;
                margin: 0 0 32px 120px;
                @media (max-width: 768px) {
                  margin: 0 0 0.5rem 0.5rem;
                }
                img {
                  margin: 15px 0 0 0;
                  width: auto;
                }
              }
              .c_green {
                line-height: 18px;
                margin-bottom: 10px;
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
        background: url("./../assets/images/developer-bg.png") #ffffff no-repeat right;
        background-size: 25%;
        margin: 0 auto 0;
        padding: 0;
        height: 640px;
        @media (max-width: 768px) {
          height: 25rem;
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
        .h2 {
          color: #0a2140;
          font-size: 28px;
          opacity: 0.9;
          padding: 120px 0 50px 0;
          margin: 0 auto;
          text-align: left;
          @media (max-width: 768px) {
            margin: 0 auto;
            padding: 2rem 0 0 0;
            text-align: center;
          }
        }
        p {
          color: @color_1;
          padding: 0 0 60px 0;
          max-width: 600px;
          line-height: 40px;
          font-size: 24px;
          margin: 0;
          text-align: left;
          @media (max-width: 768px) {
            width: 100%;
            margin: 0;
            font-size: 1.2rem;
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
          .btn-lang{
            background: transparent;
            span{
              color: #59a500;
            }
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
