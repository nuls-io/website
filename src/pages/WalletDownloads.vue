<template>
  <div class="mediasDetails">
    <div class="medias-top-bg">
      <div class="medias-top">
        <Headerbar></Headerbar>
      </div>
    </div>
    <Wallet></Wallet>


    <Bottombar></Bottombar>
  </div>
</template>

<script>
  import axios from 'axios'
  import Headerbar from '@/components/Header';
  import Wallet from '@/pages/home/Wallet';
  import Bottombar from '@/components/Bottom';

  export default {
    data() {
      return {
        mediasDetailsInfo: [],
        newList: [],
      }
    },
    components: {
      Headerbar,
      Wallet,
      Bottombar,
    },
    mounted() {
      //console.log(this.$route.query.url);
      this.getMediasDetails(this.$route.query.url)
    },
    methods: {

      /**
       * 获取新闻详情
       * @param url
       */
      getMediasDetails(url) {
        let that = this;
        axios.get('http://192.168.1.130:8080/'+url)
          .then(function (response) {
            //console.log(response)
            response.data.data.content.thumbnail = 'http://192.168.1.130:8080' + response.data.data.content.thumbnail;
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
    min-height: 50rem;
    .medias-top-bg {
      width: auto;
      min-height: 120px;
      margin: 0 auto;
      background: url("./../assets/images/top_bg.png") no-repeat 100%,100%;
      .medias-top{
        width: 1280px;
        margin: 0 auto;
        .header {
          z-index: 9;
          position: absolute;
          width: 1280px;
        }
      }

    }
    .mediasDetails-info{
      max-width: 1280px;
      min-height: 200px;
      margin: 50px auto 100px;
      h4{
        color: #0a2140;
        font-size: 30px;
        text-align: center;
      }
      span{
        display: block;
        color: #0a2140;
        opacity: 0.8;
        text-align: right;
        padding: 20px 80px 0 0;
        font-size: 16px;
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
        }
      }
    }

  }

</style>
