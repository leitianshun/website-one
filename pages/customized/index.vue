<template>
  <div>
    <PageTop :image-url="`${cdnUrl}/images/qydz.png`" />
    <span>企业定制</span>
  </div>
</template>
<script>
  import PageTop from "../../components/PageTop.vue";
  import { cdnUrl } from "@/common/setting";

  export default {
    name: "ProductCenter",
    components: { PageTop },
    data() {
      return {
        cdnUrl,
      };
    },
  };
</script>
<style lang="scss" scoped>
  div {
    width: 100%;
    height: 100vh;
  }
</style>
