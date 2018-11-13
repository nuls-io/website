<template>
  <div class="medias">
    <div class="medias-top"  v-loading="mediasLoading">
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
        <ul class="news-list" v-loading="newsListLoading">
            <li @click="toMediaDetails(site.url)"  v-for="site in newList">
              <p class="fl">
                <label>{{ site.title }}</label>
                <span>{{ site.create_time }}</span>
              </p>
              <img class="fr" :src=site.thumbnail />
            </li>
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
              <img class="fr" :src=site.imgUrl />
            </li>
          </template>
        </ul>
      </el-tab-pane>

      <el-tab-pane label="Guide" name="social">
       <div class="steps">
         <div class="step">
           <div class="step-data fl">
             <div class="line"></div>
             <i class="ico"></i>
             <label>2018-08-08</label>
           </div>
           <div class="step-info fl">
             <h6 class="h6">NULS members are highly experienced</h6>
             <p class="font-20"> {{$t('team.info')}}</p>
           </div>
         </div>
         <div class="step">
           <div class="step-data fl">
             <div class="line"></div>
             <i class="ico"></i>
             <label>2018-08-08</label>
           </div>
           <div class="step-info fl">
             <h6 class="h6">NULS members are highly experienced</h6>
             <p class="font-20"> {{$t('team.info')}}</p>
           </div>
         </div>
         <div class="step">
           <div class="step-data fl">
             <div class="line"></div>
             <i class="ico"></i>
             <label>2018-08-08</label>
           </div>
           <div class="step-info fl">
             <h6 class="h6">NULS members are highly experienced</h6>
             <p class="font-20"> {{$t('team.info')}}</p>
           </div>
         </div>
         <div class="step">
           <div class="step-data fl">
             <div class="line"></div>
             <i class="ico"></i>
             <label>2018-08-08</label>
           </div>
           <div class="step-info fl">
             <h6 class="h6">NULS members are highly experienced</h6>
             <p class="font-20"> {{$t('team.info')}}</p>
           </div>
         </div>
       </div>

      </el-tab-pane>
    </el-tabs>
    <Bottombar></Bottombar>
    <GoTop></GoTop>
  </div>
</template>

<script>
  import {getBannerList,getNewList,getGuideList} from '@/api/httpData'
  import {API_ROOT} from '@/api/https'
  import {arrItemSort} from '@/util/util';
  import HeaderList from '@/components/HeaderList';
  import Bottombar from '@/components/Bottom';
  import GoTop from '@/components/GoTop';

  export default {
    data() {
      return {
        language:'2',
        mediasLoading:true,
        bannerList:[],
        activeMedia: 'social',
        newsListLoading:true,
        newList: [],
        newlistTotal:0,
        guideList:[],
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
      GoTop,
    },
    mounted() {

     /* setInterval(() => {
        this.language=sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') ==='zh' ? '1' : '2' : '2'
      }, 100);*/

      this.getBannerList(this.language);

      setTimeout(() => {
        if(this.activeMedia ==='news'){
          this.getNewList(this.language, 10, 1);
        }else if(this.activeMedia ==='guide'){
          this.getGuideList(this.language, 10, 1);
        }else if(this.activeMedia ==='social') {
          this.getFindUsList(1, 10, 1);
        }else {
          console.log("")
        }
      },100);

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
            that.mediasLoading = false;
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
          //this.getFindUsList(1, 10, 1);
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
              that.newsListLoading = false;
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
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
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
            //console.log(response);
            for (let list of response.data.contentList) {
              list.imgUrl = API_ROOT + list.imgUrl;
            }
            setTimeout(() => {
              let guideListSort = arrItemSort(response.data.contentList,"id",0);
              that.guideList  = guideListSort;
            }, 100);
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
            //console.log(response);
            for (let list of response.data.contentList) {
              list.imgUrl = API_ROOT + list.imgUrl;
            }
            setTimeout(() => {
              let findUsListSort = arrItemSort(response.data.contentList,"id",0);
              that.findUsList  = findUsListSort;
              that.findUsListLoading = false;
            }, 100);

          })
          .catch(function (error) {
            console.log(error);
          });
      },

    },
  }
</script>

