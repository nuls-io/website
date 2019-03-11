<template>
  <div class="team">
    <div class="header-bg">
      <HeaderList></HeaderList>
      <h1 class="h1 cb">{{$t('team.title')}}</h1>
      <p class="w_1000 font-20">{{$t('team.info')}}</p>
    </div>
    <div class="team-info" v-loading="teamLoading">
      <ul>
        <li v-for="site in teamList">
          <h2 class="cursor-p" @click="tolink(site.linkedin)"><img :src=site.headUrl height="600" width="660"/></h2>
          <h3>{{site.ename}}</h3>
          <h4>{{site.positions}}</h4>
        </li>
      </ul>
      <h2 class="h2 cb" v-show="angelList.length > 0">{{$t('team.angel')}}</h2>
      <ul>
        <li v-for="site in angelList">
          <h2 class="cursor-p" @click="tolink(site.linkedin)"><img :src=site.headUrl height="600" width="660"/></h2>
          <h3>{{site.ename}}</h3>
          <h4>{{site.positions}}</h4>
        </li>
      </ul>
      <h2 class="h2 cb" v-show="communityList.length > 0">{{$t('team.craft')}}</h2>
      <ul>
        <li v-for="site in communityList">
          <h2 class="cursor-p" @click="tolink(site.linkedin)"><img :src=site.headUrl height="600" width="660"/></h2>
          <h3>{{site.ename}}</h3>
          <h4>{{site.positions}}</h4>
        </li>
      </ul>

      <h2 class="h2 cb" v-show="ambList.length > 0">{{$t('team.amb')}}</h2>
      <ul>
        <li v-for="site in ambList">
          <h2 class="cursor-p" @click="tolink(site.linkedin)"><img :src=site.headUrl height="600" width="660"/></h2>
          <h3>{{site.ename}}</h3>
          <h4>{{site.positions}}</h4>
        </li>
      </ul>

      <h2 class="h2 cb" v-show="advisorList.length > 0">{{$t('team.advisors')}}</h2>
      <ul>
        <li v-for="site in advisorList">
          <h2 class="cursor-p" @click="tolink(site.linkedin)"><img :src=site.headUrl height="600" width="660"/></h2>
          <h3>{{site.ename}}</h3>
          <h4>{{site.positions}}</h4>
        </li>
      </ul>
    </div>
    <Bottom></Bottom>
    <GoTop></GoTop>
  </div>
</template>

<script>
  import {getTeamList} from '@/api/httpData';
  import {API_ROOT} from '@/api/https';
  import {arrItemSort, tolink} from '@/util/util';
  import HeaderList from '@/components/HeaderList';
  import Bottom from '@/components/Bottom';
  import GoTop from '@/components/GoTop';

  export default {
    data() {
      return {
        teamLoading: true,
        //核心团队
        teamList: [],
        //天使投资
        angelList: [],
        //社区团队
        advisorList: [],
        //大使
        ambList: [],
        //顾问
        communityList: [],
        language: sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') === 'zh' ? 1 : 2 : 2,
      }
    },
    watch: {
      language(curVal, oldVal) {
        if (curVal.toString() !== oldVal.toString()) {
          this.getTeamList(1, 100, 1)
        }
      },
    },
    components: {
      HeaderList,
      Bottom,
      GoTop,
    },
    mounted() {
      setInterval(() => {
        this.language = sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') === 'zh' ? 1 : 2 : 2
      }, 100);
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
        that.teamList = [];
        that.angelList = [];
        that.advisorList = [];
        that.ambList = [];
        that.communityList = [];
        getTeamList(siteId, pageSize, pageNum)
          .then(function (response) {
            //console.log(response);
            for (let list of response.data) {
              list.headUrl = API_ROOT + list.headUrl;
              list.positions = that.language === 1 ? list.user_zh_position : list.position;
              if (list.types === '1') {
                that.teamList.push(list)
              } else if (list.types === '2') {
                that.angelList.push(list)
              } else if (list.types === '3') {
                that.advisorList.push(list)
              } else if (list.types === '4') {
                that.communityList.push(list)
              } else {
                that.ambList.push(list);
              }
            }
            setTimeout(() => {
              let teamListSort = arrItemSort(that.teamList, "id", 0);
              let angelListSort = arrItemSort(that.angelList, "id", 0);
              let advisorListSort = arrItemSort(that.advisorList, "id", 0);
              let ambListSort = arrItemSort(that.ambList, "id", 0);
              let communityListSort = arrItemSort(that.communityList, "id", 0);
              that.teamList = teamListSort;
              that.angelList = angelListSort;
              that.advisorList = advisorListSort;
              that.ambList = ambListSort;
              that.communityList = communityListSort;
              that.teamLoading = false;
            }, 100);

          })
          .catch(function (error) {
            console.log(error);
          });
      },

      /**
       * 打开url
       * @param url
       */
      tolink(url) {
        tolink(url)
      }
    }
  }
</script>

<style lang="less">
  @import url("../assets/css/style.less");

  .team {
    background-color: #FFFFFF;
    .header-bg {
      .font-20 {
        color: @color;
        @media (max-width: 768px) {
          padding: 0 0.5rem;
        }
      }
    }
    .team-info {
      max-width: 1280px;
      margin: -5% auto 900px;
      height: auto;
      @media (max-width: 768px) {
        min-height: auto;
        margin: -5rem auto 5rem;
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
            box-shadow: 2px 4px 12px 2px #03143712;
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
            margin: 10px 0 0 0;
            text-align: center;
          }
          h4 {
            font-size: 16px;
            color: #56c400;
            line-height: 25.89px;
            text-align: center;
            @media (max-width: 768px) {
              font-size: 0.8rem;
              line-height: 1rem;
            }
          }
        }
      }
      .el-loading-mask {
        margin-top: 25%;
        background-color: transparent;
      }
    }
  }

</style>
