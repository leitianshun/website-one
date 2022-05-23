<template>
  <div>
    <!-- top-text="TO JOIN IN" title="产品加盟" -->
    <PageTop :image-url="`${cdnUrl}/images/zhaoshang.png`" />
    <div class="contain">
      <img :src="`${cdnUrl}/images/joinin1.png`" alt="" />
      <img :src="`${cdnUrl}/images/joinin2.png`" alt="" />
      <hr />
      <!-- <div class="advantage">
        <h3>
          <span>加盟优势</span>
        </h3>
        <p>
          “大雄山泉”以安徽为根本，营销网络覆盖安徽省，诚招安徽省各地级、县级经销商、代理商，大雄山泉将以最大的运营扶持为您快迅开拓市场。
        </p>
      </div> -->

      <div class="joinin">
        <h3>
          <span>加盟标准</span>
        </h3>
        <p>
          对地级代理要求如下：
          <br />
          1、认可大雄山泉经营理念，认同大雄山泉的品牌定位和市场定位；
          <br />
          2、有地市级销售网络经验和或在当地有广泛的人脉（不一定是饮用水行业）；
          <br />
          3、资金要求：30万以上；
          <br />
          4、物流车辆：需备4.2米以上厢货车2辆以上，面包车5辆以上；
          <br />
          对县级代理要求如下：
          <br />
          1、认可大雄山泉经营理念，认同大雄山泉的品牌定位和市场定位；
          <br />
          2、有县级销售网络经验和或在当地有广泛的人脉（不一定是饮用水行业）；
          <br />
          3、资金要求：10万以上；
          <br />
          4、物流车辆：需备4.2米以上厢货车1辆以上，面包车2辆以上；
          <br />
        </p>
      </div>

      <!-- <div class="service">
        <h3>
          <span>服务优势</span>
        </h3>
        <p>
          大雄山泉——以人为本。
          <br />
          尊重加盟商和用户的体验
          <br />
          全省呼叫中心为加盟商和用户提供迅速响应的服务；
          <br />
          覆盖全省的区域经理人对所辖片区加盟商提供咨询、管理、 维护和服务；
          <br />
          协助加盟商开发客户、开展促销活动
        </p>
        <h5>
          大雄山泉——投资小，收益高。
          <br />
          大雄山泉水业提醒您：投资有风险，投资需谨慎！
        </h5>
      </div> -->
      <!-- <img src="../../static/images/joinin2.png" alt="" /> -->
    </div>
  </div>
</template>
<script>
  import PageTop from "../../components/PageTop.vue";
  import { cdnUrl } from "@/common/setting";

  export default {
    name: "ToJoinin",
    components: { PageTop },
    data() {
      return { cdnUrl };
    },
  };
</script>
<style lang="scss" scoped>
  .contain {
    // padding: 0 20px;
    h3 {
      background-color: rgb(199, 194, 194);
      height: 50px;
      margin: 0 20px;
      border-radius: 10px;
      span {
        color: white;
        display: inline-block;
        border-radius: 10px;
        background-color: rgb(34, 132, 208);
        height: 50px;
        width: 150px;
        text-align: center;
        line-height: 50px;
      }
    }
    img {
      width: 100%;
    }
    .advantage {
      p {
        width: 280px;
        height: 200px;
        padding-top: 30px;
        margin-left: 30px;
      }
    }
    .joinin {
      p {
        width: 600px;
        height: 300px;
        margin-left: 30px;
        padding-top: 20px;
      }
    }
    .service {
      p {
        width: 600px;
        height: 200px;
        margin-left: 30px;
        padding-top: 20px;
      }
      h5 {
        margin: 0 0 50px 30px;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    .contain {
      .advantage {
        margin-top: 30px;
        p {
          text-align: left;
          margin: 20px 0 0;
          width: 100%;
          padding: 0 20px;
          height: 150px;
        }
      }
      .joinin {
        p {
          text-align: left;
          margin: 20px 0 100px;
          width: 100%;
          padding: 0 20px;
        }
      }
      .service {
        p {
          text-align: left;
          margin: 20px 0 0;
          width: 100%;
          padding: 0 20px;
        }
        h5 {
          margin: 0 0 50px;
          padding: 0 20px;
          text-align: left;
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
  }
</style>
