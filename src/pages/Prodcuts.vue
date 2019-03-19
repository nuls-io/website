<template>
  <div class="prodcuts">
    <div class="header-bg">
      <HeaderList></HeaderList>
      <h1 class="h1 cb">NULS 2.0 Alpa版本已发布</h1>
    </div>

    <div class="prodcuts-info">
      <div class="list ecology">
        <h3>生态</h3>
        <ul>
          <li>
            <img src="./../assets/images/1001.png" />
            <p class="fw">链工厂<span>-敬请期待</span></p>
            <p>通过NULS链工厂，企业/个人不再需要深入钻研区块链底层技术。仅需进行简单的配置工作，就能得到一条完全属于自己的区块链</p>
          </li>
          <li>
            <img src="./../assets/images/1002.png" />
            <p class="fw">跨链方案<span>-敬请期待</span></p>
            <p>通过NULS链工厂，企业/个人不再需要深入钻研区块链底层技术。仅需进行简单的配置工作，就能得到一条完全属于自己的区块链</p>
          </li>
          <li>
            <img src="./../assets/images/1001.png" />
            <p class="fw">模块仓库<span>-敬请期待</span></p>
            <p>通过NULS链工厂，企业/个人不再需要深入钻研区块链底层技术。仅需进行简单的配置工作，就能得到一条完全属于自己的区块链</p>
          </li>
        </ul>
      </div>
      <div class="cb"></div>

      <div class="list ecology">
        <h3>工具</h3>
        <ul>
          <li>
            <img src="./../assets/images/1001.png" />
            <p class="fw">钱包</p>
            <p>NULS Wallets由NULS核心团队和Code Craft Council开发。此外我们还提供第三方钱包。使用第三方钱包时，您需要负责私钥的安全</p>
          </li>
          <li>
            <img src="./../assets/images/1001.png" />
            <p class="fw">浏览器</p>
            <p>NULS 浏览器由NULS核心团队和Code Craft Council开发</p>
          </li>
          <li>
            <img src="./../assets/images/1001.png" />
            <p class="fw">测试网</p>
            <p>NULS测试网是NULS技术团队搭建的，测试网全面模拟了主网的运行情况，便于测试NULS的新特性，也方便社区用户体验NULS各个产品的功能</p>
          </li>
        </ul>
      </div>
      <div class="cb"></div>

      <div class="list ecology">
        <h3>Dapp</h3>
        <ul>
          <li>
            <img src="./../assets/images/1001.png" />
            <p class="fw">竞技<span>-测试网</span></p>
            <p>竞技DAPP简介</p>
          </li>
          <li>
            <img src="./../assets/images/1001.png" />
            <p class="fw">NULS Space<span></span></p>
            <p>NULS Space DAPP简介</p>
          </li>
          <li>
            <img src="./../assets/images/1001.png" />
            <p class="fw">投票<span></span></p>
            <p>NULS Space DAPP简介</p>
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
    methods: {}
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
            min-height: 390px;
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
