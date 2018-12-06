<template>
  <div class="wallet">
    <div class="wallet-bg">
      <div class="pc-bg">
        <div class="iphone-bg">
          <div class="w-right">
            <div class="cube1">
              <img src="./../../assets/images/cube.svg">
            </div>
            <div class="cube2">
              <img src="./../../assets/images/cube.svg">
            </div>
            <div class="cube3">
              <img src="./../../assets/images/cube.svg">
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-row :gutter="0" class="w-info">
      <el-col :xs="24" :sm="12" class="w-left">
        <h2 class="h2">{{$t('home.wallet_title')}}</h2>
        <p>{{$t('home.wallet_info')}}</p>
        <div class="w-bt">
          <el-button type="success" @click="toName" class="toWallet">
            {{$t('home.wallet_list_title')}}
          </el-button>
          <div class="btn-box" v-show="false">
            <el-button @click="tolink('https://wallet.nuls.io')"><span>{{$t('home.wallet_online')}}</span><i
              class="el-icon-arrow-right"></i></el-button>
          </div>
        </div>

      </el-col>
    </el-row>

  </div>

</template>

<script>
  export default {
    data() {
      return {
      }
    },
    mounted() {
    },
    methods: {
      toName(){
        sessionStorage.setItem('activeMenu','2');
        this.$router.push({
          name: 'wallet',
        })
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .el-dropdown-menu {
    margin: 0 0;
    padding: 0;
    .el-dropdown-menu__item {
      line-height: 52px;
      height: 52px;
      padding: 0 10px;
      border-bottom: 1px solid #e4e7ed;
      &:last-child{
        border: 0 solid #445569;
      }
    }
  }

  .wallet {
    max-width: 100%;
    min-height: 800px;
    margin: 0 auto;
    @media (max-width: 768px) {
      min-height: auto;
    }
    .wallet-bg {
      width: 100%;
      min-height: 600px;
      background-color: #ffffff;
      z-index: 1;
      position: absolute;
      @media (max-width: 768px) {
        display: none;
        min-width: 360px;
        min-height: 435px;
      }
      .pc-bg {
        max-width: 100%;
        height: 800px;
        background: url("./../../assets/images/pc.png") no-repeat 160% 40%;
        background-size: 70% 70%;
        z-index: 2;
        .iphone-bg {
          max-width: 100%;
          height: 800px;
          background-size: 70% 70%;
          background: url("./../../assets/images/iphone.png") no-repeat 100% 65%;
          .w-right {
            width: 50%;
            right: 0;
            top: 50%;
            position: absolute;
            .cube1, .cube2, .cube3 {
              height: 1px;
              z-index: 77;
              margin: -40% 0 0 35%;
              position: absolute;
              img {
                width: 200px;
                right: 0;
                margin: -10px 0 0 0;
              }
            }
            .cube2 {
              z-index: 8;
              height: 50px;
              width: 200px;
              margin: -8% -5% 0 0;
              right: 50px;
              position: absolute;
              img {
              }
            }
            .cube3 {
              z-index: 8;
              height: 50px;
              width: 200px;
              margin: 20% 55% 0;
              right: 50px;
              position: absolute;
              img {
              }
            }
          }
        }
      }
    }
    .w-info {
      max-width: 1280px;
      margin: 0 auto;
      background: transparent;
      z-index: 2;
      position: relative;
      @media (max-width: 768px) {
        margin: 0 auto 5rem;
      }
      .w-left {
        h2 {
          color: #0a2140;
          margin: 120px 0 60px;
          text-align: left;
          @media (max-width: 768px) {
            margin: 0 auto 3rem;
            text-align: center;
          }
        }
        p {
          color: #445569;
          font-size: 24px;
          line-height: 40px;
          width: 500px;
          text-align: left;
          @media (max-width: 768px) {
            width: 90%;
            padding: 0 5%;
          }
        }
        .w-bt {
          max-width: 550px;
          @media (max-width: 768px) {
            max-width: 360px;
            margin: 4rem 0 0 0;
          }
          .toWallet{
            margin: 50px 0 0 0;
            @media (max-width: 768px) {
              margin: 2rem 0 0 0;
            }
          }

          .btn-box {
            width: 200px;
            margin: 60px 0 0 50px;
            float: left;
            @media (max-width: 768px) {
              float: none;
              width: 12rem;
              margin: 0 auto 2rem;
            }
            .el-button {
              border-color: #59a500;
              background-color: transparent;
              color: #59a500;
              @media (max-width: 768px) {
                max-width: 12rem;
              }
              .el-icon-arrow-right {
                padding-left: 10px;
                @media (max-width: 768px) {
                  padding-left: 0;
                }
              }
            }
          }
        }
      }
    }
  }

</style>
