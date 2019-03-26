<template>
  <div class="m-header">
    <div class="logo" @click="handleSelect(1,['1'])"></div>
    <div class="nav">
      <div class="nav-icon" @click="showNav = !showNav">三</div>
      <el-collapse-transition>
        <div class="nav-list" v-show="showNav">
          <div class="nav-list-top">
            <div class="logo" @click="handleSelect(1,['home'])"></div>
            <i class="el-icon-close" @click="showNav = !showNav"></i>
          </div>
          <el-menu :default-active="activeMenu" :mode="!showNav ? 'horizontal':'vertical'" @select="handleSelect">
            <!--<el-menu-item index="home">{{$t('nav.home')}}</el-menu-item>-->
            <el-menu-item index="prodcuts">{{$t('products.product')}}</el-menu-item>
            <el-menu-item index="wallet">{{$t('nav.wallet')}}</el-menu-item>
            <el-menu-item index="developer">{{$t('nav.developer')}}</el-menu-item>
            <el-menu-item index="commnunity">{{$t('nav.about7')}}</el-menu-item>
            <el-menu-item index="media">{{$t('nav.media')}}</el-menu-item>
            <el-menu-item index="4"><a href="http://docs.nuls.io/" target="_blank">{{$t('nav.about8')}}</a></el-menu-item>
            <el-submenu index="6">
              <template slot="title">{{$t('nav.about')}}</template>
              <el-menu-item index="6-5">{{$t('nav.about5')}}</el-menu-item>
              <el-menu-item index="6-7">{{$t('nav.about1')}}</el-menu-item>
              <el-menu-item index="6-6"><a :href="this.languageValue.toString() === 'en' ? 'https://swap.nuls.io/swap.html' : 'https://swap.nuls.io/swap-zh.html'" target="_blank">{{$t('nav.about6')}}</a></el-menu-item>
              <el-menu-item index="6-1"><a href="https://nulscan.io/" target="_blank">{{$t('nav.explorer')}}</a></el-menu-item>
              <el-menu-item index="6-2">{{$t('nav.about2')}}</el-menu-item>
              <el-menu-item index="6-3">{{$t('nav.about3')}}</el-menu-item>
              <el-menu-item index="6-4">{{$t('nav.about4')}}</el-menu-item>
            </el-submenu>
          </el-menu>
          <div class="language">
            <el-select v-model="languageValue" @change="changeLanguage">
              <el-option
                v-for="item in languageOptions"
                :key="item.id"
                :label="item.desc"
                :value="item.name">
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
  import Vue from 'vue';
  import {getLanguagelist} from '@/api/httpData';
  Vue.component(CollapseTransition.name, CollapseTransition);
  export default {
    data() {
      return {
        activeMenu: sessionStorage.hasOwnProperty('activeMenu') ? sessionStorage.getItem('activeMenu') : '1',
        languageValue: sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') : 'en',
        languageOptions: [],
        showNav:false,
      }
    },
    created() {
    },
    mounted() {
      const lang = sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') : 'en';
      this.changeLanguage(lang);
      this.getLanguagelist();
      setInterval(() => {
        this.activeMenu = this.$route.path;
      }, 300);
    },
    watch: {
      activeMenu: function (val) {
        if (val === '/newWallet') {
          this.activeMenu = 'wallet';
        }else if(val ==='/developer'){
          this.activeMenu = 'developer';
        }else{

        }
        //console.log('new: %s, old: %s', val, oldVal);
      }
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
        if (key === 'home') {
          this.$router.push({
            name: 'home',
          })
        }else if (key === 'wallet') {
          this.$router.push({
            name: 'wallet',
          })
        } else if (key === 'developer') {
          this.$router.push({
            name: 'developer',
          })
        } /*else if (key === '4') {
          this.$router.push({
            name: 'downloads',
          })
        }*/ else if (key === 'media') {
          this.$router.push({
            name: 'media',
          })
        } /*else if (key === '6-1') {
          this.$router.push({
            name: 'downloads',
          })
        }*/ else if (key === '6-2') {
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
        }else if(key ==='6-7'){
          this.$router.push({
            name: 'downloads',
          });
        } else if(key === 'commnunity'){
          this.$router.push({
            name: 'commnunity',
          });
        }else if(key === 'prodcuts'){
          this.$router.push({
            name: 'prodcuts',
          });
        }else {
          this.$router.push({
            name: 'home',
          })
        }
      },

      /**
       * 获取语言列表 Get languages list
       **/
      getLanguagelist(){
        let that = this;
        getLanguagelist()
          .then(function (response) {
            //console.log(response);
            that.languageOptions = response.data.siteList;
          })
          .catch(function (error) {
            console.log(error);
          });
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
        background-size: 50%;
        background-position: 30%;
        margin: 0 0 0 0;
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
          font-size: 1.2rem;
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
          z-index: 888;
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
            a{
              color: #ffffff;
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

/*  .el-select-dropdown{
    background-color: transparent;
    border: 1px solid #c1c1c1;
  }*/
</style>
