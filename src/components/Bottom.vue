<template>
  <div class="bottom">
    <div class="bottom-top">
      <h3>{{$t('bottom.title')}}</h3>
      <p>{{$t('bottom.info')}}</p>
      <ul>
        <li><a href="https://t.me/Nulsio" target="_blank"><img src="../assets/images/telegram.png" height="42"
                                                               width="42"/></a></li>
        <li><a href="https://twitter.com/nulsservice" target="_blank"><img src="../assets/images/twitter.png"
                                                                           height="38" width="38"/></a></li>
        <li><a href="https://github.com/nuls-io/" target="_blank"><img src="../assets/images/github.png" height="37"
                                                                       width="38"/></a></li>
        <li><a href="https://medium.com/@nuls" target="_blank"><img src="../assets/images/medium.png" height="38"
                                                                    width="38"/></a></li>
        <li><a href="https://www.reddit.com/r/nulsservice/" target="_blank"><img src="../assets/images/reddit.png"
                                                                                 height="34" width="41"/></a></li>
        <li><a href="https://steemit.com/@nuls" target="_blank"><img src="../assets/images/discord.png" height="28"
                                                                     width="40"/></a></li>
        <li><a href="https://gitter.im/nul" target="_blank"><img src="../assets/images/steemit.png" height="40"
                                                                 width="38"/></a></li>
        <li><a
          href="https://nuls.slack.com/join/shared_invite/enQtMjQ4MTM4ODAyNTI4LWJjNGMwYTE0YjRlYmFlZGUwM2JhOGE4MDIwZmE4MzA2MDg1YzUyMmVkN2RhZjkyNWMzZjY5ZDU5ZmViMjZjNGQ"
          target="_blank"><img src="../assets/images/gitter.png" height="41" width="30"/></a></li>
      </ul>
    </div>

    <div class="bottom-info">
      <div class="bottom-from">
        <el-form :inline="true" :model="emailForm" :rules="emailRules" ref="emailForm">
          <el-form-item label="" prop="emailAddress">
            <el-input v-model="emailForm.emailAddress"
                      placeholder="Leave your email and we will send you the latest information"></el-input>
          </el-form-item>
          <el-form-item class="form-bt">
            <el-button type="primary" class="bg-green-btn" @click="submitForm('emailForm')">Contact us</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="flex">
        <div class="b-left">
          <img src="../assets/images/nuls-footer-logo.png" height="75" width="44"/>
          <p>{{$t('bottom.list0')}} © 2018 NULS</p>
          <p>{{$t('bottom.list1')}}</p>
        </div>
        <div class="b-right">
          <ul>
            <li>{{$t('nav.about')}}</li>
            <li>
              <router-link :to="{ name: 'home' }">Nuls</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'team' }">{{$t('nav.about2')}}</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'partners' }">{{$t('nav.about3')}}</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'media' }">{{$t('nav.media')}}</router-link>
            </li>
          </ul>
          <ul>
            <li>Downloads</li>
            <li @click="toWhiteYellow">{{$t('bottom.list3')}}</li>
            <li @click="toWhiteYellow">{{$t('bottom.list4')}}</li>
            <li>
              <router-link :to="{ name: 'wallet' }">Wallet</router-link>
            </li>
            <!--<li>DApps</li>-->
          </ul>
          <ul v-show="false">
            <li>Follow us</li>
            <li><a href="https://t.me/Nulsio" target="_blank">Telegram</a></li>
            <li><a href="https://twitter.com/nulsservice" target="_blank">Twitter</a></li>
            <li><a href="https://github.com/nuls-io/" target="_blank">GitHub</a></li>
            <li><a href="https://medium.com/@nuls" target="_blank">Medium</a></li>
            <li><a href="https://www.reddit.com/r/nulsservice/" target="_blank">Reddit</a></li>
            <li><a href="https://discordapp.com/invite/cUeafst" target="_blank">Discord</a></li>
            <li><a href="https://steemit.com/@nuls" target="_blank">Steemit</a></li>
            <li><a href="https://gitter.im/nuls_io" target="_blank">Gitter</a></li>
            <li><a
              href="https://nuls.slack.com/join/shared_invite/enQtMjQ4MTM4ODAyNTI4LWJjNGMwYTE0YjRlYmFlZGUwM2JhOGE4MDIwZmE4MzA2MDg1YzUyMmVkN2RhZjkyNWMzZjY5ZDU5ZmViMjZjNGQ"
              target="_blank">Slack</a></li>
          </ul>
          <ul>
            <li>Support</li>
            <li @click="toQaqs">FAQ</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-infos">
      <div class="b-bottom">
        <img src="../assets/images/nuls-footer-logo.png" height="75" width="44"/>
        <p>{{$t('bottom.list0')}} © 2018 NULS</p>
        <p>{{$t('bottom.list1')}}</p>
      </div>
    </div>
  </div>

</template>

