<template>
  <div class="mediasDetails">
    <div class="medias-top-bg">
      <div class="medias-top">
        <HeaderList></HeaderList>
      </div>
    </div>
    <div class="mediasDetails-info cb">
      <h4 class="h4">{{mediasDetailsInfo.title}}</h4>
      <label class="label">{{mediasDetailsInfo.create_time}}</label>
      <div class="content" v-html = 'mediasDetailsInfo.content'>
      </div>
    </div>
    <Bottombar></Bottombar>
  </div>
</template>

<script>
  import axios from 'axios'
  import {API_ROOT} from '@/api/https'
  import HeaderList from '@/components/HeaderList';
  import Bottombar from '@/components/Bottom';

  export default {
    data() {
      return {
        mediasDetailsInfo: [],
        newList: [],
      }
    },
    components: {
      HeaderList,
      Bottombar,
    },
    mounted() {
      this.getMediasDetails(this.$route.query.url)
    },
    methods: {

      /**
       * 获取新闻详情
       * @param url
       */
      getMediasDetails(url) {
        let that = this;
        axios.get(API_ROOT+url)
          .then(function (response) {
            //console.log(response)
            response.data.data.content.thumbnail = API_ROOT + response.data.data.content.thumbnail;
            that.mediasDetailsInfo = response.data.data.content;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  }
</script>

<style lang="less">
  .mediasDetails {
    background-color: #FFFFFF;
    width: 100%;
    min-height: 30rem;
    .medias-top-bg {
      width: 100%;
      min-height: 120px;
      margin: 0 auto;
      background: url("./../assets/images/top_bg.jpg") no-repeat 100%,100% #0a2140;
      @media (max-width: 768px) {
        min-height: 60px;
      }
      .medias-top{
        max-width: 1280px;
        margin: 0 auto;
        .header {
          max-width: 1280px;
          z-index: 9;
        }
      }

    }
    .mediasDetails-info{
      max-width: 1280px;
      min-height: 200px;
      margin: 50px auto 100px;
      .label{
        display: block;
        color: #0a2140;
        opacity: 0.8;
        text-align: right;
        padding: 20px 80px 0 0;
        font-size: 16px;
        @media (max-width: 768px) {
          padding: 20px 20px 0 0;
          font-size: 14px;
        }
      }
      .content{
        width: auto;
        height: auto;
        margin: 20px 0;
        color: #333333;

        span{
          text-align: left;
        }
        p{
          font-size: 14px !important;
          color: #333333 !important;
          letter-spacing: 0;
          line-height: 30px !important;
          font-weight: 300 !important;
          margin: 0 auto 10px !important;
          @media (max-width: 768px) {
            margin: 0 auto;
            font-size: 0.6rem;
            padding:0.5rem;
          }

          img{
            text-align: center;
            @media (max-width: 768px) {
              width: 100%;
            }
          }
        }

        ul{
          li{
            color: #8E9496;
            line-height: 25px;
            @media (max-width: 768px) {
              font-size: 0.7rem;
              padding:0.5rem;
              line-height: 1rem;
            }
          }
        }
      }
    }

  }

</style>
