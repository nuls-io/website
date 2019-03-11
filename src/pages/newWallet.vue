<template>
  <div class="new_wallet">
    <div class="header-bg">
      <HeaderList></HeaderList>
      <h1 class="h1 cb">{{$t('nav.wallet')}}</h1>
      <p class="w_1000 font-20">{{$t('newWallet.info0')}}</p>
    <!--  <p class="w_1000 font-20">{{$t('newWallet.info1')}}</p>
      <p class="w_1000 font-20">{{$t('newWallet.info2')}}</p>-->
    </div>
    <div class="new_wallet_info w_1280">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="$t('newWallet.tab0_title')" name="first">
          <ul class="nw_ul">
            <li class="nw_li fl" >
              <h6 class="h6 tc">{{$t('newWallet.tab0_windows')}}</h6>
              <p class="nw_p tc font-20 color1">{{$t('newWallet.author')}}: <span @click="toUrl('https://nuls.io/team')" class="cursor-p">{{$t('newWallet.core_team')}}</span></p>
              <p class="nw_p font-20 p_info">{{$t('newWallet.tab0_windows_p')}}</p>
              <p class="nw_p tc cursor-p font-20 c_green" @click="toDownload(downloadList.windowslink,0)">{{downloadList.title}} <i class="el-icon-download"></i></p>
            </li>
            <li class="nw_li fl">
              <h6 class="h6 tc">{{$t('newWallet.tab0_linux')}}</h6>
              <p class="nw_p tc font-20 color1">{{$t('newWallet.author')}}: <span @click="toUrl('https://nuls.io/team')" class="cursor-p">{{$t('newWallet.core_team')}}</span></p>
              <p class="nw_p font-20 p_info">{{$t('newWallet.tab0_linux_p')}}</p>
              <p class="nw_p c_green tc cursor-p font-20" @click="toDownload(downloadList.linuxlink,0)">{{downloadList.title}} <i class="el-icon-download"></i></p>
            </li>
            <li class="nw_li fl">
              <h6 class="h6 tc">{{$t('newWallet.tab0_mac')}}</h6>
              <p class="nw_p tc font-20 color1">{{$t('newWallet.author')}}: <span @click="toUrl('https://nuls.io/team')" class="cursor-p">{{$t('newWallet.core_team')}}</span></p>
              <p class="nw_p font-20 p_info">{{$t('newWallet.tab0_mac_p')}}</p>
              <p class="nw_p c_green tc cursor-p font-20" @click="toDownload(downloadList.maclink,0)">{{downloadList.title}} <i class="el-icon-download"></i></p>
            </li>
          </ul>
        </el-tab-pane>

        <el-tab-pane :label="$t('newWallet.tab1_title')" name="second">
          <ul class="nw_ul">
            <li class="nw_li fl">
              <h6 class="h6 tc">{{$t('newWallet.tab1_title_name0')}}</h6>
              <p class="nw_p tc font-20 color1">{{$t('newWallet.author')}}: <span @click="toUrl('https://www.anybit.io',1)" class="cursor-p">{{$t('newWallet.tab1_title_author0')}}</span></p>
              <p class="nw_p font-14 colorRed">{{$t('newWallet.tips1')}}</p>
              <p class="nw_p font-14 colorRed">{{$t('newWallet.tips2')}}</p>
              <p class="nw_p font-20 p_info">{{$t('newWallet.tab1_title_p0')}}<span v-show="lang"><br/>&nbsp;</span></p>
              <p class="nw_p c_green tc cursor-p font-20" @click="toDownload('https://www.anybit.io',1)">{{$t('nav.about1')}} <i class="el-icon-download"></i></p>
            </li>
            <li class="nw_li fl" v-show="false">
              <h6 class="h6 tc">{{$t('newWallet.tab1_title_name')}}</h6>
              <p class="nw_p tc font-20 color1">{{$t('newWallet.author')}}: <span @click="toUrl('https://www.tokenxx.com/#about_us',1)" class="cursor-p">Token++</span></p>
              <p class="nw_p font-14 colorRed">{{$t('newWallet.tips1')}}</p>
              <p class="nw_p font-14 colorRed">{{$t('newWallet.tips2')}}</p>
              <p class="nw_p font-20 p_info">{{$t('newWallet.tab1_title_p')}}</p>
              <p class="nw_p c_green tc cursor-p font-20" @click="toDownload('https://www.tokenxx.com/',1)">{{$t('nav.about1')}} <i class="el-icon-download"></i></p>
            </li>
            <li class="nw_li fl" v-show="false"></li>
          </ul>
        </el-tab-pane>

        <el-tab-pane :label="$t('newWallet.tab2_title')" name="third">
          <ul class="nw_ul">
            <li class="nw_li fl">
              <h6 class="h6 tc">{{$t('newWallet.tab2_title_name')}}</h6>
              <p class="nw_p tc font-20 color1">{{$t('newWallet.author')}}: <span @click="toUrl('https://nuls.io/team')" class="cursor-p">{{$t('newWallet.core_team')}}</span></p>
              <p class="nw_p font-20 p_info web_p">{{$t('newWallet.tab2_title_p')}}</p>
              <p class="nw_p c_green tc cursor-p font-20" @click="toDownload('https://wallet.nuls.io',1)">{{$t('newWallet.access')}}</p>
            </li>
            <li class="nw_li fl">
              <h6 class="h6 tc">{{$t('newWallet.tab2_title_name1')}}</h6>
              <p class="nw_p tc font-20 color1">{{$t('newWallet.author')}}: <span @click="toUrl('https://nuls.io/team')" class="cursor-p">{{$t('newWallet.core_team1')}}</span></p>
              <p class="nw_p font-20 p_info web_p">{{$t('newWallet.tab2_title_p1')}}</p>
              <p class="nw_p c_green tc cursor-p font-20" @click="toDownload('https://nuls.world/wallet',1)">{{$t('newWallet.access')}}</p>
            </li>
            <li class="nw_li fl" v-show="false"></li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import HeaderList from '@/components/HeaderList';
  import Bottom from '@/components/Bottom';
  import {getWalletDownloadList} from '@/api/httpData'
  import {API_ROOT} from '@/api/https';

  import {tolink} from './../util/util'

  export default {
    data() {
      return {
        activeName: 'first',
        downloadList: '',
        lang: true,
      }
    },
    components: {
      HeaderList,
      Bottom,
    },
    mounted() {
      this.getDownloadList(1, 10, 1);
      setInterval(() => {
        this.lang = sessionStorage.hasOwnProperty('langs') ? sessionStorage.getItem('langs') === 'en' ? true : false : true
      }, 100);
    },
    methods: {

      /**
       * 获取下载列表
       * @param siteId
       * @param pageSize
       * @param pageNum
       */
      getDownloadList(siteId, pageSize, pageNum) {
        let that = this;
        getWalletDownloadList(siteId, pageSize, pageNum)
          .then(function (response) {
            //console.log(response);
            that.downloadList = response.data.contentList[0];
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      /**
       * 下载内容
       * @param e
       */
      toDownload(e, state) {
        //console.log(e);
        if (state.toString() === '0') {
          let url = "https" + e.substr(4, e.length);
          try {
            let elemIF = document.createElement("iframe");
            elemIF.src = url;
            elemIF.style.display = "none";
            document.body.appendChild(elemIF);
          } catch (e) {

          }
        }else {
          window.open(e);
        }
      },

      toUrl(url,type=0){
        if(type=1){
          sessionStorage.setItem('activeMenu','555');
        }
        tolink(url)
      },

      handleClick(tab, event) {
        //console.log(tab, event);
      }
    }
  }
</script>

<style lang="less">
  @import url("../assets/css/style.less");

  .new_wallet {
    background-color: #FFFFFF;
    .header-bg {
      background: url("./../assets/images/map-bg.jpg") no-repeat;
      background-size: 100% 100%;
      max-height: 330px;
      @media (max-width: 768px) {
        max-height: 220px;
      }
      h1 {
        line-height: 6rem;
        padding: 10px 0 10px 0;
        @media (max-width: 768px) {
          line-height: 0;
          padding: 1rem 0 2rem 0;
        }
      }
      .w_1000{
        //text-align: center;
        color: @color;
        @media (max-width: 768px) {
          padding: 0 0.5rem;
        }
      }
    }

    .new_wallet_info {
      height: auto;
      @media (max-width: 768px) {
      height: auto;
      }
      .el-tabs {
        min-height: 30rem;
        max-width: 1280px;
        margin: 100px auto 0;
        @media (max-width: 768px) {
          margin: 20px auto 0;
        }
        .el-tabs__header {
          margin: 0 0 70px;
          @media (max-width: 768px) {
            margin: 0 0 0 0.5rem;
          }
          .el-tabs__nav-wrap {
            &:after {
              background-color: transparent;
            }
            .el-tabs__nav-scroll {
              max-width: 660px;
              height: 60px;
              margin: 0 auto;
              text-align: center;
              @media (max-width: 768px) {

              }
              .el-tabs__nav {
                .el-tabs__item {
                  border-radius: 30px;
                  color: #000000;
                  font-size: 18px;
                  width: 160px;
                  height: 50px;
                  line-height: 50px;
                  text-align: center;
                  margin: 0 30px;
                  padding: 0;
                  @media (max-width: 768px) {
                    margin: 0.4rem 0.5rem 0 0.5rem;
                    width: 6.5rem;
                    height: 2rem;
                    line-height: 2rem;
                    font-size: 1rem;
                  }
                  &:hover {
                    color: #56c400;
                    background: #fff;
                    box-shadow: 2px 4px 12px 2px #03143712;
                  }
                  &:first-child {
                    margin: 0 0 0 200px;
                  }
                }
                .is-active {
                  background: #fff;
                  color: #56c400;
                  box-shadow: 2px 4px 12px 2px #03143712;
                }
                .el-tabs__active-bar {
                  background-color: transparent;
                }
              }
            }
          }
          .el-tabs__content {
            margin: 30px 0 0 0;
          }

        }
        .el-tabs__content {
          margin-bottom: 120px;
          .el-tab-pane {
            .nw_ul {
              .nw_li {
                width: 355px;
                height: auto;
                border-top: 1px solid #ebeef5;
                border-bottom: 4px solid #8fe400;
                border-radius: 4px;
                margin: 0 20px 0 20px;
                box-shadow: 2px 4px 12px 2px #03143712;
                color: @color_1;
                @media (max-width: 768px) {
                  width: 80%;
                  height: auto;
                  margin: 2rem 0 0 10%;
                }
                &:first-child {
                  margin: 0 60px 0 1px;
                  @media (max-width: 768px) {
                    margin: 2rem 0 0 10%;
                  }
                }
                &:last-child {
                  margin: 0 1px 0 60px;
                  @media (max-width: 768px) {
                    margin: 2rem 0 0 10%;
                  }
                }
                .h6 {
                  color: @color_1;
                  margin: 40px 0 10px;
                  font-size: 30px;
                  font-weight: bold;
                  @media (max-width: 768px) {
                    margin: 1rem 0;
                  }
                }
                .color1{
                  color: @bg-color2;
                  padding: 0 0 10px 0;
                }
                .p_info{
                  padding: 20px 20px 10px 20px;
                  line-height: 35px;
                  min-height:135px;
                  @media (max-width: 768px) {
                    padding: 0.5rem 1rem;
                    line-height: 1.5rem;
                    min-height:2rem;
                  }
                }
                .web_p{
                  min-height:275px;
                  @media (max-width: 768px) {
                    min-height:2rem;
                  }
                }
                .nw_p {
                  width: 100%;
                  margin: 0 auto;
                  @media (max-width: 768px) {

                  }
                }
                .colorRed{
                  color: #f64b3e;
                  padding: 0 20px 0 20px;
                  width: 80%;
                  line-height: 18px;
                  text-align: center;
                }
                .c_green {
                  margin: 30px auto 60px;
                  @media (max-width: 768px) {
                    margin: 1rem auto 1.2rem;
                  }
                }
              }
            }
          }

        }
      }
    }

  }

</style>
