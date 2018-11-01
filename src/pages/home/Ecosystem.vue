<template>
    <div class="ecosystem">
      <h2 class="h2">{{$t('home.ecosystem_title')}}</h2>
      <div class="ecosystem-bg">
        <div class="one fl">
          <p>{{$t('home.ecosystem_info0')}}</p>
        </div>
        <div  class="two fl">
          <p>{{$t('home.ecosystem_info1')}}</p>
        </div>
        <div class="three fl">
          <p>{{$t('home.ecosystem_info2')}}</p>
        </div>
      </div>
      <div class="m-ecosystem">
        <p><span>Step1:</span>{{$t('home.ecosystem_info0')}}</p>
        <p><span>Step2:</span>{{$t('home.ecosystem_info1')}}</p>
        <p><span>Step3:</span>{{$t('home.ecosystem_info2')}}</p>
        <img src="./../../assets/images/ecosystem.png" />
      </div>
    </div>
</template>

<script>
  export default {
    name: "ecosystem"
  }
</script>

<style lang="less" type="text/less">
  .ecosystem{
    background:url("./../../assets/images/wallet-section-bg.jpg");
    width: 100%;
    padding:1px 0 112px 0;
    @media (max-width: 768px) {
      min-height: 550px;
      padding:0;
    }
    .h2{
      color: #FFFFFF;
      margin: 120px auto 80px;
      @media (max-width: 768px) {
        margin: 0 auto;
        text-align: left;
        padding: 5rem 0 3rem 1rem;
      }
    }
    .ecosystem-bg{
      background:url("./../../assets/images/ecosystem.png") no-repeat;
      width: 1175px;
      height: 388px;
      margin: 0 auto;
      @media (max-width: 768px) {
        display: none;
      }
      .one{
        width: 416px;
        height: 376px;
        margin: 1px 0 0 1px;
        &:hover{
          background-color: rgba(10,33,64,0.75);
          p{
            color: #FFFFFF;
            line-height: 1.25rem;
            opacity: 1;
          }
        }
        p{
          padding: 42% 10px 0;
          font-size: 18px;
          color: transparent;
          font-weight: bold;
        }
      }
      .two{
        width: 237px;
        height: 112px;
        margin: 133px 0 0 54px;
        &:hover{
          background-color: rgba(10,33,64,0.75);
          p{
            color: #FFFFFF;
            line-height: 25px;
            opacity: 1;
          }
        }
        p{
          padding: 10% 10px 0;
          font-size: 18px;
          color: transparent;
          font-weight: bold;
        }
      }
      .three{
        width: 414px;
        margin: 3px 0 0 49px;
        height: 373px;
        &:hover{
          background-color: rgba(10,33,64,0.75);
          p{
            color: #FFFFFF;
            line-height: 25px;
            opacity: 1;
          }
        }
        p{
          padding: 43% 10px 0;
          font-size: 18px;
          color: transparent;
          font-weight: bold;
        }
      }

    }
    .m-ecosystem{
      display: none;
      @media (max-width: 768px) {
        display: block;
      }
      p{
        padding: 0 10px;
        font-size: 20px;
        margin: 10px 0 0 0;
        @media (max-width: 768px) {
         padding: 0 0 1rem 1rem;
         font-size: 1.5rem;
        }
        span{
          color: #c2ccdf;
          font-size: 1.8rem;
        }
      }
      img{
        width: 90%;
       margin: 20px 5% ;
        @media (max-width: 768px) {
          margin: 4rem 5% 2rem;
        }
      }
    }
  }

</style>
