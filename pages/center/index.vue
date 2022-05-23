<template>
  <div>
    <!-- title="产品中心" top-text="PRODUCT CENTER" -->
    <PageTop :image-url="`${cdnUrl}/images/qnzyq2.png`" />
    <ProductCenter
      title="产品展示"
      type-one="桶装水系列"
      text-one="层层过滤，严格把控质量，优质饮用天然桶装水"
      type-two="瓶装水系列"
      text-two="400米深岩,弱碱性高锶天然矿泉水" />
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
  };
</script>
<style lang="scss" scoped></style>
