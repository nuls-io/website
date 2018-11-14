<template>
  <div class="community">
    <div class="header-bg">
      <HeaderList></HeaderList>
      <h1 class="h1 cb">{{$t('community.title')}}</h1>
      <p class="w_1280 font-36">{{$t('community.info')}}</p>
    </div>
    <div class="community-info">
      <div class="c-learn">
        <div class="centers">
          <h2 class="h2">{{$t('community.title1')}}</h2>
          <ul>
            <li class="shadow fl">
              <h6 class="h6">{{$t('community.c_name')}}</h6>
              <label class="name_by font-20 tc">{{$t('community.c_name_by')}}</label>
              <p class="c_green font-24 font-bold cursor-p" @click="toUrl('https://nuls.community/')">{{$t('community.enter')}} <i class="el-icon-arrow-right"></i></p>
            </li>
            <li class="shadow fl">
              <h6 class="h6">{{$t('community.c_forun')}}</h6>
              <label class="name_by font-20 tc">{{$t('community.c_forun_sg')}}</label>
              <p class="c_green font-24 font-bold cursor-p" @click="toUrl('http://nulscommunityforum.com/')">{{$t('community.enter')}} <i class="el-icon-arrow-right"></i></p>
            </li>
            <li class="shadow fl">
              <h6 class="h6">{{$t('community.c_chinese')}}</h6>
              <label class="name_by font-20 tc">{{$t('community.c_chinese_wheat')}}</label>
              <p class="c_green font-24 font-bold cursor-p" @click="toUrl('http://nuls.org.cn/')">{{$t('community.enter')}} <i class="el-icon-arrow-right"></i></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="c-consititution">
        <div class="centers">
          <h2 class="h2">{{$t('community.cc_title')}}</h2>
          <p class="font-24">{{$t('community.cc_info')}}</p>
          <label class="c_green cursor-p font-20">{{$t('community.cc_more')}} <i class="el-icon-arrow-right"></i></label>
        </div>
      </div>
      <div class="c-what cb">
        <div class="centers">
          <h2 class="h2">{{$t('community.you_title')}}</h2>
          <p class="font-24">{{$t('community.info')}}</p>
          <label class="c_green cursor-p font-20 cb cursor-p" @click="toUrl('https://nuls.community/t/task-bounty')">Task Bounty <i class="el-icon-arrow-right"></i></label>
        </div>
      </div>
      <div class="c-join cb">
        <div class="centers">
          <h2 class="h2">Join Group</h2>
          <ul>
            <li class="shadow fl cursor-p" @click="toUrl(site.link)" v-for="site in findUsList">
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
  import {getFindUsList} from '@/api/httpData';
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
        color: @color;
        @media (max-width: 768px) {
          padding: 0 0.5rem;
        }
      }
    }
    .community-info {
      @media (max-width: 768px) {
      }
      .c-learn {
        min-height: 290px;
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
            border-radius: 4px;
            border-bottom: 4px solid #8fe400;
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
              padding: 30px 0 10px;
            }
            .name_by{
              display: block;
              color: @color_1;
            }
            p {
              text-align: center;
              margin-top: 5px;
            }
          }
        }
      }
      .c-consititution {
        background-color: #F5F9FF;
        min-height: 620px;
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
            padding: 120px 0 45px 0;
            @media (max-width: 768px) {
              padding: 1rem 0 1rem 0;
              text-align: center;
            }
          }
          p {
            max-width: 800px;
            color: @color_1;
            line-height: 40px;
            margin: 0 0 50px 0;
            @media (max-width: 768px) {
              padding: 0 0.5rem;
              margin: 0 0 2rem 0;
              line-height: 1.6rem;
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
        min-height: 445px;
        @media (max-width: 768px) {
          min-height: 15rem;
        }
        .centers {
          background: url("./../assets/images/what.png") no-repeat left 40%, 50%;
          text-align: right;
          @media (max-width: 768px) {
            background: transparent;
            text-align: left;
          }
          .h2 {
            text-align: right;
            margin: 120px auto 50px;
            @media (max-width: 768px) {
              text-align: center;
              margin: 1rem auto 1rem;
              padding: 0;
            }
          }
          p {
            width: 680px;
            float: right;
            color: @color_1;
            line-height: 45px;
            text-align: right;
            @media (max-width: 768px) {
              width: 100%;
              line-height: 1.4rem;
              padding: 0 0.5rem;
              text-align: left;
            }
          }
          label {
            display: block;
            padding: 50px 0 0 0;
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
