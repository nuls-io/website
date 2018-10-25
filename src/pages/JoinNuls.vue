<template>
  <div class="joinNuls">
    <div class="joinNuls-top-bg">
      <div class="joinNulss-top">
        <HeaderList></HeaderList>
      </div>
    </div>
    <div class="joinNuls-info cb">
      <div class="section clipPath">
        <div class="container">
          <h1 class="h1">{{$t('joinNuls.title')}}</h1>
          <p>{{$t('joinNuls.info')}}</p>
        </div>
      </div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="AMERICAN COMMUNITY MANAGER" name="1">
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
          <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
          <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
          <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
          <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
          <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
          <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
          <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
          <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
          <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
          <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
          <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
          <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
        </el-collapse-item>
      </el-collapse>
    </div>
    <Bottombar></Bottombar>
  </div>
</template>

<script>
  import axios from 'axios'
  import HeaderList from '@/components/HeaderList';
  import Bottombar from '@/components/Bottom';

  export default {
    data() {
      return {
        activeNames: ['1']
      }
    },
    components: {
      HeaderList,
      Bottombar,
    },
    mounted() {
      //console.log(this.$route.query.url);
      this.getMediasDetails(this.$route.query.url)
    },
    methods: {

      handleChange(val) {
        console.log(val);
      },

      /**
       * 获取新闻详情
       * @param url
       */
      getMediasDetails(url) {
        let that = this;
        axios.get('http://192.168.1.130:8080/' + url)
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
  .joinNuls {
    background-color: #FFFFFF;
    width: 100%;
    max-height: 300rem;
    .joinNuls-top-bg {
      width: auto;
      min-height: 120px;
      margin: 0 auto;
      background: url("./../assets/images/top_bg.png") no-repeat 100%, 100%;
      .joinNuls-top {
        width: 1280px;
        margin: 0 auto;
        .header {
          z-index: 9;
          position: absolute;
          width: 1280px;
        }
      }

    }
    .joinNuls-info {
      min-height: 200px;
      margin: 50px auto 100px;
      @media (max-width: 768px) {
        margin: 0 auto 100px;
      }
      .section {
        background-image: linear-gradient(-134deg, #f1f4f8, #eff4f8 14%, #eff4f8 18%, #eff4f8 20%, #ecf4f9 46%, #ebf4f9 49%, #ebf4f9 54%, #ebf4f9 57%, #eaf4f9 65%, #e7f4fa 86%, #e7f4fa 90%, #e7f4fa 0, #e6f4fa 92%, #e6f4fa);
        padding-bottom: 70px;
        .container {
          padding-top: 40px;
          margin: auto;
          max-width: 1280px;
          .h1{
            color: #445569;
          }
          p{
            font-size: 16px;
            color: #445569;
            letter-spacing: 0;
            line-height: 25px;
            text-align: center;
            max-width: 810px;
            margin: 20px auto 0;
          }
        }
      }
      .el-collapse{
        max-width: 810px;
        margin: 20px auto;
        .el-collapse-item{
          .el-collapse-item__header{
            height: 80px;
            line-height: 80px;
            padding: 0 0 0 20px ;
            font-size: 28px;
            color: #0a2140;
            box-shadow: 0 8px 24px 0 rgba(186,194,198,.5), 0 3px 6px 0 rgba(186,194,198,.2);
            @media (max-width: 768px) {
              font-size: 16px;
            }
            i{
              line-height: 80px;
            }
          }
        }
        .el-collapse-item__wrap{
          .el-collapse-item__content{
            p{
              color: #445569;
              line-height: 25px;
              padding: 0 20px;
            }
          }
        }
      }
    }

  }

</style>
