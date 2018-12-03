<template>
  <div class="downloads">
    <div class="header-bg">
      <HeaderList></HeaderList>
      <h1 class="h1 cb">{{$t('nav.about1')}}</h1>
    </div>

    <div class="downloads-info" v-loading="downloadsListLoading">
      <ul>
        <li v-for="item in downloadsList">
          <h3>{{item.title}}</h3>
          <p>
            <span>{{item.contentDescription}}</span>
            <el-button type="success" @click="toDownload(item.filelink,item.link)">{{$t('nav.about1')}}</el-button>
          </p>
        </li>
      </ul>
    </div>
    <Bottom></Bottom>
    <GoTop></GoTop>
  </div>
</template>

<script>
  import {getDownloadsList} from '@/api/httpData'
  import {API_ROOT} from '@/api/https'
  import {arrItemSort,tolink} from '@/util/util';
  import HeaderList from '@/components/HeaderList';
  import Bottom from '@/components/Bottom';
  import GoTop from '@/components/GoTop';

  export default {
    data() {
      return {
        downloadsListLoading:true,
        language: sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') === 'zh' ? 1 : 2 : 2,
        downloadsList:[],
      }
    },
    watch:{
      language(curVal,oldVal){
        if(curVal.toString() !== oldVal.toString()){
          this.getDownloadsList(this.language, 10, 1)
        }
      },
    },
    components: {
      HeaderList,
      Bottom,
      GoTop
    },
    mounted() {
       setInterval(() => {
        this.language=sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') ==='zh' ? 1 : 2 : 2
      }, 100);

      this.getDownloadsList(this.language, 10, 1)
    },
    methods: {
      /**
       * 获取下载列表
       * @param siteId
       * @param pageSize
       * @param pageNum
       */
      getDownloadsList(siteId, pageSize, pageNum) {
        let that = this;
        getDownloadsList(siteId,pageSize,pageNum)
          .then(function (response) {
            //console.log(response);
            setTimeout(() => {
              let downloadsListSort = arrItemSort(response.data.contentList,"id",0);
              that.downloadsList  = downloadsListSort;
              that.downloadsListLoading = false;
            }, 100);
          })
          .catch(function (error) {
            console.log(error);
          });

      },

      /**
       * 下载文件地址
       * @param filelink
       * @param link
       */
      toDownload(filelink,link){
        if(filelink !==''){
          try {
            let elemIF = document.createElement("iframe");
            elemIF.src = API_ROOT+filelink.slice(1);
            elemIF.style.display = "none";
            document.body.appendChild(elemIF);
          } catch (e) {

          }
        }else {
          tolink(link);
        }
      }
    }
  }
</script>

<style lang="less">
  @import url("../assets/css/style.less");
  .downloads {
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
          line-height: 4rem;
        }
      }
    }
    .downloads-info {
      max-width: 1280px;
      height: auto;
      margin: 0 auto 8rem;
      @media (max-width: 768px) {
        height: auto;
      }
      ul{
        margin: 100px 0 0 0;
        @media (max-width: 768px) {
          margin: 2rem 0 0 0;
        }
        li{
          margin: 0 0 80px 0;
          min-height: 150px;
          @media (max-width: 768px) {
            margin: 0 auto 1rem ;
            width: 90%;
          }
          h3{
            font-size: 36px;
            color: #0b1422;
            opacity: 0.86;
            height: 40px;
            border-left: 3px solid #56c400;
            padding: 0 0 0 30px;
            @media (max-width: 768px) {
              font-size:1.2rem;
              padding: 0 0 0 1rem;
              margin:  0 0 0 0;
              line-height: 2.6rem;
            }
          };
          p{
            box-shadow: 2px 4px 12px 2px #03143712;
            padding: 25px 40px;
            margin: 40px 0 0 0 ;
            width: 100%;
            font-size: 24px;
            line-height: 36px;
            color: #445569;
            min-height: 150px;
            @media (max-width: 768px) {
              min-height: auto;
              width: auto;
              float: none;
              padding: 1rem 1rem 2rem 1rem;
              font-size: 1rem;
              margin: 1rem 0 0 0 ;
            }
            span{
              color: #0b1422;
              opacity: 0.86;
              display: block;
              padding: 0 30px 0 0;
              width: 85%;
              float: left;
              @media (max-width: 768px) {
                width: 100%;
                float: none;
                padding: 0 0.5rem;
              }
            }
            .el-button{
              display: block;
              margin: 1rem auto;
              width: 15%;
              float: left;
              span{
                width: 100%;
                color: #ffffff;
                padding: 0;
                @media (max-width: 768px) {
                  font-size: 1.2rem;
                }
              }
              @media (max-width: 768px) {
                width: 100%;
                float: none;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }

</style>
