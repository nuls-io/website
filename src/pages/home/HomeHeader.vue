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
      </el-col>
      <el-col :xs="0" :sm="8">
        <div class="slabs">
          <img src="./../../assets/images/slabs.svg">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import HeaderList from '@/components/HeaderList';
  export default {
    components: {
      HeaderList,
    },
    methods: {

      /**
       *  视频跳转
       */
      toVedio(){
        console.log("toVedio")
      }
    }
  }
</script>

<style lang="less">
  .homeHeader{
    background: url("./../../assets/images/wallet-section-bg.jpg") 100% 100%;
    width: 100%;
    min-height: 500px;
    .h1{
      line-height: 8rem;
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
          margin: 20px auto 0;
        }
        &:hover {
          cursor: pointer;
          border: 1px solid #8fe400;
          background:#8fe400;
        }
        &:focus {
          cursor: pointer;
          border: 1px solid #56c400;
          background:#56c400;
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
          margin: 12px 0 0 -15px;
          position: relative;
          float: left;
        }
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
  }
</style>
