<template>
  <div>
    <hr />
    <img :src="`${cdnUrl}/images/ppwh.png`" style="" alt="" />
  </div>
</template>
<script>
  import { cdnUrl } from "../common/setting";

  export default {
    data() {
      return {
        cdnUrl,
      };
    },
  };
</script>
<style lang="scss" scoped>
  img {
    width: 100%;
    height: 590px;
  }
  @media only screen and (max-width: 450px) {
    img {
      width: 100%;
      height: 320px;
    }
  }
</style>
