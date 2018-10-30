<template>
  <div class="mission">
    <div class="spaceship">
      <div class="spaceship-content">
        <h2 class="h2">{{$t('home.nuls_do_title')}}</h2>
        <template v-for="site in 4">
          <div class="font-30 font-bold mission-text">{{$t('home.nuls_do_info'+site)}}</div>
        </template>
        <div class="font-24 color-green mission-href pointer" @click="toAbout">{{$t('home.nuls_do_info5_more')}}></div>
      </div>
      <div class="img-right"><img src="./../../assets/images/mission-img.png"></div>
    </div>

    <el-dialog title="" :visible.sync="dialogFormVisible">
      <p>Download the whitepaper in your preferred language choice</p>
      <ul>
        <li><a href="#">English</a></li>
        <li><a href="#">中文</a></li>
        <li><a href="#">Россия</a></li>
        <li><a href="#">한국</a></li>
        <li><a href="#">日本語</a></li>
        <li><a href="#">Deutsch</a></li>
        <li><a href="#">Français</a></li>
        <li><a href="#">Español</a></li>
        <li><a href="#">Nederlands</a></li>
        <li><a href="#">Portuguese</a></li>
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
    background-color: #fff;
    text-align: center;
    clear: none;
    .spaceship {
      min-height: 517px;
      padding:0;
      position: relative;
      @media (max-width: 768px){
        padding: 0;
      }
      .spaceship-content {
        max-width: 1280px;
        margin: 0 auto;
         @media (max-width: 768px){
         	background: url(./../../assets/images/rocket.png) center no-repeat;
         }
        .h2, .mission-text, .mission-href {
          text-align: left;
        }
        .h2 {
          margin-bottom: 60px;
          @media (max-width: 768px){
            text-align: center;
          }
        }
        .mission-text {
          color: #445569;
          margin-bottom: 5px;
          @media (max-width: 768px){
            text-align: center;
            padding: 0.5rem;
            font-size: 1.2rem;
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
        top: 80px;
        right: 0;
        @media (max-width: 768px) {
          display: none;
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
