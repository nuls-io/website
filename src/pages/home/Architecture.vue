<template>
  <div class="architecture cb">
    <div class="architecture-content">
      <h2 class="h2">{{$t('home.architecture_title')}}</h2>
      <div class="architecture-info flex">
        <ul>
          <li :class="{ active: isActive('logicLayer') }" @mouseover="setActive('logicLayer')">
            <h4 class="h4">{{$t('home.architecture_info_h4_1')}}</h4>
            <p>{{$t('home.architecture_info_p_1')}}</p>
            <p>{{$t('home.architecture_info_p_11')}}</p>
          </li>

          <li :class="{ active: isActive('moduleLayer') }" @mouseover="setActive('moduleLayer')">
            <h4 class="h4">{{$t('home.architecture_info_h4_2')}}</h4>
            <p>{{$t('home.architecture_info_p_2')}}</p>
            <p>{{$t('home.architecture_info_p_21')}}</p>
          </li>

          <li :class="{ active: isActive('chainLayer') }" @mouseover="setActive('chainLayer')">
            <h4 class="h4">{{$t('home.architecture_info_h4_3')}}</h4>
            <p>{{$t('home.architecture_info_p_3')}}</p>
            <p>{{$t('home.architecture_info_p_31')}}</p>
          </li>

          <li :class="{ active: isActive('crossChain') }" @mouseover="setActive('crossChain')">
            <h4 class="h4">{{$t('home.architecture_info_h4_4')}}</h4>
            <p>{{$t('home.architecture_info_p_4')}}</p>
            <p>{{$t('home.architecture_info_p_41')}}</p>
          </li>
        </ul>
        <div class="img">
          <img :class="{ active: isActive('logicLayer') }" src="../../assets/images/logic-layer.png" />
          <img :class="{ active: isActive('moduleLayer') }" src="../../assets/images/module-layer.png" />
          <img :class="{ active: isActive('chainLayer') }" src="../../assets/images/chain-layer.png" />
          <img :class="{ active: isActive('crossChain') }" src="../../assets/images/cross-chain.png" />
        </div>
      </div>

      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <h4 class="h4">{{$t('home.architecture_info_h4_1')}}</h4>
            <p>{{$t('home.architecture_info_p_1')}}</p>
            <p>{{$t('home.architecture_info_p_11')}}</p>
          </template>
          <img src="../../assets/images/logic-layer.png" />
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <h4 class="h4">{{$t('home.architecture_info_h4_2')}}</h4>
            <p>{{$t('home.architecture_info_p_2')}}</p>
            <p>{{$t('home.architecture_info_p_21')}}</p>
          </template>
          <img src="../../assets/images/module-layer.png" />
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <h4 class="h4">{{$t('home.architecture_info_h4_3')}}</h4>
            <p>{{$t('home.architecture_info_p_3')}}</p>
            <p>{{$t('home.architecture_info_p_31')}}</p>
          </template>
          <img  src="../../assets/images/chain-layer.png" />
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <h4 class="h4">{{$t('home.architecture_info_h4_4')}}</h4>
            <p>{{$t('home.architecture_info_p_4')}}</p>
            <p>{{$t('home.architecture_info_p_41')}}</p>
          </template>
          <img src="../../assets/images/cross-chain.png" />
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 'logicLayer',
      };
    },
    mounted() {
    },
    methods: {
      setActive(key) {
        this.active = key;
      },
      isActive(key) {
        return this.active === key;
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .architecture {
    width: 100%;
    background-color: #ebf4f9;
    @media (max-width: 768px) {
      min-height: 680px;
    }
    .architecture-content{
      max-width: 1280px;
      margin: 0 auto;
      @media (max-width: 768px) {
      	margin: 0 auto;
      }
      h2 {
        padding: 120px 0 80px;
        margin: 0 auto;
        @media (max-width: 768px) {
         padding: 5rem 0 0 0;
        }
      }
      .architecture-info {
        padding-bottom:120px;
        @media (max-width: 768px) {
          display: none;
        }
        ul {
          width: 420px;
          @media (max-width: 768px) {
            float: none;
            width: 100%;
          }
          li {
            opacity: 0.6;
            padding-left: 14px;
            margin: 0 0 20px 0;
            border-left: 6px solid #56c400;
            &.active{
              opacity: 1;
              border-left: 6px solid #56c400;
            }
            &:hover {
              cursor: pointer;
            }
            h4 {
              font-size: 30px;
              letter-spacing: 1px;
              line-height: 34px;
              padding-bottom: 6px;
              color: #445569;
              font-weight: bold;
              text-align: left;
            }
            p {
              font-size: 16px;
              color: #445569;
            }
          }
          .li-img{
            width: 100%;
            margin: 0 auto;
            display: none;
            &.active{
              -webkit-transition: opacity 0.2s ease-in-out;
              transition: opacity 1s ease-in-out;
              display: block;
            }
          }
        }
        .img {
          position: relative;
          width: 850px;
          background-color: #f8fdff;
          @media (max-width: 768px) {
            display: none;
          }
          img{
           width: 90%;
            opacity: 0;
            position: absolute;
            left: 0;
            -webkit-transition: opacity 0.2s ease-in-out;
            transition: opacity 1s ease-in-out;
            margin: auto;
            bottom: 0;
            top: 0;
            &.active{
              opacity: 1;
            }
          }
        }
      }
      .el-collapse{
        display: none;
        @media (max-width: 768px) {
          display: block;
          border: 0;
        }
        .el-collapse-item{
          .el-collapse-item__header{
            height: auto;
            border-left: 3px solid #BAE797;
            margin:0 10px 20px 15px;
            padding:0 0 15px 10px;
            @media (max-width: 768px) {
            	margin:0 0.5rem 1rem 1.25rem;
              padding:0 0 0.75rem 0.8rem;
            }
            h4,p{
              color: #0a2140;
            }
            h4{
              font-size: 34px;
              font-weight: 300;
              @media (max-width: 768px){
              	color: #445569;
                font-size: 1.8rem;
              }
            }
            p{
              line-height: 25px;
              @media (max-width: 768px){
                font-size: 1.2rem;
              }
            }
            i{
              font-size: 0;
            }
          }
          .is-active{
            border-left-color:#34ce57;
          }
          .el-collapse-item__wrap{
            background-color: transparent;
            .el-collapse-item__content{
              background-color: transparent;
              @media (max-width: 768px) {
              	padding: 0 1.25rem;
              }
              img{
                width: 100%;
              }
            }
          }

        }
      }
    }
  }
</style>
