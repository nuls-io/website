<template>
  <div class="header">
    <div @click="handleSelect(1,['1'])" class="logo fl cursor-p"></div>
    <el-menu class="fl" :default-active="activeMenu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">{{$t('nav.home')}}</el-menu-item>
      <el-menu-item index="8">{{$t('products.product')}}</el-menu-item>
      <el-menu-item index="2">{{$t('nav.wallet')}}</el-menu-item>
      <el-menu-item index="3">{{$t('nav.developer')}}</el-menu-item>
      <el-menu-item index="7">{{$t('nav.about7')}}</el-menu-item>
      <el-menu-item index="5">{{$t('nav.media')}}</el-menu-item>
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
    <div class="language fr">
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
</template>

<script>
  import {getLanguagelist} from '@/api/httpData'
  export default {
    data() {
      return {
        activeMenu: sessionStorage.hasOwnProperty('activeMenu') ? sessionStorage.getItem('activeMenu') : '1',
        languageValue: sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') : 'en',
        languageOptions: []
      }
    },
    created() {
    },
    mounted() {
      const lang = sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') : 'en';
      this.changeLanguage(lang);
      this.getLanguagelist();
    },
    //离开当前页面后执行
    destroyed() {

    },
    methods: {

      /**
       * 导航栏
       **/
      handleSelect(key, keyPath) {
        sessionStorage.setItem('activeMenu',keyPath[0]);
        //this.activeMenu = keyPath[0];
        if (key === '1') {
          this.$router.push({
            name: 'home',
          })
        } else if (key === '2') {
          this.$router.push({
            name: 'wallet',
          })
        } else if (key === '3') {
          this.$router.push({
            name: 'developer',
          })
        } /*else if (key === '4') {
          this.$router.push({
            name: 'downloads',
          })
        }*/ else if (key === '5') {
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
        }else if(key === '7'){
          this.$router.push({
            name: 'commnunity',
          });
        }else if(key === '8'){
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

<style lang="less" type="text/less">
  @import url("./../assets/css/style.less");

  .header {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0;
    @media (max-width: 1280px) {
      max-width: 1024px;
    }
    .logo {
      width: 170px;
      height: 60px;
      margin: 30px 0 0 0;
      background: url("./../assets/images/nuls-logo-white.png") no-repeat;
      @media (max-width: 1280px) {
        width: 120px;
        background-size: 90%;
        background-position: 5px;
        margin: 1.8rem 0 0 0.1rem;
      }
    }

    .el-menu {
      background: transparent;
      border: 0;
      padding-top: 40px;
      .el-menu-item {
        color: #FFFFFF;
        font-size: 18px;
        padding: 0 5px;
        margin: 0 20px;
        height: 40px;
        line-height: 40px;
        @media (max-width: 1280px) {
          margin: 0 15px;
        }
        &:hover {
          background-color: transparent !important;
          color: #9cbe82;
        }
      }
      .el-submenu {
        &:hover {
          background-color: transparent !important;
        }
        .el-submenu__title {
          padding: 0 5px;
          margin: 0 25px;
          height: 40px;
          line-height: 40px;
          color: #FFFFFF;
          font-size: 18px;
          i{
            color:#fff;
          }
          @media (max-width: 1280px) {
            margin: 0 15px;
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
      width: 100px;
      margin-top: 45px;
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

  .el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
    min-width: 120px;
    text-align: center;
    padding: 0;
    border-radius: 15px;
  }
</style>
