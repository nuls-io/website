<template>
  <div class="homeHeader">
    <HeaderList></HeaderList>
    <h1 class="cb h1">
      {{$t('home.top_title')}}
    </h1>
    <el-row :gutter="0" class="centers">
      <el-col :xs="0" :sm="8">
        <div class="cube">
          <img src="./../../assets/images/cube.svg">
        </div>
      </el-col>
      <el-col :xs="24" :sm="8">
        <div class="vedio">
          <div class="vedio-info" @click="toVedio">
            <p class="font-18 font-bold">{{$t('home.vedio_title')}}</p><img src="./../../assets/images/vedio.png"/>
          </div>
        </div>

        <div class="top-slabs">
          <img src="./../../assets/images/slabs.svg">
        </div>
      </el-col>
      <el-col :xs="0" :sm="8">
        <div class="slabs">
          <img src="./../../assets/images/slabs.svg">
        </div>
      </el-col>
    </el-row>

    <el-dialog title="" :visible.sync="videoDialog" width="1024" center>
      <div class="pc">
        <iframe width="1024" height="576" src="https://www.youtube.com/embed/2rgcxxaJrWs" frameborder="0"
                allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="iphone">
        <iframe width="100%" height="320" src="https://www.youtube.com/embed/2rgcxxaJrWs" frameborder="0"
                allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import HeaderList from '@/components/HeaderList';

  export default {
    data() {
      return {
        videoDialog: false
      };
    },
    components: {
      HeaderList,
    },
    methods: {

      /**
       *  视频跳转
       */
      toVedio() {
        this.videoDialog = true;
      }
    }
  }
</script>

<style lang="less">
  .homeHeader {
    background: url("./../../assets/images/wallet-section-bg.jpg") 100% 100%;
    width: 100%;
    min-height: 500px;
    .h1 {
      padding: 60px 0 0 0 ;
      @media (max-width: 768px) {
        padding: 0;
      }
    }
    .vedio {
      .vedio-info {
        width: 200px;
        height: 50px;
        border: 1px solid #8fe400;
        border-radius: 50px;
        text-align: center;
        line-height: 50px;
        margin: 100px auto 0;
        @media (max-width: 768px) {
          margin: 1rem auto 0;
        }
        &:hover {
          cursor: pointer;
          border: 1px solid #8fe400;
          background: #8fe400;
        }
        &:focus {
          cursor: pointer;
          border: 1px solid #56c400;
          background: #56c400;
        }
        p {
          width: 160px;
          float: left;
        }
        img {
          width: 20px;
          height: 20px;
          line-height: 35px;
          padding: 5px 0 0 0;
          z-index: 2;
          display: block;
          margin: 12px 0 0 -5px;
          position: relative;
          float: left;
        }
      }

    }
    .top-slabs {
      display: none;
      @media (max-width: 768px) {
        display: block;
        width: 70%;
        margin: 1rem auto 0;
      }
    }
    .cube {
      width: 300px;
    }
    .slabs {
      float: right;
      width: 300px;
      @media (max-width: 768px) {
        display: none;
      }
    }

    .el-dialog__wrapper {
      .el-dialog {
        width: 1024px;
        height: 500px;
        background: transparent;
        @media (max-width: 768px) {
          width: 100%;
          height: 200px;
        }
        .el-dialog__header {
          .el-dialog__headerbtn {
            background-color: #34ce57;
            margin: 10px -40px 0 0;
            border-radius: 10px;
            width: 20px;
            height: 20px;
            @media (max-width: 768px) {
              margin: 10px -15px 0 0;
            }
            .el-dialog__close {
              color: #ffffff;
              line-height: 20px;
            }
          }
        }
        .el-dialog__body {
          @media (max-width: 768px) {
            padding: 0;
          }
        }
      }
    }
  }
</style>
