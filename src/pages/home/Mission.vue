<template>
  <div class="mission">
    <div class="spaceship">
      <div class="spaceship-content">
        <h2 class="h2">{{$t('home.nuls_do_title')}}</h2>
        <template v-for="site in 4">
          <div class="font-24 font-bold mission-text">{{$t('home.nuls_do_info'+site)}}</div>
        </template>
        <div class="font-24 color-green mission-href pointer" @click="toAbout">{{$t('home.nuls_do_info5_more')}}></div>
      </div>
      <!--<div class="img-right"><img src="./../../assets/images/mission-img.png"></div>-->
    </div>

    <el-dialog title="" :visible.sync="dialogFormVisible">
      <p>{{$t('home.w_title')}}</p>
      <ul>
        <li><a href="https://nuls.io/api/v1/download/files/papers/white/NulsWhitepaper1.1.pdf" target="_blank">English</a></li>
        <li><a href="https://nuls.io/api/v1/download/files/papers/white/NULS_whitepaper_zh_V1.0.pdf" target="_blank">中文</a></li>
        <li><a href="https://nuls.io/api/v1/download/files/papers/white/NulsWhitepaper1.1_Russia.pdf" target="_blank">Россия</a></li>
        <li><a href="https://nuls.io/api/v1/download/files/papers/white/NulsWhitepaper1.1_Korean.pdf" target="_blank">한국</a></li>
        <li><a href="https://nuls.io/api/v1/download/files/papers/white/NulsWhitepaper1.1_JP.pdf" target="_blank">日本語</a></li>
        <li><a href="https://nuls.io/api/v1/download/files/papers/white/NulsWhitepaper1.1_Germany.pdf" target="_blank">Deutsch</a></li>
        <li><a href="https://nuls.io/api/v1/download/files/papers/white/NulsWhitepaper1.1_French.pdf" target="_blank">Français</a></li>
        <li><a href="https://nuls.io/api/v1/download/files/papers/white/NulsWhitepaper1.1_Spanish.pdf" target="_blank">Español</a></li>
        <li><a href="https://nuls.io/api/v1/download/files/papers/white/NulsWhitepaper1.1_NL.pdf" target="_blank">Nederlands</a></li>
        <li><a href="https://nuls.io/api/v1/download/files/papers/white/NulsWhitepaper1.1_portuguese.pdf" target="_blank">Portuguese</a></li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
      }
    },
   methods:{
     toAbout(){
       this.dialogFormVisible = true;
     },
   },
  }
</script>

<style lang="less">
  .mission {
    background: url(./../../assets/images/mission-img.png) no-repeat right #fff;

    text-align: center;
    clear: none;
    @media (max-width: 768px){
      background: #fff;
    }
    .spaceship {
      min-height: 500px;
      padding:0;
      position: relative;
      @media (max-width: 768px){
        padding: 0;
      }
      .spaceship-content {
	      width: 100%;
        max-width: 1280px;
        margin: 0 auto;
         @media (max-width: 768px){
         	background: url(./../../assets/images/rocket.png) center no-repeat;
         }
        .h2, .mission-text, .mission-href {
          text-align: left;
        }
        .h2 {
         margin: 120px auto 60px;
          @media (max-width: 768px){
            text-align: center;
            margin: 0 auto 3rem;
          }
        }
        .mission-text {
          color: #445569;
          margin-bottom: 30px;
          @media (max-width: 768px){
            text-align: center;
            padding:0 0.5rem;
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }
        }
        .mission-href {
          margin-top: 60px;
          color: #59a500;
          @media (max-width: 768px){
            margin: 1.2rem 0 6rem;
            font-size: 1.2rem;
            text-align: center;
          }
        }
      }
      .img-right {
        position: absolute;
        top: -50px;
        right: 0;
        @media (max-width: 768px) {
          display: none;
        }
        img{
        }
      }
      @media (max-width: 768px) {
        width: auto;
        min-height: auto;
      }

    }

    .el-dialog__wrapper{
      .el-dialog{
        background-color: #0a2140;
        text-align: left;
        @media (max-width: 768px){
          width: 90%;
        }
        .el-dialog__header{
          .el-dialog__headerbtn{

          }
        }
        .el-dialog__body{
          p{
            font-size: 26px;
            line-height: 30px;
          }
          ul{
            margin: 0 0 0 20px;
            li{
              line-height: 26px;
              list-style-type: initial;
              padding: 10px 0 0 0;
              a{
                color: #ffffff;
              }

            }
          }
        }
      }
    }
  }
</style>
