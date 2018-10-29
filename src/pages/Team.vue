<template>
  <div class="team">
    <div class="team-header">
      <HeaderList></HeaderList>
    </div>
    <div class="team-info">
      <h1 class="h1">{{$t('team.title')}}</h1>
      <p>{{$t('team.info')}}</p>
      <ul>
        <li v-for="site in teamList">
          <h2><img :src=site.headUrl height="600" width="660"/></h2>
          <h3>{{site.ename}}</h3>
          <h4>{{site.desc}}</h4>
        </li>
      </ul>
      <h2 class="h2 cb">Angel Investor</h2>
      <ul>
        <li v-for="site in angelList">
          <h2><img :src=site.headUrl height="600" width="660"/></h2>
          <h3>{{site.ename}}</h3>
          <h4>{{site.desc}}</h4>
        </li>
      </ul>
      <h2 class="h2 cb">Advisor</h2>
      <ul>
        <li v-for="site in advisorList">
          <h2><img :src=site.headUrl height="600" width="660"/></h2>
          <h3>{{site.ename}}</h3>
          <h4>{{site.desc}}</h4>
        </li>
      </ul>
      <h2 class="h2 cb">Community Member</h2>
      <ul>
        <li v-for="site in communityList">
          <h2><img :src=site.headUrl height="600" width="660"/></h2>
          <h3>{{site.ename}}</h3>
          <h4>{{site.desc}}</h4>
        </li>
      </ul>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import {getTeamList} from '@/api/httpData';
  import {API_ROOT} from '@/api/https';
  import {arrItemSort} from '@/util/util';
  import HeaderList from '@/components/HeaderList';
  import Bottom from '@/components/Bottom';

  export default {
    data() {
      return {
        teamList: [],
        angelList: [],
        advisorList: [],
        communityList: [],
      }
    },
    components: {
      HeaderList,
      Bottom,
    },
    mounted() {
      this.getTeamList(1, 100, 1)
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
        getTeamList(siteId, pageSize, pageNum)
          .then(function (response) {
            //console.log(response);
            for (let list of response.data) {
              list.headUrl = API_ROOT + list.headUrl;
              if (list.types === '1') {
                that.teamList.push(list)
              } else if (list.types === '2') {
                that.angelList.push(list)
              } else if (list.types === '3') {
                that.advisorList.push(list)
              } else {
                that.communityList.push(list)
              }
            }
            setTimeout(() => {
              let teamListSort = arrItemSort(that.teamList,"id",0);
              let angelListSort = arrItemSort(that.angelList,"id",0);
              let advisorListSort = arrItemSort(that.advisorList,"id",0);
              let communityListSort = arrItemSort(that.communityList,"id",0);
              that.teamList  = teamListSort;
              that.angelList  = angelListSort;
              that.advisorList  = advisorListSort;
              that.communityList  = communityListSort;
            }, 100);

          })
          .catch(function (error) {
            console.log(error);
          });
      },
    }
  }
</script>

<style lang="less">
  .team {
    background-color: #FFFFFF;
    .team-header {
      background: url("./../assets/images/map-bg.png") no-repeat;
      background-size: 100% 100%;
      min-height: 500px;
      width: 100%;
      @media (max-width: 768px) {
        min-height: 400px;
      }
    }
    .team-info {
      max-width: 1280px;
      margin: -400px auto 0;
      min-height: 180rem;
      @media (max-width: 768px) {
        min-height: auto;
        margin: -20rem auto 5rem;
      }
      h1 {
        @media (max-width: 768px) {
          margin: 0 0 0 0;
        }
      }
      p {
        max-width: 810px;
        margin: 0 auto;
        padding: 15px 0;
        font-size: 20px;
        text-align: center;
        line-height: 29px;
        color: #FFFFFF;
        @media (max-width: 768px) {
          font-size: 16px;
          padding: 10px;
        }
      }
      ul {
        li {
          width: 20%;
          float: left;
          height: 290px;
          margin: 2.5rem 2.5%;
          @media (max-width: 768px) {
            float: none;
            width: 80%;
            margin: 1rem 10%;
          }
          h2 {
            width: 220px;
            height: 200px;
            -moz-box-shadow: 2px 2px 5px #333333;
            -webkit-box-shadow: 2px 2px 5px #333333;
            box-shadow: 2px 2px 5px #333333;
            border-radius: 6px;
            text-align: center;
            margin: auto;
            img {
              width: 220px;
              height: 200px;
              border-radius: 6px;
            }
          }
          h3 {
            font-size: 28px;
            color: #0a2140;
            line-height: 34px;
            text-align: center;
          }
          h4 {
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
