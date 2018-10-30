<template>
  <div class="medias">
    <div class="medias-top">
      <HeaderList></HeaderList>
    </div>

    <div class="carousel cb">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in bannerList" :key="item.name">
          <a :href="item.link" target="_blank"><img :src="item.url" /></a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-tabs v-model="activeMedia" @tab-click="handleClick">
      <el-tab-pane label="News" name="news">
        <ul class="news-list">
          <template v-for="site in newList">
            <li @click="toMediaDetails(site.url)">
              <p class="fl">
                <label>{{ site.title }}</label>
                <span>{{ site.create_time }}</span>
              </p>
              <img class="fr" :src=site.thumbnail />
            </li>
          </template>
        </ul>

        <el-pagination
          background
          v-show="this.newlistTotal > 10"
          class="cb"
          @current-change="newlistSize"
          layout="prev, pager, next"
          :total=this.newlistTotal>
        </el-pagination>
      </el-tab-pane>

      <el-tab-pane label="Guide" name="guide">
        <ul class="news-list">
          <template v-for="site in guideList">
            <li @click="toMediaDetails(site.url)">
              <p class="fl">
                <label>{{ site.title }}</label>
                <span>{{ site.create_time }}</span>
              </p>
              <img class="fr" :src=site.thumbnail />
            </li>
          </template>
        </ul>
      </el-tab-pane>

      <el-tab-pane label="Find Us" name="social">
        <h3>
          Join Group
        </h3>
        <ul class="social-list">
          <template v-for="site in findUsList">
          <li @click="toLink(site.link)">
            <img :src=site.imgUrl>
            <p class="overflow">{{site.title}}</p>
          </li>
          </template>
        </ul>

      </el-tab-pane>
    </el-tabs>
    <Bottombar></Bottombar>
  </div>
</template>

