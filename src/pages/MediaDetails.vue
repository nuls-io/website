<template>
  <div class="mediasDetails">
    <div class="medias-top-bg">
      <div class="medias-top">
        <HeaderList></HeaderList>
      </div>
    </div>
    <div class="mediasDetails-info cb">
      <h4 class="h4">{{mediasDetailsInfo.title}}</h4>
      <span>{{mediasDetailsInfo.create_time}}</span>
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
      console.log(this.$route.query.url);
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
    max-height: 300rem;
    .medias-top-bg {
      width: auto;
      min-height: 120px;
      margin: 0 auto;
      background: url("./../assets/images/top_bg.png") no-repeat 100%,100%;
      @media (max-width: 768px) {
        min-height: 70px;
      }
      .medias-top{
        max-width: 1280px;
        margin: 0 auto;
        .header {
          z-index: 9;
          position: absolute;
          max-width: 1280px;
        }
      }

    }
    .mediasDetails-info{
      max-width: 1280px;
      min-height: 200px;
      margin: 50px auto 100px;
      h4{
      }
      span{
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
        p{
          font-size: 18px;
          color: #8E9496;
          letter-spacing: 0;
          line-height: 25px;
          font-weight: 300;
          margin: 0 auto 20px;
          @media (max-width: 768px) {
            margin: 0 auto;
            font-size: 14px;
            padding: 10px;
          }
        }
      }
    }

  }

</style>
