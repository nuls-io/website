<template>
  <div class="faqs">
    <div class="header-bg">
      <HeaderList></HeaderList>
      <h1 class="h1 cb">{{$t('qaqs.title')}}</h1>
    </div>
    <div class="faqs-info">
      <template v-for="item of FaqList">
        <h3>{{item.title_name}}</h3>
        <div v-html="item.content"></div>
      </template>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import HeaderList from '@/components/HeaderList';
  import Bottom from '@/components/Bottom';
  import {getFaqList} from '@/api/httpData';

  export default {
    data() {
      return {
        FaqList: [],
        language:sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') ==='zh' ? 1 : 2 : 2,
      }
    },
    components: {
      HeaderList,
      Bottom,
    },
    mounted() {
      setInterval(() => {
        this.language=sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') ==='zh' ? 1 : 2 : 2
      }, 100);
      this.getFaqList(this.language)
    },
    methods: {

      /**
       * 获取轮播图片列表
       * @param siteId
       **/
      getFaqList(siteId){
        let that = this;
        getFaqList(siteId)
          .then(function (response) {
           //console.log(response)
            that.FaqList = response.data.contentList
          })
          .catch(function (error) {
            console.log(error);
          });
      },
    },
    watch: {
      language(curVal, oldVal) {
        if (curVal.toString() !== oldVal.toString()) {
          this.getFaqList(this.language);
        }
      }
    }
  }
</script>

<style lang="less">
  @import url("../assets/css/style.less");

  .faqs {
    background-color: #FFFFFF;
    .header-bg {
      background: url("./../assets/images/top_bg.jpg") no-repeat 100% 100%;
      height: 300px;
      @media (max-width: 768px) {
        height: auto;
      }
      h1 {
        line-height: 9rem;
        @media (max-width: 768px) {
          line-height: 0;
        }
      }
    }

    .faqs-info {
      color: #0a2140;
      background: #FFFFFF;
      min-height: 500px;
      margin: 50px auto 100px;
      h3 {
        width: 70%;
        margin: 0 auto 30px;
        padding: 70px 0 25px 0;
        border-bottom: 1px solid #ededed;
        color: #0a2140;
        font-size: 26px;
        @media (max-width: 768px) {
          width: 90%;
          padding: 30px 0 30px 0;
        }
      }
      p {
        width: 70%;
        margin: 0 auto;
        font-size: 16px;
        color: #445569;
        line-height: 36px;
        padding: 0 0 0 0;
        text-indent: 2rem;
        @media (max-width: 768px) {
          width: 90%;
          font-size: 1.2rem;
          line-height: 1.4rem;
          padding: 0 0 2rem 0 ;
        }
      }
      .w-one {
        min-height: 100px;
      }
      .w-two {
        background-color: #e9f4f9;
      }
      .w-three {
        min-height: 680px;
        max-width: 1280px;
        margin: 0 auto;
        @media (max-width: 768px) {
          max-width: 100%;
        }
        h5 {
          max-width: 100%;
        }
        .w-three-left, .w-three-right {
          width: 590px;
          float: left;
          height: 360px;
          text-align: center;
          margin: 20px 0 0 0;
          box-shadow: 2px 2px 5px #333333;
          @media (max-width: 768px) {
            width: 90%;
            margin: 1rem 5%;
            float: none;
            height: auto;
          }
          p {
            width: 90%;
            margin: 0 auto;
            height: 120px;
            padding: 78px 0 80px 0;
            color: #445569;
            font-size: 24px;
            line-height: 36px;
            right: 0;
            @media (max-width: 768px) {
              padding: 1.2rem 0 1.2rem 0;
              font-size: 1.4rem;
              line-height: 1.8rem;
              text-align: left;
            }
          }
          .el-button {
            margin: 80px 0 0 0;
            @media (max-width: 768px) {
              margin: 4rem 0 2rem 0;
            }
          }
        }
        .w-three-right {
          float: right;
        }

      }
    }

  }

</style>
