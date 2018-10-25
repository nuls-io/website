<template>
  <div class="downloads">
    <div class="header-bg">
      <HeaderList></HeaderList>
      <h1 class="h1 cb">{{$t('nav.about1')}}</h1>
    </div>

    <div class="downloads-info">
      <ul>
        <li>
          <h3>{{$t('nav.wallet')}}</h3>
          <p>
            <span>{{$t('downloads.span1')}}</span>
            <el-button type="success">{{$t('nav.about1')}}</el-button>
          </p>
        </li>
        <li>
          <h3>{{$t('downloads.h32')}}.zip</h3>
          <p>
            <span>{{$t('downloads.span2')}}</span>
            <el-button type="success">{{$t('nav.about1')}}</el-button>
          </p>
        </li>
        <li>
          <h3>{{$t('downloads.h33')}}</h3>
          <p>
            <span>{{$t('downloads.span3')}}</span>
            <el-button type="success">{{$t('nav.about1')}}</el-button>
          </p>
        </li>
      </ul>
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
  .downloads {
    background-color: #FFFFFF;
    .header-bg {
      background: url("./../assets/images/map-bg.png") no-repeat;
      background-size: 100% 100%;
      max-height: 300px;
      @media (max-width: 768px) {
        max-height: 150px;
      }
      h1 {
        line-height: 9rem;
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
        li{
          margin-top: 40px;
          h3{
            font-size: 28px;
            color: #0b1422;
            opacity: 0.86;
            border-left: 3px solid #56c400;
            padding: 0 0 0 10px;
            @media (max-width: 768px) {
              font-size: 24px;
              padding: 0 0 0 0.5rem;
              margin:  0 0 0 1rem;
            }
          };
          p{
            box-shadow: 10px 10px 20px 10px #C1C5C9;
            padding: 20px;
            margin: 20px 10px;
            width: 100%;
            min-height: 8rem;
            @media (max-width: 768px) {
              min-height: 15rem;
              width: auto;
            }
            span{
              color: #0b1422;
              opacity: 0.86;
              display: block;
              width: 85%;
              float: left;
              @media (max-width: 768px) {
                width: 100%;
                clear: left;
              }
            }
            button{
              display: block;
              margin: 1rem auto;
              width: 15%;
              float: left;
              @media (max-width: 768px) {
                width: 100%;
                clear: left;
              }
              @media (max-width: 768px) {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }

</style>
