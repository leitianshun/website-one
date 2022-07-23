<template>
  <div>
    <img :src="`${cdnUrl}/images/kuizeng.png`" width="100%" alt="" />
  </div>
</template>
<script>
  import { cdnUrl } from "../common/setting";

  export default {
    name: "PageGife",
    data() {
      return {
        cdnUrl,
      };
    },
  };
</script>
<style lang="scss" scoped>
  @media only screen and (max-width: 450px) {
    img {
      // margin-top: 300px;
      width: 100%;
      // height: 1px;
    }
  }
</style>
