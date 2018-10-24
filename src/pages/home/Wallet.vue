<template>
  <div class="wallet">
    <div class="wallet-bg"></div>
    <el-row :gutter="0" class="w-info">
      <el-col :xs="24" :sm="12" class="w-left">
        <h2 class="h2">{{$t('home.wallet_title')}}</h2>
        <p>{{$t('home.wallet_info')}}</p>
        <div class="w-bt">
          <div class="w-select">
            <el-select v-model="valueDownload" @change="toDownload(valueDownload)">
              <el-option
                v-for="item in optionsDownload"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled">
              </el-option>
            </el-select>
          </div>
          <div class="btn-box">
            <el-button><span>{{$t('home.wallet_online')}}</span><i class="el-icon-arrow-right"></i></el-button>
          </div>
        </div>

      </el-col>
      <el-col :xs="0" :sm="12" hidden-xs-and-up class="w-right">
        <div class="cube1">
          <img src="./../../assets/images/cube.svg">
        </div>
        <div class="pc">
          <div class="iphone"></div>
        </div>
        <div class="cube2">
          <img src="./../../assets/images/cube.svg">
        </div>
        <div class="cube3">
          <img src="./../../assets/images/cube.svg">
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import {getDownloadList} from '@/api/httpData'

  export default {
    data() {
      return {
        optionsDownload: [],
        valueDownload: this.$t('home.wallet_list_title')
      }
    },
    mounted() {
      this.getDownloadList(1, 10, 1);
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
        getDownloadList(siteId, pageSize, pageNum)
          .then(function (response) {
            //console.log(response)
            for (let list of response.data.contentList) {
              list.label = list.title + ' Download';
              list.value = 'http://192.168.1.130:8080' + list.filelink;
            }
            that.optionsDownload = response.data.contentList;
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      /**
       * 下载内容
       * @param e
       */
      toDownload(e) {
        try {
          let elemIF = document.createElement("iframe");
          elemIF.src = e;
          elemIF.style.display = "none";
          document.body.appendChild(elemIF);
        } catch (e) {

        }
      },

    }
  }
</script>

<style lang="less" type="text/less">
  .wallet {
    width: 100%;
    min-height: 600px;
    @media (max-width: 768px) {
      min-height: 320px;
    }
    .wallet-bg {
      width: 100%;
      min-height: 600px;
      background-color: #eff4f8;
      clip-path: polygon(0 0, 80% 0, 40% 100%, 0 100%);
      z-index: 1;
      position: absolute;
      @media (max-width: 768px) {
        min-width: 360px;
        min-height: 320px;
      }
    }
    .w-info {
      background: transparent;
      z-index: 2;
      position: relative;
      .w-left {
        h2 {
          color: #0a2140;
          margin: 60px 0;
          @media (max-width: 768px) {
            margin: 20px 0;
          }
        }
        p {
          color: #445569;
          font-size: 16px;
          line-height: 24px;
          width: 500px;
          margin: 10px auto;
          text-align: left;
          @media (max-width: 768px) {
            width: 90%;
            padding: 0 5%;
          }
        }
        .w-bt {
          max-width: 550px;
          margin: 10px auto;
          @media (max-width: 768px) {
            max-width: 360px;
          }
          .w-select {
            max-width: 200px;
            margin: 50px auto;
            float: left;
            @media (max-width: 768px) {
              max-width: 150px;
              margin: 20px 0 0 20px;
            }
            .el-select {
              .el-input--suffix {
                .el-input__inner {
                  border: 0 !important;
                  background: linear-gradient(-180deg, #8fe400, #56c400);
                  color: #FFFFFF !important;
                  height: 50px;
                  border-radius: 50px;
                  font-size: 16px;
                }
                i {
                  font-size: 16px;
                  color: #FFFFFF;
                  margin-right: 5px;
                }
                &:hover {
                  .el-input__inner {
                    background: #56c400;
                  }
                }
              }
            }
          }

          .btn-box {
            max-width: 200px;
            margin: 50px 0 0 50px;
            float: left;
            @media (max-width: 768px) {
              max-width: 150px;
              margin: 20px 0 0 20px;
            }
            .el-button {
              @media (max-width: 768px) {
                max-width: 150px;
              }
              .el-icon-arrow-right {
                padding-left: 20px;
                @media (max-width: 768px) {
                  padding-left: 0;
                }
              }
            }
          }
        }

      }
      .w-right {
        .cube1,.cube2,.cube3{
          width: 1280px;
          margin: 0 auto;
          height: 1px;
          z-index: 2;
          position: absolute;
          img {
            width: 200px;
            right: 0;
            margin: -10px 0 0 0;
          }
        }
        .cube2{
          z-index: 8;
          height: 50px;
          width: 200px;
          margin:-370px 270px 0 0;
          right: 50px;
          position: absolute;
          img {
          }
        }
        .cube3{
          z-index: 8;
          height: 50px;
          width: 200px;
          margin:-180px 600px 0 0;
          right: 50px;
          position: absolute;
          img {
          }
        }
        .pc {
          height: 596px;
          background: url("./../../assets/images/pc.png") no-repeat right;
          background-size: 120%;
          z-index: 3;
          position: relative;
        }
        .iphone {
          height: 570px;
          background: url("./../../assets/images/iphone.png") no-repeat 30%;
          background-size: 43%;
          z-index: 5;
          position: relative;
        }
      }
    }

  }

</style>
