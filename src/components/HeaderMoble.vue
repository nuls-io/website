<template>
  <div class="m-header">
    <div class="logo" @click="handleSelect(1,['1'])"></div>
    <div class="nav">
      <div class="nav-icon" @click="showNav = !showNav">三</div>
      <el-collapse-transition>
        <div class="nav-list" v-show="showNav">
          <div class="nav-list-top">
            <div class="logo" @click="handleSelect(1,['1'])"></div>
            <i class="el-icon-close" @click="showNav = !showNav"></i>
          </div>
          <el-menu :default-active="activeMenu" :mode="!showNav ? 'horizontal':'vertical'" @select="handleSelect">
            <el-menu-item index="1">{{$t('nav.home')}}</el-menu-item>
            <el-submenu index="2">
              <template slot="title">{{$t('nav.wallet')}}</template>
              <el-menu-item index="2-1">{{$t('nav.wallet1')}}</el-menu-item>
              <el-menu-item index="2-2"><a href="https://wallet.nuls.io/#/" target="_blank">{{$t('nav.wallet2')}}</a>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="3">{{$t('nav.developer')}}</el-menu-item>
            <el-menu-item index="4"><a href="https://nulscan.io/" target="_blank">{{$t('nav.explorer')}}</a></el-menu-item>
            <el-menu-item index="5">{{$t('nav.media')}}</el-menu-item>
            <el-submenu index="6">
              <template slot="title">{{$t('nav.about')}}</template>
              <el-menu-item index="6-5">{{$t('nav.about5')}}</el-menu-item>
              <el-menu-item index="6-6"><a href="https://swap.nuls.io/swap.html" target="_blank">{{$t('nav.about6')}}</a></el-menu-item>
              <el-menu-item index="6-1">{{$t('nav.about1')}}</el-menu-item>
              <el-menu-item index="6-2">{{$t('nav.about2')}}</el-menu-item>
              <el-menu-item index="6-3">{{$t('nav.about3')}}</el-menu-item>
              <el-menu-item index="6-4">{{$t('nav.about4')}}</el-menu-item>
            </el-submenu>
          </el-menu>
          <div class="language" v-show="false">
            <el-select v-model="languageValue" @change="changeLanguage">
              <el-option
                v-for="item in languageOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/base.css';
  // collapse 展开折叠
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
  import Vue from 'vue'
  Vue.component(CollapseTransition.name, CollapseTransition);
  export default {
    data() {
      return {
        activeMenu: sessionStorage.hasOwnProperty('activeMenu') ? sessionStorage.getItem('activeMenu') : '1',
        languageValue: sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') : 'en',
        languageOptions: [{
          value: 'zh',
          label: '简体中文'
        }, {
          value: 'en',
          label: 'English'
        }],
        showNav:false,
      }
    },
    created() {
    },
    mounted() {
      const lang = sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') : 'en';
      this.changeLanguage(lang)
    },
    //离开当前页面后执行
    destroyed() {

    },
    methods: {

      /**
       * 导航栏
       **/
      handleSelect(key, keyPath) {
        sessionStorage.setItem('activeMenu', keyPath[0]);
        //this.activeMenu = keyPath[0];
        if (key === '1') {
          this.$router.push({
            name: 'home',
          })
        } else if (key === '2-1') {
          this.$router.push({
            name: 'walletDownloads',
          })
        } else if (key === '3') {
          this.$router.push({
            name: 'developer',
          })
        } else if (key === '4') {

        } else if (key === '5') {
          this.$router.push({
            name: 'media',
          })
        } else if (key === '6-1') {
          this.$router.push({
            name: 'downloads',
          })
        } else if (key === '6-2') {
          this.$router.push({
            name: 'team',
          })
        } else if (key === '6-3') {
          this.$router.push({
            name: 'partners',
          })
        } else if (key === '6-4') {
          this.$router.push({
            name: 'joinNuls',
          })
        }else if(key === '6-5'){
          this.$router.push({
            name: 'whiteYellow',
          });
        }else {
          this.$router.push({
            name: 'home',
          })
        }
      },

      /**
       * 选择语言
       **/
      changeLanguage(e) {
        sessionStorage.setItem('langs', e);
        this.$i18n.locale = e;
      },
    }
  }
</script>

<style lang="less">
  @import url("./../assets/css/style.less");

  .m-header {
    width: 100%;
    margin: 0 auto;
    padding: 0;
    @media (max-width: 768px) {
      width: 100%;
    }
    .logo {
      width: 170px;
      height: 60px;
      margin: 30px 0 0 0;
      float: left;
      background: url("./../assets/images/nuls-logo-white.png") no-repeat;
      @media (max-width: 768px) {
        background-size: 70%;
        background-position: 30%;
        margin: 0.5rem 0 0 0;
      }
    }
    .nav {
      width: 100%;
      float: left;
      height: 60px;
      @media (max-width: 768px) {
        line-height: 60px;
        margin-right: 50px;
        float: none;
      }
      .nav-icon{
        display: none;
        float: right;
        @media (max-width: 768px) {
          display: block;
          position: absolute;
          right: 20px;
          font-size: 26px;
        }
      }
      .nav-list{
        @media (max-width: 768px) {
          width: 100%;
          position: fixed;
          background-color: #0a2140;
          height: 100%;
          z-index: 999;
        }
        .nav-list-top{
          display: none;
          @media (max-width: 768px) {
            display: block;
          }
          i{
            float: right;
            margin: 20px 20px 0 0;
            font-size: 28px;
          }
        }
        .el-menu {
          background: transparent;
          border: 0;
          padding-top: 40px;
          float: left;
          @media (max-width: 768px) {
            width: 100%;
            position: relative;
            padding: 0;
          }
          .el-menu-item {
            color: #FFFFFF;
            font-size: 18px;
            padding: 0 5px;
            margin: 0 30px;
            height: 40px;
            line-height: 40px;
            @media (max-width: 768px) {
              width: 100%;
              margin: 0;
            }
            &:hover {
              background-color: transparent !important;
              color: #9cbe82;
            }
          }
          .el-submenu {
            @media (max-width: 768px) {
              width: 100%;
              margin: 0;
            }
            &:hover {
              background-color: transparent !important;
            }
            .el-submenu__title {
              padding: 0 5px;
              margin: 0 30px;
              height: 40px;
              line-height: 40px;
              color: #FFFFFF;
              font-size: 18px;
              @media (max-width: 768px) {
                margin: 0;
              }
              &:hover {
                color: #9cbe82;
                background-color: transparent !important;
              }
            }
            .is-active {
              .el-submenu__title {
                border-color: #9cbe82;
              }
            }
          }
          .is-active {
            border-color: #9cbe82;
            color: #9cbe82 !important;
            background-color: transparent !important;
          }
        }
        .language {
          width: 110px;
          margin-top: 45px;
          float: right;
          @media (max-width: 768px) {
            margin: 0;
            float: none;
          }
          .el-select {
            .el-input {
              .el-input__inner {
                height: 30px;
                background-color: transparent;
                border-color: transparent;
                color: #FFFFFF;
              }
              i {
                line-height: 30px;
              }
            }
          }
        }
      }
    }
  }

  .el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
    min-width: 120px;
    text-align: center;
    padding: 0;
    border-radius: 15px;
  }
</style>