<style lang="less">
  @import url("../assets/css/style.less");
  .medias {
    background-color: #FFFFFF;
    width: 100%;
    .medias-top {
      max-width: 1280px;
      margin: 0 auto;
      @media (max-width: 768px) {
        background: url("./../assets/images/map-bg.jpg") no-repeat;
        background-size: 100% 100%;
      }
      .header {
        z-index: 9;
        position: absolute;
        width: 1280px;
      }

      .el-loading-mask{
        margin: 10% 0 0 0 ;
      }
    }
    .carousel {
      z-index: 8;
      .el-carousel{
        .el-carousel__container{
          height: 360px;
          @media (max-width: 768px) {
            height: 8rem;
          }
          .el-carousel__item{
            text-align: center;
            background-color: #111a39;
            a{
              img{
                /*width: 100%;
                height: 100%;*/
                @media (max-width: 768px) {
                  width: 100%;
                  height: 8rem;
                }
              }
            }
          }
        }
        .el-carousel__indicators{
          .el-carousel__indicator{
            padding: 12px 15px 40px 15px;
            @media (max-width: 768px) {
              padding: 12px 5px 5px 5px;
            }
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
        @media (max-width: 768px) {
          margin:0 0 0 0.5rem;
        }
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
                  margin: 0 0.5rem;
                  width: 6.5rem;
                  height: 2rem;
                  line-height: 2rem;
                  font-size: 1rem;
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
              height: 8rem;
              margin: 0.5rem;
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
                padding: 0.8rem;
                z-index: 8;
                //position: absolute;
              }
              label {
                color: #0a2140;
                font-size: 30px;
                line-height: 40px;
                display: block;
                height: 100px;
                @media (max-width: 768px) {
                  font-size: 1rem;
                  line-height: 1.4rem;
                  height: 3.5rem;
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
                @media (max-width: 768px) {
                  font-size: 0.8rem;
                }
              }
              &:hover{
                cursor: pointer;
              }
            }
            img {
              margin:10px 10px 10px 10px;
              width: 340px;
              height: 180px;
              @media (max-width: 768px) {
               display: none;
                width: 102px;
                height:48px;
                z-index: 5;
                position: absolute;
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
          @media (max-width: 768px) {
            font-size: 1.2rem;
            margin: 1.5rem 0 0 1rem;
            padding: 0 0 0 1rem;
          }
        }
        .social-list {
          max-width: 1280px;
          height: auto;
          margin: 50px auto 0;
          @media (max-width: 768px) {
            margin: 1.5rem auto 0;
          }
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
              height: 7rem;
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
                font-size: 1.2rem;
                line-height:4.5rem;
              }
            }
          }
        }
      }
    }

    .steps{
      height: 500px;
      .step{
        .step-data{
          width: 80px;
          text-align: center;
          @media (max-width: 768px) {
            width: 4.2rem;
          }
          .line{
            border-left: 1px solid #c1c1c1;
            height: 160px;
            margin:  50px 0 0 40px;
            position: absolute;
            @media (max-width: 768px) {
              height: 19rem;
              margin:  1.7rem 0 0 2rem;
            }
          }
          .ico{
            display: block;
            background: url("./../assets/images/Bi-Monthly.png") no-repeat center #34ce57;
            border-radius: 50px;
            width: 50px;
            height: 50px;
            margin: 0 0 0 15px;
          }
          label{
            display: block;
            background-color: #F8F8F8;
            border: 1px solid #c1c1c1;
            position: relative;
            font-size: 12px;
            line-height: 24px;
            color: #c1c1c1;
            margin: 10px 0 0 0;
            @media (max-width: 768px) {
              margin: 0.25rem 0 0 0.2rem;

            }
          }
        }
        .step-info{
          width: 88%;
          height: 200px;
          margin: 10px 0 0 30px;
          @media (max-width: 768px) {
            width: 75%;
            height: 20rem;
            margin: 0.5rem 0 0 0.5rem;
          }
          h6{
            color: @color_1;
            padding: 0 0 20px 0;
            @media (max-width: 768px) {
              padding: 0 0 0.8rem 0;
            }
          }
          p{
            color: @color_1;
            line-height: 30px;
            @media (max-width: 768px) {
              line-height: 1.5rem;
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
    text-align: center;
    background-color: #141c33;
  }

  .el-carousel__item:nth-child(2n) {
    //background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    //background: url("./../assets/images/BG.png") no-repeat 100%, 100%;
  }

</style>
