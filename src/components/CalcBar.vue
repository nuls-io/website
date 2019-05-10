<template>
  <div class="calcbar">
    <h5 class="font20 fw">{{$t('cale.cale0')}}</h5>
    <div class="tab">
      <el-radio-group v-model="radio">
        <el-radio :label="1">{{$t('cale.cale1')}}</el-radio>
        <el-radio :label="2" class="mr_50">{{$t('cale.cale101')}}</el-radio>
      </el-radio-group>
    </div>

    <div class="result">
      <ul>
        <li>{{$t('cale.cale3')}}<label>{{parrakeInfo.day}} <span class="fCN">NULS</span></label></li>
        <li>{{$t('cale.cale4')}}<label>{{parrakeInfo.week}} <span class="fCN">NULS</span></label></li>
        <li>{{$t('cale.cale5')}}<label>{{parrakeInfo.month}} <span class="fCN">NULS</span></label></li>
        <li>{{$t('cale.cale6')}}<label>{{parrakeInfo.year}} <span class="fCN">NULS</span></label></li>
      </ul>
    </div>

    <div class="caleFrom partake" v-show="radio.toString() === '1' ">
      <el-form :model="partakeForm" :rules="partakeRules" ref="partakeForm">
        <el-form-item :label="$t('cale.cale102')" prop="entrust">
          <el-input v-model="partakeForm.entrust"></el-input>
        </el-form-item>
        <el-form-item :label="$t('cale.cale103')+'(%)'" prop="ratio">
          <el-input v-model="partakeForm.ratio"></el-input>
        </el-form-item>
        <el-form-item :label="$t('cale.cale104')" prop="credit">
          <el-input v-model="partakeForm.credit"></el-input>
        </el-form-item>
        <el-form-item :label="$t('cale.105')" prop="allEntrust">
          <el-input v-model="partakeForm.allEntrust"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="caleFrom partake" v-show="radio.toString() === '2' ">
      <el-form :model="newNodeFrom" :rules="newNodeRules" ref="newNodeFrom">
        <el-form-item :label="$t('cale.cale106')" prop="newEnsure">
          <el-input v-model="newNodeFrom.newEnsure"></el-input>
        </el-form-item>
        <el-form-item :label="$t('cale.cale103') +'(%)'" prop="newRadio">
          <el-input v-model="newNodeFrom.newRadio"></el-input>
        </el-form-item>
        <el-form-item :label="$t('cale.cale104')" prop="newCredit">
          <el-input v-model="newNodeFrom.newCredit"></el-input>
        </el-form-item>
        <el-form-item :label="$t('cale.cale105')" prop="newAllEntrust">
          <el-input v-model="newNodeFrom.newAllEntrust"></el-input>
        </el-form-item>
        <el-form-item :label="$t('cale.cale102')" prop="newEntrust">
          <el-input v-model="newNodeFrom.newEntrust"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {BigNumber} from 'bignumber.js'

  export default {
    data() {
      let checkEntrust = (rule, value, callback) => {
        if (!value) {
          callback(new Error(this.$t('cale.cale7')))
        }
        value = Number(value);
        if (typeof value === 'number' && !isNaN(value)) {
          if (value < 2000 || value > 500000) {
            callback(new Error(this.$t('cale.cale8')))
          } else {
            callback()
          }
        } else {
          callback(new Error(this.$t('cale.cale9')))
        }
      };
      let checkRatio = (rule, value, callback) => {
        if (!value) {
          callback(new Error(this.$t('cale.cale10')))
        }
        value = Number(value);
        if (typeof value === 'number' && !isNaN(value)) {
          if (value < 10 || 100 < value) {
            callback(new Error(this.$t('cale.cale11')))
          } else {
            callback()
          }
        } else {
          callback(new Error(this.$t('cale.cale12')))
        }
      };
      let checkCredit = (rule, value, callback) => {
        if (!value) {
          callback(new Error(this.$t('cale.cale13')))
        }
        value = Number(value);
        if (typeof value === 'number' && !isNaN(value)) {
          if (value >= 0 && 1 < value) {
            callback(new Error(this.$t('cale.cale14')))
          } else {
            callback()
          }
        } else {
          callback(new Error(this.$t('cale.cale15')))
        }
      };
      let checkAllEntrust = (rule, value, callback) => {
        if (!value) {
          callback(new Error(this.$t('cale.cale16')))
        }
        value = Number(value);
        if (typeof value === 'number' && !isNaN(value)) {
          if (value < 200000 || value > 100000000) {
            callback(new Error(this.$t('cale.cale17')))
          } else {
            callback()
          }
        } else {
          callback(new Error(this.$t('cale.cale18')))
        }
      };

      let checkNewEnsure = (rule, value, callback) => {
        if (!value) {
          callback(new Error(this.$t('cale.cale19')))
        }
        value = Number(value);
        if (typeof value === 'number' && !isNaN(value)) {
          if (value < 20000 || value > 200000) {
            callback(new Error(this.$t('cale.cale20')))
          } else {
            callback()
          }
        } else {
          callback(new Error(this.$t('cale.cale21')))
        }
      };
      let checkNewRatio = (rule, value, callback) => {
        if (!value) {
          callback(new Error(this.$t('cale.cale10')))
        }
        value = Number(value);
        if (typeof value === 'number' && !isNaN(value)) {
          if (value < 10 || 100 < value) {
            callback(new Error(this.$t('cale.cale11')))
          } else {
            callback()
          }
        } else {
          callback(new Error(this.$t('cale.cale12')))
        }
      };
      let checkNewCredit = (rule, value, callback) => {
        if (!value) {
          callback(new Error(this.$t('cale.cale13')))
        }
        value = Number(value);
        if (typeof value === 'number' && !isNaN(value)) {
          if (value < 0 || value > 1) {
            callback(new Error(this.$t('cale.cale14')))
          } else {
            callback()
          }
        } else {
          callback(new Error(this.$t('cale.cale15')))
        }
      };
      let checkNewAllEntrust = (rule, value, callback) => {
        if (!value) {
          callback(new Error(this.$t('cale.cale16')))
        }
        value = Number(value);
        if (typeof value === 'number' && !isNaN(value)) {
          if (value < 200000 || value > 100000000) {
            callback(new Error(this.$t('cale.cale17')))
          } else {
            callback()
          }
        } else {
          callback(new Error(this.$t('cale.cale18')))
        }
      };
      let checkNewEntrust = (rule, value, callback) => {
        if (!value) {
          callback(new Error(this.$t('cale.cale22')))
        }
        value = Number(value);
        if (typeof value === 'number' && !isNaN(value)) {
          if (value < 200000 || value > 500000) {
            callback(new Error(this.$t('cale.cale23')))
          } else {
            callback()
          }
        } else {
          callback(new Error(this.$t('cale.cale24')))
        }
      };
      return {
        radio: 1,
        //委托节点计算器
        partakeForm: {
          entrust: 2000,
          ratio: 10,
          credit: 1,
          allEntrust: 0,
        },
        partakeRules: {
          entrust: [{validator: checkEntrust, trigger: 'change'}],
          ratio: [{validator: checkRatio, trigger: 'change'}],
          credit: [{validator: checkCredit, trigger: 'change'}],
          allEntrust: [{validator: checkAllEntrust, trigger: 'change'}],
        },
        //创建节点计算器
        newNodeFrom: {
          newEnsure: 20000,
          newRadio: 10,
          newCredit: 1,
          newAllEntrust: 0,
          newEntrust: 200000
        },
        newNodeRules: {
          newEnsure: [{validator: checkNewEnsure, trigger: 'change'}],
          newRadio: [{validator: checkNewRatio, trigger: 'change'}],
          newCredit: [{validator: checkNewCredit, trigger: 'change'}],
          newAllEntrust: [{validator: checkNewAllEntrust, trigger: 'change'}],
          newEntrust: [{validator: checkNewEntrust, trigger: 'change'}],
        },
        consensusTotal:0,
      };
    },
    created() {
      this.getNULSNumber();
    },
    watch: {
      radio(val, oldVal) {
        //console.log('new: %s, old: %s', val, oldVal);
        if (oldVal === 1) {
          this.$refs['partakeForm'].resetFields();
        } else {
          this.$refs['newNodeFrom'].resetFields();
        }
      }
    },
    computed: {
      parrakeInfo() {
        let newInfo = {day: 0, week: 0, month: 0, year: 0};
        let BN = BigNumber.clone();
        BN.config({DECIMAL_PLACES: 4});
        if (this.radio.toString() === '2') {
          const newYear = this.newNodeFrom.newCredit * this.newNodeFrom.newEnsure * 5000000 / this.consensusTotal
            + this.newNodeFrom.newCredit * this.newNodeFrom.newEntrust * 5000000 * this.newNodeFrom.newRadio * 0.01 / this.consensusTotal;
          newInfo.year = BN(newYear).div(1).toNumber();
        } else {
          const newYear = this.partakeForm.credit * (1 - this.partakeForm.ratio * 0.01) * 5000000 * this.partakeForm.entrust / this.consensusTotal;
          newInfo.year = BN(newYear).div(1).toNumber();
        }
        newInfo.month = BN(newInfo.year).div(12).toNumber();
        newInfo.day = BN(newInfo.year).div(365).toNumber();
        newInfo.week = BN(newInfo.day).multipliedBy(7).toNumber();
        return newInfo
      }
    },
    methods: {
      count(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      /**
       * 获取NULS数量信息
       */
      getNULSNumber() {
        let that = this;
        const params = {"jsonrpc": "2.0", "method": "getCoinInfo", "params": [], "id": 5898};
        axios.post('https://api.nuls.io/', params)
          .then(function (response) {
            //console.log(response);
            if (response.data.hasOwnProperty("result")) {
              let newNu = new BigNumber(response.data.result.consensusTotal);
              let newConsensusTotal = Number(newNu.div(100000000).toFormat().replace(/[,]/g, ''));
              that.partakeForm.allEntrust = newConsensusTotal;
              that.newNodeFrom.newAllEntrust = newConsensusTotal;
              that.consensusTotal = newConsensusTotal
            }
          })
          .catch(function (error) {
            console.log(error);
          });

      },
    }
  }
</script>

<style lang="less">
  .calcbar {
    background-color: #f5f6f9;
    border: 1px solid #DFE4EF;
    width: 700px;
    margin: 25px 0;
    h5 {
      border-bottom: 1px solid #DFE4EF;
      margin: 15px 0 0 0;
      padding: 0 0 10px 20px;
      font-size: 18px;
      color: #445569;
    }
    .tab {
      margin: 10px 0 7px;
      .el-radio-group {
        margin: 0 0 0 20px;
      }
    }
    .result {
      width: 100%;
      height: 71px;
      margin: 0 auto;
      background-color: #FFFFFF;
      border-top: 1px solid #DFE4EF;
      border-bottom: 1px solid #DFE4EF;
      ul {
        li {
          width: 325px;
          height: 30px;
          float: left;
          line-height: 30px;
          font-size: 14px;
          color: #8794B1;
          &:nth-child(1) {
            border-bottom: 1px solid #DFE4EF;
            margin: 5px 0 0 20px;
            padding: 0 20px 0 0;
          }
          &:nth-child(2) {
            border-bottom: 1px solid #DFE4EF;
            margin: 5px 0 0 0;
            padding: 0 0 0 20px;
          }
          &:nth-child(2n) {
            border-left: 1px solid #DFE4EF;
          }
          &:nth-child(3) {
            margin: 0 0 0 20px;
            padding: 0 20px 0 0;
          }
          &:nth-child(4) {
            padding: 0 0 0 20px;
          }
          label {
            float: right;
            color: #2C3856;
          }
        }
      }
    }
    .caleFrom {
      background-color: #FFFFFF;
      margin: 20px 0 0 0;
      padding: 10px 20px;
      .el-form-item {
        margin-bottom: 15px;
      }
      .el-form-item__label {
        color: #8794B1;
        line-height: 20px;
      }
      .el-form-item__content {
        line-height: 25px;
        .el-input {
          .el-input__inner {
            height: 30px;
            line-height: 30px;
            padding: 0 5px;
          }
        }
      }
    }
    .el-radio__input.is-checked + .el-radio__label {
      color: #7db46d !important;
    }
    @media screen and (max-width: 1000px) {
      .result {
        ul {
          li {
            width: 46%;
            &:nth-child(1) {
              border-bottom: 1px solid #DFE4EF;
              margin: 0.25rem 0 0 1rem;
              padding: 0 1rem 0 0;
            }
            &:nth-child(2) {
              border-bottom: 1px solid #DFE4EF;
              margin: 0.25rem 0 0 0;
              padding: 0 0 0 1rem;
            }
            &:nth-child(2n) {
              border-left: 1px solid #DFE4EF;
            }
            &:nth-child(3) {
              margin: 0 0 0 1rem;
              padding: 0 1rem 0 0;
            }
            &:nth-child(4) {
              padding: 0 0 0 1rem;
            }
            label {
              span {
                display: none;
              }
            }
          }
        }
      }
    }
  }
</style>