<script>
  import {getBannerList,getNewList,getGuideList,getFindUsList} from '@/api/httpData'
  import {API_ROOT} from '@/api/https'
  import {arrItemSort} from '@/util/util';
  import HeaderList from '@/components/HeaderList';
  import Bottombar from '@/components/Bottom';

  export default {
    data() {
      return {
        language:sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') ==='zh' ? '1' : '2' : '2',
        bannerList:[],
        activeMedia: 'news',
        newList: [],
        newlistTotal:0,
        guideList:[],
        findUsList:[],
      }
    },
    watch:{
      language(curVal,oldVal){
        if(curVal.toString() !== oldVal.toString()){
          this.getBannerList(this.language);
          if(this.activeMedia ==='news'){
            this.getNewList(this.language, 10, 1);
          }else if(this.activeMedia ==='guide'){
            this.getGuideList(this.language, 10, 1);
          }else if(this.activeMedia ==='social') {
            this.getFindUsList(1, 10, 1);
          }else {
            console.log("")
          }
        }
      },
    },
    components: {
      HeaderList,
      Bottombar,
    },
    mounted() {

      setInterval(() => {
        this.language=sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') ==='zh' ? '1' : '2' : '2'
      }, 100);

      this.getBannerList(this.language);
      if(this.activeMedia ==='news'){
        this.getNewList(this.language, 10, 1);
      }else if(this.activeMedia ==='guide'){
        this.getGuideList(this.language, 10, 1);
      }else if(this.activeMedia ==='social') {
        this.getFindUsList(1, 10, 1);
      }else {
        console.log("")
      }
    },
    methods: {

      /**
       * 获取轮播图片列表
       * @param siteId
       **/
      getBannerList(siteId){
        let that = this;
        getBannerList(siteId)
          .then(function (response) {
            console.log(response);
            for (let list of response.data.contentList) {
              list.url = API_ROOT + list.url;
            }
            that.bannerList = response.data.contentList;
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      /**
       *  tab 选择
       * @param tab
       * @param event
       */
      handleClick(tab, event) {
        this.language=sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') ==='zh' ? '1' : '2' : '2';
        if(tab.name ==='news'){
          this.getNewList(this.language, 10, 1);
        }else if(tab.name ==='guide'){
          this.getGuideList(this.language, 10, 1);
        }else if(tab.name ==='social') {
          this.getFindUsList(1, 10, 1);
        }else {
          console.log("")
        }
      },

      /**
       * 获取新闻列表
       * @param siteId
       * @param pageSize
       * @param pageNum
       */
      getNewList(siteId, pageSize, pageNum) {
        let that = this;
        getNewList(siteId,pageSize,pageNum)
          .then(function (response) {
            //console.log(response);
            that.newlistTotal = response.data.totalRow;
            for (let list of response.data.contentList) {
              list.thumbnail = API_ROOT + list.thumbnail;
            }
            setTimeout(() => {
              let newListSort = arrItemSort(response.data.contentList,"id",0);
              that.newList  = newListSort;
            }, 100);
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      /**
       * 新闻列表分页
       **/
      newlistSize(e){
        this.getNewList(this.language, 10, e);
      },

      /**
       * 跳转详情
       * @param url
       */
      toMediaDetails(url){
        this.$router.push({
          name: 'mediaDetails',
          query: {url: url},
        })
      },

      /**
       * link 跳转
       **/
      toLink(url){
        //console.log(url)
        window.open(url);
      },

      /**
       * 获取Guide列表
       * @param siteId
       * @param pageSize
       * @param pageNum
       */
      getGuideList(siteId, pageSize, pageNum) {
        let that = this;
        getGuideList(siteId,pageSize,pageNum)
          .then(function (response) {
            for (let list of response.data.contentList) {
              list.thumbnail = API_ROOT + list.thumbnail;
            }
            that.guideList = response.data.contentList;
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      /**
       * 获取findUs列表
       * @param siteId
       * @param pageSize
       * @param pageNum
       */
      getFindUsList(siteId, pageSize, pageNum) {
        let that = this;
        getFindUsList(siteId,pageSize,pageNum)
          .then(function (response) {
            console.log(response);
            for (let list of response.data.contentList) {
              list.imgUrl = API_ROOT + list.imgUrl;
            }
            that.findUsList = response.data.contentList;
          })
          .catch(function (error) {
            console.log(error);
          });
      },

    },
  }
</script>

<style lang="less">
  .medias {
    background-color: #FFFFFF;
    width: 100%;
    .medias-top {
      max-width: 1280px;
      margin: 0 auto;
      @media (max-width: 768px) {
        background: url("./../assets/images/map-bg.png") no-repeat;
        background-size: 100% 100%;
        min-height: 68px;
      }
      .header {
        z-index: 9;
        position: absolute;
        max-width: 1280px;
      }
    }
    .carousel {
      z-index: 8;
      .el-carousel{
        .el-carousel__container{
          height: 560px;
          @media (max-width: 768px) {
            height: 180px;
          }
          .el-carousel__item{
            a{
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .el-carousel__indicators{
          .el-carousel__indicator{
            padding: 12px 4px 40px 4px;
            .el-carousel__button{
              width: 8px;
              height: 8px;
            }
          }
        }
      }
    }
    .el-tabs {
      min-height: 30rem;
      max-width: 1280px;
      margin: 100px auto 0;
      @media (max-width: 768px) {
        margin: 20px auto 0;
      }
      .el-tabs__header {
        margin: 0 0 50px;
        .el-tabs__nav-wrap {
          &:after {
            background-color: transparent;
          }
          .el-tabs__nav-scroll {
            max-width: 660px;
            height: 60px;
            margin: 0 auto;
            text-align: center;
            .el-tabs__nav {
              .el-tabs__item {
                border-radius: 30px;
                color: #000000;
                font-size: 18px;
                width: 160px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                margin: 0 30px;
                padding: 0;
                @media (max-width: 768px) {
                  margin: 0 2px;
                }
                &:hover {
                  color: #56c400;
                  background: #fff;
                  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
                  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
                }
                &:first-child {
                  margin: 0 0 0 200px;
                }
              }
              .is-active {
                background: #fff;
                color: #56c400;
                -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
                box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
              }
              .el-tabs__active-bar {
                background-color: transparent;
              }
            }
          }
        }
        .el-tabs__content {
          margin: 30px 0 0 0;
        }

      }
      .el-tabs__content {
        margin-bottom: 120px;
        .el-tab-pane{
        }
        .news-list {
          li {
            height: 200px;
            box-shadow: 5px 8px 9px -5px #C1C5C9;
            border:1px solid #C1C5C9;
            border-radius: 8px;
            margin: 20px 0 0 0;
            @media (max-width: 768px) {
              margin: 10px 0 0 0;
            }
            &:hover{
              cursor: pointer;
            }
            p {
              padding: 24px 10px 0 36px;
              color: #445569;
              font-size: 24px;
              width: 70%;
              @media (max-width: 768px) {
                width: 100%;
              }
              label {
                color: #0a2140;
                font-size: 30px;
                line-height: 40px;
                display: block;
                height: 100px;
                @media (max-width: 768px) {
                  font-size: 18px;
                  line-height: 20px;
                  height: 6.5rem;
                }
                &:hover{
                  cursor: pointer;
                }
              }
              span {
                color: #a6a9ad;
                font-size: 18px;
                display: block;
                position: relative;
                top: 20px;
              }
              &:hover{
                cursor: pointer;
              }
            }
            img {
              margin:10px 10px 10px 10px;
              width: 280px;
              height: 180px;
              @media (max-width: 768px) {
               display: none;
              }
            }
          }
        }
        h3 {
          border-left: 3px solid #34ce57;
          color: #0a2140;
          width: 100%;
          margin: 50px auto 0;
          font-size: 30px;
          padding: 0 0 0 20px;
        }
        .social-list {
          max-width: 1280px;
          height: auto;
          margin: 50px auto 0;
          li {
            box-shadow: 2px 1px 2px 3px #C1C5C9;
            max-width: 410px;
            height: 125px;
            margin: 20px 10px 10px 10px;
            float: left;
            text-align: center;
            cursor: pointer;
            @media (max-width: 768px) {
              width: 94%;
            }
            img {
              margin: 20px 0 0 5px;
              width: 80px;
              height: 80px;
              border-radius: 80px;
              float: left;
              @media (max-width: 768px) {

              }
            }
            p {
              margin: 20px 0 0 0;
              width: 320px;
              color: #0a2140;
              line-height: 80px;
              font-size: 24px;
              float: left;
              @media (max-width: 768px) {
                width: 230px;
              }
            }
          }
        }
      }
    }

  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background: url("./../assets/images/BG.png") no-repeat 100%, 100%;
  }

</style>
