<template>
  <div class="introduction">
    <Header></Header>
    <div class="introduction-info">
      <h1 class="h1">Whitepaper add Yellowpaper</h1>
      <ul>
        <li>
          <p>The NULS whitepaper is a authoritative report that addresses what NULS goal is and how it plans to achieve
            it.</p>
          <b-button variant="success">Download</b-button>
        </li>
        <li>
          <p>The NULS whitepaper is a authoritative report that addresses what NULS goal is and how it plans to achieve
            it.</p>
          <b-button variant="success">Download</b-button>
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
  .introduction {
    background-color: #FFFFFF;
    .header {
      .navbar-dark {
        background: transparent;
        @media (max-width: 768px) {
          background: #08234D;
        }
        .logo {
          background: url("../assets/images/nuls-logo-black.png") no-repeat;
          @media (max-width: 768px) {
            background: url("../assets/images/nuls-logo-white.png") no-repeat;
            background-size: 100%;
          }
        }
        .navbar-nav {
          .nav-item {
            .nav-link {
              color: #0a2140;
              @media (max-width: 768px) {
                color: #FFFFFF;
              }
            }
          }
        }
      }
    }
    .introduction-info {
      height: 40rem;
      h1{
        font-size: 50px;
        color: #0b1422;
        opacity: 0.86;
        text-align: center;
        margin: 30px;
      }
      ul{
        width: 80%;
        margin: auto;
        li{
          width: 40%;
          float: left;
          background-color: #c1c1c1;
          margin-left: 20px;
          text-align: center;
          padding: 20px;
          p{
            color: #0b1422;
            opacity: 0.86;
            padding: 10px;
          }

        }
      }
    }
  }

</style>
