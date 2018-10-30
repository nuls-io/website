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
          <li v-for="site in partnerList">
            <a :href="site.link" target="_blank"><img :src="site.url"  /></a>
          </li>
        </ul>
      </div>
      <div class="media-list cb">
        <h2 class="h2">Media Partners</h2>
        <ul>
          <li v-for="site in mediaList">
            <a :href="site.link" target="_blank"><img :src="site.url"  /></a>
          </li>
        </ul>
      </div>
      <div class="platforms-list cb">
        <h2 class="h2">Platforms</h2>
        <ul>
          <li v-for="site in platformsList">
            <a :href="site.link" target="_blank"><img :src="site.url"  /></a>
          </li>
        </ul>
      </div>
      <Bottom></Bottom>
    </div>
</template>

<script>
  import {getPartnerList} from '@/api/httpData';
  import {API_ROOT} from '@/api/https';
  import {arrItemSort} from '@/util/util';
  import HeaderList from '@/components/HeaderList';
  import Bottom from '@/components/Bottom';

  export default {
    data() {
      return {
        partnerList:[],
        mediaList:[],
        platformsList:[],
      }
    },
    components: {
      HeaderList,
      Bottom,
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
                that.partnerList.push(list)
              }else if(list.types === '2'){
                that.mediaList.push(list)
              }else {
                that.platformsList.push(list)
              }
            }

            setTimeout(() => {
              let partnerListSort = arrItemSort(that.partnerList,"id",0);
              let mediaListSort = arrItemSort(that.mediaList,"id",0);
              let platformsListSort = arrItemSort(that.platformsList,"id",0);
              that.partnerList  = partnerListSort;
              that.mediaList  = mediaListSort;
              that.platformsList  = platformsListSort;
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
      background: url("./../assets/images/map-bg.png") no-repeat;
      background-size: 100% 100%;
      height: 500px;
      @media (max-width: 768px) {
        height: 25rem;
      }
    }
    .partners-info{
      max-width: 1280px;
      margin:-400px auto 0;
      height: 400px;
      @media (max-width: 768px) {
        height: 20rem;
      }
      h1{
        padding: 30px 0;
        @media (max-width: 768px) {
          padding: 0;
          margin-top: 4.5rem;
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
      margin: 0 auto;
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
            width: 120px;
            height: 40px;
            margin: 0.5rem 1rem;
          }
          img{
            width: 100%;
          }
        }
      }
    }
    .platforms-list{
      min-height: 600px;
      @media (max-width: 768px) {
        min-height: 30rem;
      }
    }
  }

</style>
