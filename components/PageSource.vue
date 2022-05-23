<template>
  <div class="contains">
    <hr />
    <div class="text">
      <h4>||关于我们</h4>
      <p>
        大雄山泉是由安徽九个挑夫电子商务有限公司与怀宁县江镇镇新联村集体深度合作，充分发挥大雄山村千年自涌古泉资源，共同开发的乡村振兴产业。大雄山泉水开发公司积极响应国家乡村振兴战略，秉承文化振兴，资源唤醒、生态唤醒，价值唤醒理念，解决当地村民就业问题、带动村集体增收，让养育了一代又一代村民的千年古泉，成为当地老百姓增收致富的常青产业的同时为广大消费者提供人体所需的健康饮用水，对于实现农村一二三产业深度融合发展，具有重大现实意义。
      </p>
    </div>
    <img :src="`${cdnUrl}/images/about.png`" style="" alt="" />
  </div>
</template>
<script>
  import { cdnUrl } from "../common/setting";

  export default {
    name: "PageSource",
    data() {
      return {
        cdnUrl,
      };
    },
  };
</script>
<style lang="scss" scoped>
  .contains {
    position: relative;
    .text {
      position: absolute;
      right: 400px;
      top: 90px;
      width: 450px;
      h4 {
        color: rgb(0, 115, 66);
        text-align: left;
      }
      p {
        text-indent: 2em;
        width: 550px;
      }
    }
    img {
      width: 100%;
      height: 650px;
      margin-top: 20px;
    }
  }
  @media only screen and (max-width: 450px) {
    .contains {
      width: 100%;
      height: 600px;
      position: relative;

      .text {
        // display: flex;
        // flex-direction: column;
        width: 100%;
        position: absolute;
        right: 0;
        top: 30px;
        padding: 0 20px;
        h4 {
          text-align: center;
        }
        p {
          font-size: 15px;
          text-indent: 2em;
          width: 350px;
          text-align: left;
        }
      }
      img {
        width: 100%;
        height: 260px;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
  @media only screen and (min-width: 1850px) {
    .contains {
      .text {
        right: 540px;
      }
    }
  }
</style>
