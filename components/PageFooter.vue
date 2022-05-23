<template>
  <div class="footer">
    <div class="left">
      <h5>怀宁县大雄山泉水开发有限公司</h5>
      <p>公司地址： 安徽省安庆市怀宁县江镇镇新联村</p>
      <p>订水电话：0556-4629268</p>
      <!-- <p>服务热线：4009-123009</p> -->
      <p>企业官网：www.dxsqs.com</p>
    </div>
    <div class="center">
      <div>
        <img :src="`${cdnUrl}/images/qrcode.jpg`" alt="" />
        <p>- 扫码立即联系我们 -</p>
        <p>工信部备案：皖ICP备2022007481</p>
      </div>
    </div>
    <div class="right">
      <p>Copyright © . 安徽九个挑夫电子商务有限公司 All rights reserved.</p>
      <!-- <a href="#" @click="show = true"><i class="">微信</i></a> -->
      <!-- <a href="#" @click="show = true"><i class="">微博</i></a> -->
      <span @click="show = true">微信公众号</span>
      <!-- <a style="color: white; text-decoration: none" href="https://weibo.com/u/7750659542">微博</a> -->
      <div v-if="show" class="wx-zzc" @click="show = false">
        <div style="z-index: 6; width: 200px; height: 200px">
          <span style="font-weight: bold; color: black">请扫描下方二维码</span>
          <button
            style="float: right; border: none; background-color: aquamarine; border-radius: 10px"
            @click="show = false">
            关闭
          </button>
          <img :src="`${cdnUrl}/images/qrcode.jpg`" style="width: 100%" alt="" />

          <!-- <img src="assets/images/about/about-v1-img1.jpg" style="width:100%;z-index:10;"  alt=""> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { cdnUrl } from "../common/setting";
  export default {
    name: "PageFooter",
    data() {
      return {
        cdnUrl,
        show: false,
      };
    },
    methods: {},
  };
</script>
<style lang="scss" scoped>
  .footer {
    // position: fixed;
    // text-align: center;
    display: flex;
    justify-content: space-around;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 260px;
    // line-height: 50px;
    color: #ffffff;
    background-color: rgba(51, 51, 51);
    padding: 20px 0 0;
    .left {
      width: 300px;
      height: 100%;
      // border: 1px solid red;
    }
    .center {
      width: 300px;
      height: 100%;
      // border: 1px solid red;
      text-align: center;
      img {
        width: 170px;
        height: 170px;
      }
    }
    .right {
      cursor: pointer;
      width: 300px;
      height: 100%;
      // border: 1px solid red;
      text-decoration: none;
    }
    .wx-zzc {
      position: fixed;
      top: 0;
      left: -30px;
      right: 0;
      bottom: 0;
      z-index: 3;
      background: rgba(255, 255, 255, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media only screen and (max-width: 450px) {
    .footer {
      width: 100%;
      height: 600px;
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      padding: 20px;
      .left {
        width: 100%;
        text-align: center;
      }
      .center {
        width: 100%;
        text-align: center;
      }
      .right {
        width: 100%;
        text-align: center;
        p {
          text-align: left;
        }
        span {
          margin: 0 20px;
        }
      }
    }
  }
</style>
