<template>
  <div id="goTop">
    <div class="goTop" v-show="goTopShow" @click="goTop">
      <i class="el-icon-arrow-up"></i>
      <div class="top-text">TOP</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "goTop",
    data(){
      return{
        scrollTop: '',
        goTopShow:false,
      }
    },
    methods:{
      handleScroll () {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if(this.scrollTop>500){
          this.goTopShow=true
        }
      },
      goTop(){
        let timer=null,_that=this;
        cancelAnimationFrame(timer);
        timer=requestAnimationFrame(function fn(){
          if(_that.scrollTop>0){
            _that.scrollTop-=80;
            document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
            timer=requestAnimationFrame(fn)
          }else {
            cancelAnimationFrame(timer);
            _that.goTopShow=false;
          }
        })
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed(){
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="less" type="text/less">
  .goTop{
    position: fixed;
    right: 20px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    background:#fff;
    padding:7px 0;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 0 12px rgba(0,0,0,0.3);
    i{
      &:before{
        color:#445569;
        font-weight: bold;
      }
    }
    .top-text{
      color: #445569;
      font-size:14px;
      font-weight: bold;
    }
  }
  /*.goTop:hover{*/
    /*background:rgba(0,0,0,.85);*/
  /*}*/
  /*.goTopIcon{*/
    /*display: block;*/
    /*width: 20px;*/
    /*height: 20px;*/
    /*background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABaUlEQVRYR+2W7U3DQBBE31QAJaQDUkJSAXQA6QAqACqADggVBCoAKoAOCBWEDgatZEcHyeX8AYqQvD/P59t3s7tjiz2H9pyfAWBQ4H8rYPtQ0mefSeqlgO0HYCVp1hWiM4DtOXACHADzrhCdAGxfAZdAffM74ELSbVslWgPYPgMi4UxSqMC2taYgrQCSRNeSQoV1VCU5BaaSnn8dwPYYeAIeJYUKG1FBHFcQb00gGimQJH+RFI2XDdtx+6OmEEWAmHXgHfgAJqW5r/YHhCuInT6xE6A6LGSPfcXktSzVe1GCVQmiBBCHjICxpGWTmiYQ0TOhxKukae7dLEBiNHHzRg31M0nVOwGxyBnVVoCuI5WZjGjaRc4tNwBsnwM3qdG0kT4DsWFe9b5vAH0crQSZu9gawHYt1X3OaEpJSs+3lTYFiGZZ/lXyZDri+zGSNIm1FKD3z0VJgdQnakMrOmHTQ7vuGwAGBQYFvgCufKAhUkYyWwAAAABJRU5ErkJggg==") no-repeat center center;*/
  /*}*/
</style>