<script>
  import {postMailAddress} from '@/api/httpData';

  export default {
    data() {
      return {
        emailForm: {
          emailAddress: '',
        },
        emailRules: {
          emailAddress: [
            {required: true, message: 'Please input your email address.', trigger: 'blur'},
            {type: 'email', message: 'Please input the correct email address.', trigger: ['blur', 'change']}
          ]
        }
      };
    },
    components: {},
    methods: {

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.emailAddress(this.emailForm.emailAddress);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      /**
       * 团队跳转
       */
      toTeam() {
        this.$router.push({
          name: 'team',
        })
      },

      /**
       * 白、黄皮书跳转
       */
      toWhiteYellow() {
        this.$router.push({
          name: 'whiteYellow',
        })
      },

      /**
       * 提交邮箱
       * @param email
       */
      emailAddress(email) {
        let that = this;
        $.post("http://50.62.6.187:10031/api/v1/bbs/save?title=mail&content=" + email, function (data) {
          //console.log(data);
          if (data.success) {
            that.$message({
              message: 'We have received your mailbox, HR will contact you immediately.',
              type: 'success'
            });
          } else {
            that.$message.error('Failure to submit, please try again.');
          }
        })
        /*postMailAddress(email)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });*/
      },

      /**
       * faqs跳转
       */
      toQaqs() {
        this.$router.push({
          name: 'faqs',
        })
      },

    }
  }
</script>

<style lang="less" type="text/less">
  .bottom {
    min-height: 760px;
    //background: url("./../assets/images/footer.png") bottom repeat-x, linear-gradient(-1deg, #04265f, #021131 97%);
    background: url("./../assets/images/footer.png") bottom repeat-x,linear-gradient(-1deg, #04265f, #021131 97%);
    @media (max-width: 768px) {
      min-height: 500px;
    }
    a {
      color: inherit;
    }
    .bottom-top {
      margin: auto;
      max-width: 1280px;
      height: 300px;
      background-image: linear-gradient(-133deg, #002e5e, #092243 89%, #0a2140);
      -webkit-box-shadow: 0 16px 64px 0 rgba(0, 0, 0, .24);
      box-shadow: 0 16px 64px 0 rgba(0, 0, 0, .24);
      border-radius: 8px;
      position: relative;
      top: -60px;
      padding: 50px 85px;
      @media (max-width: 768px) {
        height: 350px;
        padding: 10px;
        width: 98%;
      }
      h3 {
        font-size: 48px;
        font-weight: 700;
        line-height: 77px;
        @media (max-width: 768px) {
          font-size: 24px;
          line-height: 70px;
        }
      }
      p {
        font-size: 16px;
        line-height: 23px;
        margin-bottom: 16px;
        @media (max-width: 768px) {
          font-size: 12px;
          line-height: 24px;
        }
      }
      ul {
        li {
          float: left;
          margin: 0 30px;
          cursor: pointer;
          &:hover {
            opacity: 0.62;
          }
          @media (max-width: 768px) {
            height: 40px;
            margin: 0.5rem 1rem;
          }
          &:first-child {
            margin: 0 30px 0 0;
            @media (max-width: 768px) {
              margin: 0.5rem 1rem 0.5rem 1rem;
            }
          }
        }
      }
    }
    .bottom-info {
      max-width: 1280px;
      margin: 0 auto;
      @media (max-width: 768px) {

      }
      .bottom-from {
        width: 100%;
        border-top: 1px solid #1d3156;
        border-bottom: 1px solid #1d3156;
        margin-bottom: 60px;
        .el-form {
          width: 800px;
          margin: 20px auto 0;
          @media (max-width: 768px) {
            width: 98%;
            margin: 1rem auto 1rem;
          }
          .el-form-item {
            width: 500px;
            @media (max-width: 768px) {
              width: 63%;
            }
            .el-form-item__content {
              width: 100%;
              .el-input {
                .el-input__inner {
                  background-color: #ffffff;
                  height: 52px;
                  line-height: 52px;
                  border-radius: 50px;
                  @media (max-width: 768px) {
                    width: 100%;
                  }
                }
              }
              .el-form-item__error {
                margin-left: 20px;
              }
              .bg-green-btn {
                width: 150px;
                @media (max-width: 768px) {
                  width: 100px;
                }
              }
            }
          }
          .form-bt {
            width: 200px;
            @media (max-width: 768px) {
              width: 100px;
            }
          }
        }
      }
      .flex {
        @media (max-width: 768px) {
          display: none;
        }
        .b-left {
          width: 20%;
          /*float: left;*/
          text-align: center;
          font-size: 14px;
          @media (max-width: 768px) {
            display: none;
          }
          p {
            line-height: 23px;
            opacity: 0.5;
            margin-bottom: 16px;
          }
        }
        .b-right {
          width: 80%;
          /*float: right;*/
          ul {
            width: 25%;
            float: left;
            li {
              text-align: center;
              font-size: 16px;
              line-height: 23px;
              padding: 6px 0;
              cursor: pointer;
              &:first-child {
                font-size: 24px;
                font-weight: 700;
                line-height: 32px;
                opacity: 1;
              }
              a {
                color: #ffffff;
                opacity: 0.9;
                text-decoration: none
              }
            }
          }
        }
      }
    }
    .border-infos {
      display: none;
      @media (max-width: 768px) {
        display: block;
      }
      .b-top {
      }
      .b-bottom {
        text-align: center;
      }
    }
  }
</style>
