<template>
  <div class="contains">
    <hr />
    <div class="sm">
      <div class="text">
        <h4>||坚持水源地灌装 大雄山泉提升品质生活</h4>
        <p>
          大雄山位于安徽省怀宁县境内，为怀宁县第二高峰。以大雄山为界，山南为平山镇，山北为声名远播的馒头之乡江镇镇，江镇镇新联村雄山自然村，有一口千年自涌古泉虽然历经岁月沧桑，依旧清澈如碧，潺流不息。井水主要为岩溶水，富含多种微量元素，偏硅酸含量达到35mg/L，超出矿泉水标准值25mg/L。大雄山泉坚持水源地建厂、水源地罐装，不添加任何人工矿物质，确保每一滴大雄山泉都来自大雄山自涌泉，更致力于水源地保护，为消费者搬运真正的源头好水。
        </p>
      </div>
      <img :src="`${cdnUrl}/images/dxsqsm.png`" style="width: 100%" alt="" />
    </div>
    <img :src="`${cdnUrl}/images/pgs_01.gif`" style="width: 100%" alt="" />
    <img :src="`${cdnUrl}/images/ph1.png`" style="width: 100%" alt="" />
    <img :src="`${cdnUrl}/images/ph2.png`" style="width: 100%" alt="" />
    <img :src="`${cdnUrl}/images/ph3.png`" style="width: 100%" alt="" />
    <!-- <div class="column" style="">
      <img src="../static/images/bowen.png" alt="" />
      <h1 style="color: rgb(0, 115, 66)">一张图带你了解偏硅酸</h1>
      <div class="columns" style="">
        <img src="../static/images/pgs_02.gif" style="" alt="" />
        <div class="none" style="width: 1px; height: 300px; background-color: black"></div>
        <div class="text" style="">
          <p>
            <b style="color: rgb(0, 155, 66)">— ◎</b>
            偏硅酸是人体需求的微量元素之一，容易被人体所吸收，可以有效地维持人体的电解质平衡。并且只存在于天然矿泉水当中，没有办法以人工添加的方式添加进饮用水中，因此补充偏硅酸的最佳方式是饮用天然矿泉水。
          </p>
          <p style="margin-top: 60px">
            <b style="color: rgb(0, 155, 66)">— ◎</b>
            偏硅酸是一种比较稀有的矿物质资源，具有很高的饮用价值，被称之为“水中黄金”，偏硅酸含量的高低，是我国鉴定天然矿泉水是否达标所采用的重要的界限指标之一。
          </p>
        </div>
      </div>
    </div> -->
    <img :src="`${cdnUrl}/images/pgs_03.gif`" style="width: 100%" alt="" />
    <!-- <img src="../static/images/pgs_04.gif" style="width: 100%" alt="" /> -->

    <img :src="`${cdnUrl}/images/pgs_07.gif`" style="width: 100%; margin-top: 10px" alt="" />
    <img :src="`${cdnUrl}/images/pgs_05.gif`" style="width: 100%" alt="" />
    <img :src="`${cdnUrl}/images/pgs_06.gif`" style="width: 100%" alt="" />
    <hr />
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
  .contains {
    margin-top: 30px;
    .sm {
      // background-image: url(../static/images/dxsqsm.png);
      // width: 100%;
      // height: 900px;
      // background-position: center;
      // background-repeat: no-repeat;
      // background-size: cover;
      margin-bottom: 5px;
      text-align: right;
      padding: 0 20px;
      position: relative;
      margin-top: 90px;

      .text {
        position: absolute;
        top: -31px;
        right: 40px;

        h4 {
          color: rgb(0, 115, 66);
          margin-right: 90px;
          text-align: left;
        }
        p {
          float: right;
          width: 630px;
          text-align: left;
          text-indent: 2em;
        }
      }
    }
    .column {
      text-align: center;
      padding: 60px 50px;

      .columns {
        display: flex;
        justify-content: space-around;
        margin-top: 60px;
        img {
          width: 500px;
          height: 300px;
        }
        .text {
          width: 400px;
          margin-top: 60px;
          text-align: left;
        }
      }
    }
  }
  @media only screen and (max-width: 450px) {
    .contains {
      width: 100%;
      position: relative;

      .sm {
        width: 100%;
        background-size: contain;
        height: 470px;
        text-align: center;
        position: relative;
        .text {
          width: 100%;
          position: absolute;
          right: 0;
          h4 {
            margin: 0;
            text-align: center;
            // word-break: keep-all;
          }
          p {
            width: 100%;
            height: 270px;
            padding: 0 20px;
            text-align: left;
            margin-top: 20px;
          }
        }
        img {
          position: absolute;
          bottom: 10px;
          left: 0;
        }
      }
      .column {
        display: flex;
        flex-direction: column;
        padding: 20px 20px;
        p {
          width: 400px;
        }
        .columns {
          display: flex;
          flex-direction: column;
          img {
            width: 100%;
          }
          .none {
            display: none;
          }
          .text {
            width: 100%;
            // margin-top: 60px;
            text-align: center;
            p {
              width: 100%;
              // text-align: center;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1800px) {
    .contains {
      margin-top: 30px;
      .sm {
        .text {
          right: 180px;
        }
      }
    }
  }
</style>
