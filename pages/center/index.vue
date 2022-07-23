<template>
  <div>
    <!-- title="产品中心" top-text="PRODUCT CENTER" -->
    <PageTop :image-url="`${cdnUrl}/images/qnzyq2.png`" />
    <ProductCenter
      title="产品展示"
      type-one="大雄山泉桶装水系列"
      text-one="大雄山泉桶装水"
      type-two="大雄山泉瓶装水系列"
      text-two="大雄山泉瓶装水" />
  </div>
</template>
<script>
  import PageTop from "../../components/PageTop.vue";
  import ProductCenter from "../../components/ProductCenter.vue";
  import { cdnUrl } from "@/common/setting";

  export default {
    components: {
      PageTop,

      ProductCenter,
    },
    data() {
      return { cdnUrl };
    },
    // created(){
    //   if(proces)
    // }
  };
</script>
<style lang="scss" scoped></style>
