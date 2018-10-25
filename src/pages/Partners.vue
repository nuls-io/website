<template>
    <div class="partners">
      <div class="partners-header">
        <HeaderList></HeaderList>
      </div>
      <div class="partners-info">
        <h1 class="h1">{{$t('partners.title')}}</h1>
        <p>{{$t('partners.info')}}</p>
      </div>
      <div class="partners-list">
        <h2 class="h2">{{$t('nav.about3')}}</h2>
        <ul>
          <li>
            <a href="https://www.bitmain.com/" target="_blank"><img src="./../assets/images/1.png"  /></a>
          </li>
          <li>
            <a href="https://www.bitmain.com/" target="_blank"><img src="./../assets/images/2.png"  /></a>
          </li>
          <li>
            <a href="https://www.bitmain.com/" target="_blank"><img src="./../assets/images/3.png"  /></a>
          </li>
        </ul>
      </div>
      <div class="media-list cb">
        <h2 class="h2">Media Partners</h2>
        <ul>
          <li>
            <a href="https://www.bitmain.com/" target="_blank"><img src="./../assets/images/1.png"  /></a>
          </li>
          <li>
            <a href="https://www.bitmain.com/" target="_blank"><img src="./../assets/images/2.png"  /></a>
          </li>
          <li>
            <a href="https://www.bitmain.com/" target="_blank"><img src="./../assets/images/3.png"  /></a>
          </li>
        </ul>
      </div>
      <div class="platforms-list cb">
        <h2 class="h2">Platforms</h2>
        <ul>
          <li>
            <a href="https://www.bitmain.com/" target="_blank"><img src="./../assets/images/1.png"  /></a>
          </li>
          <li>
            <a href="https://www.bitmain.com/" target="_blank"><img src="./../assets/images/2.png"  /></a>
          </li>
          <li>
            <a href="https://www.bitmain.com/" target="_blank"><img src="./../assets/images/3.png"  /></a>
          </li>
        </ul>
      </div>
      <Bottom></Bottom>
    </div>
</template>

<script>
  import axios from 'axios'
  import HeaderList from '@/components/HeaderList';
  import Bottom from '@/components/Bottom';

  export default {
    data() {
      return {
        teamList:[],
      }
    },
    components: {
      HeaderList,
      Bottom,
    },
    mounted() {
      this.getTeamList(1, 10, 1)
    },
    methods: {
      /**
       * 获取团队列表
       * @param siteId
       * @param pageSize
       * @param pageNum
       */
      getTeamList(siteId, pageSize, pageNum) {
        let that = this;
        axios.get('http://192.168.1.130:8080/hexin.html?siteId=' + siteId + '&pageSize=' + pageSize + '&pageNum=' + pageNum)
          .then(function (response) {
            console.log(response);
            for (let list of response.data.data) {
              list.headUrl = 'http://192.168.1.130:8080' + list.headUrl;
            }
            that.teamList = response.data.data;
            console.log(that.teamList)
          })
          .catch(function (error) {
            console.log(error);
          });

      },
    }
  }
</script>

<style lang="less">
  .partners{
    background-color: #FFFFFF;
    .partners-header{
      background: url("./../assets/images/map-bg.png") no-repeat;
      background-size: 100% 100%;
      height: 500px;
      @media (max-width: 768px) {
        height: 300px;
      }
    }
    .partners-info{
      max-width: 1280px;
      margin:-240px auto 0;
      height: 400px;
      @media (max-width: 768px) {
        height: 260px;
      }
      h1{
        padding: 30px 0;
        @media (max-width: 768px) {
          padding: 10px 0;
        }
      }
      p{
        max-width:810px;
        margin:0 auto;
        padding: 15px 0;
        font-size: 20px;
        text-align: center;
        line-height: 29px;
        color: #FFFFFF;
        @media (max-width: 768px) {
          padding: 10px;
        }
      }
    }
    .partners-list,.media-list,.platforms-list{
      max-width: 1280px;
      margin: 20px auto;
      h2{
        padding: 50px 0 20px;
      }
      ul{
        li{
          width: 20%;
          float: left;
          margin: 10px 2%;
          @media (max-width: 768px) {
            width: 120px;
          }
          img{
            width: 100%;
          }
        }
      }
    }
    .platforms-list{
      min-height: 300px;
    }
  }

</style>
