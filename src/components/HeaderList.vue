<template>
  <div>
    <div class="winds"><Header></Header></div>
    <div class="moble"><HeaderMoble></HeaderMoble></div>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import HeaderMoble from '@/components/HeaderMoble';
  export default {
    data() {
      return {

      }
    },
    components: {
      Header,
      HeaderMoble,
    },
    created() {
    },
    mounted() {

    },
    //离开当前页面后执行
    destroyed() {

    },
    methods: {

    }
  }
</script>

<style lang="less">
  .winds{
    @media (max-width: 768px) {
      display: none;
    }
  }
  .moble{
    display: none;
    @media (max-width: 768px) {
      display:block;
    }
  }
</style>
