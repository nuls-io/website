<template>
    <div class="team">
      <div class="team-header">
        <Header></Header>
      </div>
      <div class="team-info">
        <h1>{{$t('team.title')}}</h1>
        <p>{{$t('team.info')}}</p>
        <ul>
          <template v-for="site in teamList">
          <li>
            <h2><img :src=site.headUrl height="600" width="660"/></h2>
            <h3>{{site.ename}}</h3>
            <h4>{{site.desc}}</h4>
          </li>
          </template>
        </ul>
      </div>
      <Bottom></Bottom>
    </div>
</template>

<script>
  import {getTeamList} from '@/api/httpData';
  import {API_ROOT} from '@/api/https';
  import Header from '@/components/Header';
  import Bottom from '@/components/Bottom';

  export default {
    data() {
      return {
        teamList:[],
      }
    },
    components: {
      Header,
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
        getTeamList(siteId,pageSize,pageNum)
          .then(function (response) {
            //console.log(response)
            for (let list of response.data.data) {
              list.headUrl = API_ROOT + list.headUrl;
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
  .team{
    background-color: #FFFFFF;
    .team-header{
      background: url("./../assets/images/map-bg.png") no-repeat;
      background-size: 100% 100%;
      height: 500px;
    }
    .team-info{
      max-width: 1280px;
      margin:-400px auto 0;
      height: 800px;
      h1{
        font-size: 77px;
        line-height: 88px;
        text-align: center;
        color: #FFFFFF;
        padding: 30px 0;
      }
      p{
        width:810px;
        margin:0 auto;
        padding: 15px 0;
        font-size: 20px;
        text-align: center;
        line-height: 29px;
        color: #FFFFFF;
      }
      ul{
        li{
          width: 20%;
          float: left;
          margin: 2.5rem 2.5%;
          h2{
            width: 220px;
            height: 200px;
            -moz-box-shadow:2px 2px 5px #333333;
            -webkit-box-shadow:2px 2px 5px #333333;
            box-shadow:2px 2px 5px #333333;
            border-radius: 6px;
            text-align: center;
            margin: auto;
            img{
              width: 220px;
              height: 200px;
              border-radius: 6px;
            }
          }
          h3{
            font-size: 28px;
            color: #0a2140;
            line-height: 34px;
            text-align: center;
          }
          h4{
            font-size: 16px;
            color: #56c400;
            line-height: 25.89px;
            text-align: center;
          }
        }
      }
    }
  }

</style>
