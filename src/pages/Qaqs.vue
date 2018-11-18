<template>
  <div class="faqs">
    <div class="header-bg">
      <HeaderList></HeaderList>
      <h1 class="h1 cb">{{$t('qaqs.title')}}</h1>
    </div>
    <div class="faqs-info">
      <h3>{{$t('qaqs.title0')}}</h3>
      <p>{{$t('qaqs.p0_0')}}</p>
      <p>{{$t('qaqs.p0_1')}}</p>
      <p>{{$t('qaqs.p0_2')}}</p>
      <h3>{{$t('qaqs.title1')}}</h3>
      <p>{{$t('qaqs.p1_0')}}</p>
      <p>{{$t('qaqs.p1_1')}}</p>
      <h3>{{$t('qaqs.title2')}}</h3>
      <p>{{$t('qaqs.p2_0')}}<a href="https://www.inchain.org/index_en.html#page2" target="_blank">https://www.inchain.org/index_en.html#page2.</a>
      </p>
      <h3>{{$t('qaqs.title3')}}</h3>
      <p>{{$t('qaqs.p3_0')}}<a href="https://nuls.io/papers" target="_blank"></a>https://nuls.io/papers
      </p>
      <p>{{$t('qaqs.p3_1')}}</p>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import HeaderList from '@/components/HeaderList';
  import Bottom from '@/components/Bottom';

  export default {
    components: {
      HeaderList,
      Bottom,
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
        padding: 30px 0 0 0;
        @media (max-width: 768px) {
          padding: 1.8rem 0 2.6rem 0;
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
        @media (max-width: 768px) {
          width: 90%;
          padding: 30px 0 30px 0;
        }
      }
      p {
        width: 70%;
        margin: 0 auto;
        font-size: 24px;
        color: #445569;
        line-height: 30px;
        padding: 0 0 0 0;
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
