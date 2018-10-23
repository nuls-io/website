<template>
  <div class="downloads">
    <div class="header-bg">
      <Header></Header>
      <h1 class="h1 cb">Downloads</h1>
    </div>

    <div class="downloads-info">
      <ul>
        <li>
          <h3>Wallet</h3>
          <p>
            <span>NULS wallet is developed by NULS core technical team Supported on various platforms</span>
            <el-button type="success">Downloads</el-button>
          </p>
        </li>
        <li>
          <h3>Data.zip</h3>
          <p>
            <span>This is a zip package containing the operation manual on the wallet related to the smart contract, Developer's documentation for smart contract, smart contract plugin and operation manual on the IDEA development tool</span>
            <el-button type="success">Downloads</el-button>
          </p>
        </li>
        <li>
          <h3>Whitepaper and Yellowpaper</h3>
          <p>
            <span>This is a zip package containing the operation manual on the wallet related to the smart contract, Developer's documentation for smart contract, smart contract plugin and operation manual on the IDEA development tool</span>
            <el-button type="success">Downloads</el-button>
          </p>
        </li>
      </ul>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Bottom from '@/components/Bottom';

  export default {
    components: {
      Header,
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
      height: 300px;
      h1 {
        line-height: 9rem;
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
              min-height: auto;
              width: auto;
            }
            span{
              color: #0b1422;
              opacity: 0.86;
              display: block;
              width: 85%;
              float: left;
            }
            button{
              display: block;
              margin: 1rem auto;
              width: 15%;
              float: left;
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
