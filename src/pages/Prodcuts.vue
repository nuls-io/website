<template>
  <div class="prodcuts">
    <div class="header-bg">
      <HeaderList></HeaderList>
      <h1 class="h1 cb">{{$t('products.product1')}}</h1>
    </div>

    <div class="prodcuts-info">
      <div class="list ecology">
        <h3>{{$t('products.ecology')}}</h3>
        <ul>
          <li>
            <img src="./../assets/images/1001.png"/>
            <p class="fw">{{$t('products.product2')}}<span>-{{$t('products.build')}}</span></p>
            <p>{{$t('products.product3')}}</p>
          </li>
          <li>
            <img src="./../assets/images/1002.png"/>
            <p class="fw">{{$t('products.product4')}}<span>-{{$t('products.build')}}</span></p>
            <p>{{$t('products.product5')}}</p>
          </li>
        </ul>
      </div>
      <div class="cb"></div>

      <div class="list ecology">
        <h3>{{$t('products.tool')}}</h3>
        <ul>
          <li class="cursor-p" @click="toUrl('https://nuls.io/newWallet')">
            <img src="./../assets/images/2001.png"/>
            <p class="fw">{{$t('products.product17')}}</p>
            <p>{{$t('products.product6')}}</p>
          </li>
          <li>
            <img src="./../assets/images/2001.png"/>
            <p class="fw">{{$t('products.product7')}}</p>
            <p>
              {{$t('products.product8')}}
              (<u class="cursor-p" @click="toUrl('https://nulscan.io/')">nulscan.io</u>)
              {{$t('products.product81')}}
              (<u class="cursor-p" @click="toUrl('https://nuls.world/')">nuls.world</u>)
              {{$t('products.product82')}}
            </p>
          </li>
          <li class="cursor-p" @click="toUrl('')">
            <img src="./../assets/images/2002.png"/>
            <p class="fw">{{$t('products.product9')}}</p>
            <p>{{$t('products.product10')}}</p>
          </li>
        </ul>
      </div>
      <div class="cb"></div>

      <div class="list ecology" v-show="false">
        <h3>Dapp</h3>
        <ul>
          <li class="cursor-p">
            <img src="./../assets/images/1001.png"/>
            <p class="fw">{{$t('products.product11')}}<span>-{{$t('products.test')}}</span></p>
            <p>{{$t('products.product12')}}</p>
          </li>
          <li class="cursor-p">
            <img src="./../assets/images/1001.png"/>
            <p class="fw">NULS Space<span></span></p>
            <p>{{$t('products.product16')}}</p>
          </li>
          <li class="cursor-p">
            <img src="./../assets/images/1001.png"/>
            <p class="fw">{{$t('products.product15')}}<span></span></p>
            <p>{{$t('products.product16')}}</p>
          </li>
        </ul>
      </div>
      <div class="cb"></div>

    </div>
    <Bottom></Bottom>
    <GoTop></GoTop>
  </div>
</template>

<script>
  import {getDownloadsList} from '@/api/httpData'
  import {API_ROOT} from '@/api/https'
  import {arrItemSort, tolink} from '@/util/util';
  import HeaderList from '@/components/HeaderList';
  import Bottom from '@/components/Bottom';
  import GoTop from '@/components/GoTop';

  export default {
    data() {
      return {}
    },
    watch: {},
    components: {
      HeaderList,
      Bottom,
      GoTop
    },
    mounted() {

    },
    methods: {
      /**
       * 连接跳转
       * @param url
       */
      toUrl(url){
        window.open(url);
      }
    }
  }
</script>

<style lang="less">
  @import url("../assets/css/style.less");
  .prodcuts {
    background-color: #FFFFFF;
    .header-bg {
      background: url("./../assets/images/map-bg.jpg") no-repeat;
      background-size: 100% 100%;
      max-height: 300px;
      @media (max-width: 768px) {
        max-height: 150px;
      }
      h1 {
        line-height: 6rem;
        @media (max-width: 768px) {
          line-height: 4rem;
          font-size: 1.5rem;
        }
      }
    }
    .prodcuts-info {
      max-width: 1280px;
      height: auto;
      margin: 0 auto 8rem;
      @media (max-width: 768px) {
        height: auto;
      }
      .list {
        margin: 100px auto 0;
        @media (max-width: 768px) {
          margin: 2rem auto 0;
        }
        h3 {
          font-size: 36px;
          color: #0b1422;
          opacity: 0.86;
          height: 40px;
          border-left: 3px solid #56c400;
          padding: 0 0 0 30px;
          @media (max-width: 768px) {
            font-size: 1.2rem;
            padding: 0 0 0 1rem;
            margin: 0 0 0 1rem;
            line-height: 2.6rem;
          }
        }
        ul {
          margin: 40px 0 0 0;
          @media (max-width: 768px) {
            margin: 1rem 0 0 0;
          }
          li {
            width: 375px;
            float: left;
            min-height: 430px;
            padding: 10px;
            box-shadow: 2px 4px 12px 2px #03143712;
            @media (max-width: 768px) {
              margin: 1rem auto 0;
              width: 90%;
              min-height: auto;
              float: none;
            }
            margin: 0 20px;
            &:first-child {
              margin: 0 20px 0 0;
              @media (max-width: 768px) {
                margin: 0 auto 1rem ;
              }
            }
            img {
              width: 350px;
              height: 220px;
              @media (max-width: 768px) {
                width: 100%;
                height: auto;
                text-align: center;
              }
            }
            p {
              margin: 10px 0 0 0;
              font-size: 16px;
              line-height: 28px;
              color: @color_1;
              u{
                color: #34ce57;
              }
            }
            .fw {
              font-size: 18px;
              span {
                color: @color_1;
                font-size: 16px;
                font-weight: 500;
              }
            }
          }
        }
      }

    }
  }

</style>
