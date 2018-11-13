<template>
  <div class="community">
    <div class="header-bg">
      <HeaderList></HeaderList>
      <h1 class="h1 cb">Community</h1>
      <p class="w_1280 font-36">{{$t('team.info')}}</p>
    </div>
    <div class="community-info">
      <div class="c-learn">
        <div class="centers">
          <h2 class="h2">Learn about the NULS community</h2>
          <ul>
            <li class="shadow fl">
              <h6 class="h6">Conmmunity Websit</h6>
              <p class="c_green font-24 font-bold">Enter ></p>
            </li>
            <li class="shadow fl">
              <h6 class="h6">Conmmunity Forun</h6>
              <p class="c_green font-24 font-bold">Enter ></p>
            </li>
            <li class="shadow fl">
              <h6 class="h6">Chinese Conmmunity Forun</h6>
              <p class="c_green font-24 font-bold">Enter ></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="c-consititution">
        <div class="centers">
          <h2 class="h2">Community Consititution</h2>
          <p class="font-24">{{$t('team.info')}}</p>
          <label class="c_green cursor-p font-20">{{$t('home.nuls_do_info5_more')}} ></label>
        </div>
      </div>
      <div class="c-what cb">
        <div class="centers">
          <h2 class="h2">What you can do in out community</h2>
          <p class="font-24">{{$t('team.info')}}</p>
          <label class="c_green cursor-p font-20 cb">Task Bounty ></label>
        </div>
      </div>
      <div class="c-join cb">
        <div class="centers">
          <h2 class="h2">Join Group</h2>
          <ul>
            <li class="shadow fl" @click="toLink(site.link)" v-for="site in findUsList">
              <img class="fl" :src=site.imgUrl>
              <span class="font-24 fl overflow">{{site.title}}</span>
              <p class="overflow">{{site.title}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import HeaderList from '@/components/HeaderList';
  import Bottom from '@/components/Bottom';
  import {getBannerList, getNewList, getGuideList, getFindUsList} from '@/api/httpData';
  import {API_ROOT} from '@/api/https';
  import {arrItemSort} from '@/util/util';

  export default {
    data() {
      return {
        findUsList: [],
      }
    },
    components: {
      HeaderList,
      Bottom,
    },
    mounted() {
      this.getFindUsList(1, 10, 1)
    },
    methods: {
      /**
       * 获取findUs列表
       * @param siteId
       * @param pageSize
       * @param pageNum
       */
      getFindUsList(siteId, pageSize, pageNum) {
        let that = this;
        getFindUsList(siteId, pageSize, pageNum)
          .then(function (response) {
            console.log(response);
            for (let list of response.data.contentList) {
              list.imgUrl = API_ROOT + list.imgUrl.substr(1, list.imgUrl.length);
            }
            setTimeout(() => {
              let findUsListSort = arrItemSort(response.data.contentList, "id", 0);
              that.findUsList = findUsListSort;
              that.findUsListLoading = false;
            }, 100);

          })
          .catch(function (error) {
            console.log(error);
          });
      },

      /**
       *  打开新连接
       */
      toUrl(url) {
        window.open(url);
      }
    }
  }
</script>

<style lang="less">
  @import url("../assets/css/style.less");

  .community {
    background-color: #FFFFFF;
    .header-bg {
      .font-36 {
        @media (max-width: 768px) {
          padding: 0 0.5rem;
        }
      }
    }
    .community-info {
      @media (max-width: 768px) {
      }
      .c-learn {
        min-height: 260px;
        @media (max-width: 768px) {
          min-height: 33rem
        }
        .h2 {
          @media (max-width: 768px) {
            margin: 0 auto 1rem;
            padding: 1rem 0 0 0;
          }
        }
        ul {
          li {
            width: 355px;
            height: 140px;
            margin-right: 75px;
            border-radius: 5px;
            &:last-child {
              margin-right: 0;
            }
            @media (max-width: 768px) {
              width: 90%;
              margin: 0 0 1rem 5%;
            }
            .h6 {
              color: @color_1;
              text-align: center;
              padding: 40px 0 10px;
            }
            p {
              text-align: center;
            }
          }
        }
      }
      .c-consititution {
        background-color: #F5F9FF;
        min-height: 550px;
        @media (max-width: 768px) {
          min-height: 20rem;
        }
        .centers {
          background: url("./../assets/images/sustainable-improvement-ff.svg") no-repeat right 100%, 50%;
          @media (max-width: 768px) {
            background: transparent;
          }
          .h2 {
            text-align: left;
            margin: 0 auto;
            padding: 120px 0 50px 0;
            @media (max-width: 768px) {
              padding: 1rem 0 1rem 0;
              text-align: center;
            }
          }
          p {
            max-width: 800px;
            color: @color_1;
            margin: 0 0 50px 0;
            @media (max-width: 768px) {
              padding: 0 0.5rem;
              margin: 0 0 2rem 0;
            }
          }
          label {
            padding: 20px 0 0 0 ;
            @media (max-width: 768px) {
              padding:0.5rem 0 1rem 0.5rem;
            }
          }
        }
      }
      .c-what {
        min-height: 500px;
        @media (max-width: 768px) {
          min-height: 15rem;
        }
        .centers {
          background: url("./../assets/images/what.png") no-repeat left 20%, 50%;
          text-align: right;
          @media (max-width: 768px) {
            background: transparent;
            text-align: left;
          }
          .h2 {
            text-align: right;
            @media (max-width: 768px) {
              text-align: center;
            }
          }
          p {
            max-width: 800px;
            float: right;
            color: @color_1;
            text-align: left;
            line-height: 50px;
            @media (max-width: 768px) {
              line-height: 1.4rem;
              padding: 0 0.5rem;
            }
          }
          label {
            display: block;
            @media (max-width: 768px) {

              padding: 1rem 0 0 0.5rem;
            }
          }
        }
      }
      .c-join {
        background-color: #F5F9FF;
        min-height: 550px;
        .centers {
          margin: 0 auto;
          .h2 {
            text-align: left;
            margin: 0;
            padding: 120px 0 60px 0;
            @media (max-width: 768px) {
              padding: 1rem 0 1rem 0;
              text-align: center;
            }
          }
          ul {
            li {
              width: 400px;
              height: 140px;
              margin-right: 40px;
              border-radius: 5px;
              background-color: @bg-color1;
              &:last-child {
                margin-right: 0;
              }
              @media (max-width: 768px) {
                width: 90%;
                height: 6.5rem;
                margin:0 0 1rem 5% ;
              }
              img {
                width: 100px;
                height: 100px;
                background-color: @color;
                border-radius: 100px;
                margin: 20px 10px;
                @media (max-width: 768px) {
                  width: 4rem;
                  height: 4rem;
                }
              }
              span {
                color: @color_1;
                line-height: 30px;
                margin: 60px 0 0 10px;
                font-size: 30px;
                @media (max-width: 768px) {
                  line-height: 30px;
                  margin: 2rem 0 0 0.5rem;
                  font-size: 1.4rem;
                }
              }
            }
          }
        }
      }
    }
  }

</style>
