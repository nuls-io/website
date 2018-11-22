<template>
    <div class="partners">
      <div class="partners-header">
        <HeaderList></HeaderList>
      </div>
      <div v-loading="partnersLoading">
        <div class="partners-info">
          <h1 class="h1">{{$t('partners.title')}}</h1>
          <p>{{$t('partners.info')}}</p>
        </div>
        <div class="investment-list">
          <h2 class="h2">{{$t('partners.name0')}}</h2>
          <ul>
            <li v-for="site in investmentList">
              <a :href="site.link" target="_blank"><img :src="site.url"  /></a>
            </li>
          </ul>
        </div>
        <div class="ecological-list cb">
          <h2 class="h2">{{$t('partners.name1')}}</h2>
          <ul>
            <li v-for="site in ecologicalList">
              <a :href="site.link" target="_blank"><img :src="site.url"  /></a>
            </li>
          </ul>
        </div>
        <div class="strategic-list cb">
          <h2 class="h2">{{$t('partners.name2')}}</h2>
          <ul>
            <li v-for="site in strategicList">
              <a :href="site.link" target="_blank"><img :src="site.url"  /></a>
            </li>
          </ul>
        </div>
        <div class="media-list cb"  v-show="mediaList.length > 0">
          <h2 class="h2">{{$t('partners.name3')}}</h2>
          <ul>
            <li v-for="site in mediaList">
              <a :href="site.link" target="_blank"><img :src="site.url"  /></a>
            </li>
          </ul>
        </div>
        <div class="platforms-list cb" v-show="platformsList.length > 0">
          <h2 class="h2">{{$t('partners.name4')}}</h2>
          <ul>
            <li v-for="site in platformsList">
              <a :href="site.link" target="_blank"><img :src="site.url"  /></a>
            </li>
          </ul>
        </div>
      </div>
      <Bottom></Bottom>
      <GoTop></GoTop>
    </div>
</template>

<script>
  import {getPartnerList} from '@/api/httpData';
  import {API_ROOT} from '@/api/https';
  import {arrItemSort} from '@/util/util';
  import HeaderList from '@/components/HeaderList';
  import Bottom from '@/components/Bottom';
  import GoTop from '@/components/GoTop';

  export default {
    data() {
      return {
        partnersLoading:true,
        investmentList:[],
        ecologicalList:[],
        strategicList:[],
        mediaList:[],
        platformsList:[],
      }
    },
    components: {
      HeaderList,
      Bottom,
      GoTop,
    },
    mounted() {
      this.getPartnerList(2, 100, 1)
    },
    methods: {
      /**
       * 获取团队列表
       * @param siteId
       * @param pageSize
       * @param pageNum
       */
      getPartnerList(siteId, pageSize, pageNum) {
        let that = this;
        getPartnerList(siteId,pageSize,pageNum)
          .then(function (response) {
            //console.log(response);
            for (let list of response.data.contentList) {
              list.url = API_ROOT + list.url;
              if(list.types === '1'){
                that.investmentList.push(list)
              }else if(list.types === '2'){
                that.ecologicalList.push(list)
              }else if(list.types === '3'){
                that.strategicList.push(list)
              }else if(list.types === '4'){
                that.mediaList.push(list)
              }else {
                that.platformsList.push(list)
              }
            }
            setTimeout(() => {
              let investmentListSort = arrItemSort(that.investmentList,"id",0);
              let ecologicalListSort = arrItemSort(that.ecologicalList,"id",0);
              let strategicListSort = arrItemSort(that.strategicList,"id",0);
              let mediaListSort = arrItemSort(that.mediaList,"id",0);
              let platformsListSort = arrItemSort(that.platformsList,"id",0);
              that.investmentList  = investmentListSort;
              that.ecologicalList  = ecologicalListSort;
              that.strategicList  = strategicListSort;
              that.mediaList  = mediaListSort;
              that.platformsList  = platformsListSort;
              that.partnersLoading = false;
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
  .partners{
    background-color: #FFFFFF;
    .partners-header{
      background: url("./../assets/images/map-bg.jpg") no-repeat;
      background-size: 100% 100%;
      height: 500px;
      @media (max-width: 768px) {
        height: 25rem;
      }
    }
    .partners-info{
      max-width: 1280px;
      margin:-340px auto 0;
      height: auto;
      @media (max-width: 768px) {
        height: 18rem;
      }
      h1{
        padding: 30px 0;
        @media (max-width: 768px) {
          padding: 0;
          margin: 2rem auto 1rem;
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
          padding: 0.5rem;
          font-size: 1rem;
        }
      }
    }
    .investment-list,.ecological-list,.strategic-list,.media-list,.platforms-list{
      max-width: 1280px;
      margin: 0 auto;
      position: relative;
      h2{
        height: 200px;
        line-height: 200px;
        margin: 0 auto;
        @media (max-width: 768px) {
          height: auto;
          line-height: 1rem;
          margin: 0 auto 2rem;
          padding: 3rem 0 0 0;
        }
      }
      ul{
        li{
          width: 20%;
          height: 75px;
          float: left;
          margin: 10px 2%;
          @media (max-width: 768px) {
            width: 145px;
            height: 40px;
            margin: 0.5rem 1rem;
          }
          img{
            width: 100%;
          }
        }
      }
    }
    .investment-list{
      margin: 80px auto 0;
      @media (max-width: 768px) {
        margin: 2rem auto 0;
      }
    }
    .platforms-list{
      min-height: 550px;
    }
  }

</style>
