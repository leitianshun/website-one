<template>
  <div class="headers">
    <!-- title="关于我们" top-text="ABOUT US" -->
    <page-top :image-url="`${cdnUrl}/images/aboutus.png`" />
    <div class="contain">
      <div class="jianjie">
        <img :src="`${cdnUrl}/images/aboutimg.png`" alt="" />
        <div>
          <h2>关于我们</h2>
          <p>
            大雄山泉是由安徽九个挑夫电子商务有限公司与怀宁县江镇镇新联村集体深度合作，充分发挥大雄山村千年自涌古泉资源，共同开发的乡村振兴产业。大雄山泉水开发公司积极响应国家乡村振兴战略，秉承文化振兴，资源唤醒、生态唤醒，价值唤醒理念，解决当地村民就业问题、带动村集体增收，让养育了一代又一代村民的千年古泉，成为当地老百姓增收致富的常青产业的同时为广大消费者提供人体所需的健康饮用水，对于实现农村一二三产业深度融合发展，具有重大现实意义。
          </p>
          <h5>订水热线：0556-4629268</h5>
          <h5>服务热线：4009-123009</h5>
          <h5 style="text-align: center; letter-spacing: 5px; color: rgb(0, 115, 66)">源自大雄山自涌泉水</h5>
        </div>
      </div>
      <!-- <div class="zhizi">
        <p>
          <span>公司资质</span>
        </p>
        <img src="../../static/images/zhizi.png" alt="" />
      </div> -->
      <div class="show">
        <p><span>工厂展示</span></p>
        <img :src="`${cdnUrl}/images/gongchang.png`" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
  import { cdnUrl } from "@/common/setting";

  import PageTop from "@/components/PageTop.vue";
  export default {
    name: "BrandCulture",
    components: { PageTop },
    data() {
      return {
        cdnUrl,
      };
    },
  };
</script>
<style lang="scss" scoped>
  .headers {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    .contain {
      padding: 0 30px;
      .jianjie {
        display: flex;
        h2 {
          text-align: center;
          margin-top: 80px;
          color: rgb(0, 115, 66);
        }
        p {
          padding: 0 50px;
          text-indent: 2em;
          margin-top: 40px;
        }
        h5 {
          margin-left: 50px;
        }
      }
      .zhizi {
        width: 100%;
        // height: 600px;
        // position: relative;
        // overflow: hidden;
        p {
          margin-top: 50px;
          height: 50px;
          line-height: 50px;
          // border: 1px solid red;
          background-color: rgb(228, 220, 220);
          border-radius: 15px;
          // padding-left: 20px;
          span {
            display: inline-block;
            background-color: rgba(0, 108, 91);
            border-radius: 10px;
            width: 120px;
            color: white;
            text-align: center;
          }
        }
        img {
          transform: rotate(270deg);
          width: 550px;
          height: 550px;
          // position: absolute;
          margin-left: 30%;
          // left: 50%;
        }
      }
      .show {
        p {
          margin-top: 50px;
          height: 50px;
          line-height: 50px;
          // border: 1px solid red;
          background-color: rgb(228, 220, 220);
          border-radius: 15px;
          // padding-left: 20px;
          span {
            display: inline-block;
            background-color: rgba(0, 108, 91);
            border-radius: 10px;
            width: 120px;
            text-align: center;
            color: white;
          }
        }
        img {
          width: 100%;
          height: 900px;
        }
      }
    }
  }
  @media only screen and (max-width: 450px) {
    .headers {
      .contain {
        width: 100%;

        .jianjie {
          height: 700px;
          position: relative;
          display: flex;
          flex-direction: column;
          h2 {
            margin: 30px 0 8px;
          }
          p {
            padding: 0;
          }
          img {
            position: absolute;
            width: 100%;
            height: 200px;
            bottom: 0;
          }
          h5 {
            text-align: center;
            margin: 10px 0;
          }
        }
        .zhizi {
          padding: 0 10px;
          width: 100%;
          height: 400px;
          // position: relative;
          img {
            width: 350px;
            height: 390px;
            // margin-left: 130px;
            // position: absolute;
            left: 0;
            margin: 0;
          }
        }
        .show {
          padding: 0 10px;
          width: 100%;
          height: 300px;
          img {
            width: 100%;
            height: 200px;
            // margin-left: 130px;
          }
        }
      }
    }
  }
</style>
