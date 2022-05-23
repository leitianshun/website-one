<template>
  <div>
    <div class="bg">
      <div style="color: black">
        <h1>饮水常识</h1>
        <p>水是人赖以生存和维持生命的最基础物质,人体生命对于水的需求仅次于对空气中的氧的需求。</p>
      </div>

      <div class="flex" style="">
        <div class="item">
          <h4>水中矿物质原来对人体那么重要！！</h4>
          <p>
            研究证明，水中矿物质对人体生命与健康来说，是不可缺少的，尤其是天然矿泉水中的矿物质，不能用食物中的矿物质来取代。
          </p>
        </div>
        <div class="item">
          <h4>究竟怎么喝水才对？你真的知道吗？</h4>
          <p>
            科学研究显示，人体内的水每5~13天更新一次，而正常情况下，发育成熟的肌体中，除脑细胞和神经细胞外，其他细胞仍然不停地在进行死亡和再生的交替活动，研究提出营养膳食指导建议，其中建议尽可能每日饮水量达到1500-2000毫升，保证充足饮水量。
          </p>
        </div>
        <div class="item">
          <h4 style="text-align: center">矿泉水</h4>
          <p>
            矿泉水是从地下深处自然涌出的或者是经人工揭露的、未受污染的地下矿水；含有一定量的矿物盐、微量元素或二氧化碳气体；在通常情况下，其化学成分、流量、水温等动态在天然波动范围内的相对稳定。矿泉水是在地层深部循环形成的，含有国家标准规定的矿物质及限定指标。
          </p>
        </div>
        <div class="item">
          <h4 style="text-align: center">我们喝的自来水怎么来的?</h4>
          <p>
            自来水是人们生活中不可缺少的基本物质之一，自来水的生产流程并不简单，共分为四道生产工序：第一道道生产工序—混凝，第二道生产工序—沉淀，第三道生产工序—过滤，第四道工序—消毒，第五道工序—加压供水。
          </p>
        </div>
        <div class="item">
          <h4 style="text-align: center">你知道矿泉水是什么水吗</h4>
          <p>
            矿泉水分为天然矿泉水和非天然，天然矿泉水指从地下深处自然涌出或经钻井采集，含有一定量的矿物质、微量元素或其他成分，在一定区域内未受污染并采取预防措施避免污染的水,在通常情况下，其化学成分、流量、水温等动态在天然波动范围内的相对稳定。矿泉水是在地层深部循环形成的，含有国家标准规定的矿物质及限定指标。
          </p>
        </div>
        <div class="item">
          <h4 style="text-align: center">饮用水</h4>
          <p>
            饮用水是指可以不经处理、直接供给人体饮用的水。水是体液的主要组成部分，是构成细胞、组织液、血浆等的重要物质。水作为体内一切化学反应的媒介，是各种营养素和物质运输的平台。饮用水包括干净的天然泉水、井水、河水和湖水，也包括经过处理的矿泉水、纯净水等。加工过的饮用水有瓶装水、桶装水、管道直饮水等形式。
          </p>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
  import { cdnUrl } from "../common/setting";

  export default {
    name: "CommonSense",
    data() {
      return {
        cdnUrl,
      };
    },
  };
</script>
<style lang="scss" scoped>
  .bg {
    background-image: url(/images/dxsqbg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 850px;
    text-align: center;
    padding: 70px 0 0;
    margin-top: 30px;
    .flex {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      text-align: center;
    }
    .item {
      //   display: flex;
      //   flex-wrap: wrap;
      width: 400px;

      height: 290px;
      //   overflow: hidden;
      background: #f3f3f3;
      padding: 30px;
      //   border: 1px solid red;
      margin: 15px 10px;
      text-align: left;
      cursor: pointer;
      position: relative;
      box-shadow: 4px 4px 8px gray;
      z-index: 1;

      h4 {
        font-weight: bold;
      }
      p {
        margin-top: 10px;
      }
      &::before {
        content: "";
        display: block;
        width: 0;
        height: 290px;
        // background-color: red;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        transition: all 0.5s;
        z-index: -1;
      }
      &:hover::before {
        width: 400px;
        color: #f3f3f3;
        // color: red;
        background-color: green;
        opacity: 0.4;
        transform: scale(1.1);
      }
    }
  }
  @media only screen and (max-width: 450px) {
    // width: 100%;
    .bg {
      margin-top: 20px;
      width: 100%;
      height: 2140px;
      .flex {
        padding: 0 20px;
        .item {
          width: 100%;
          p {
            width: 300px;

            text-align: left;
          }
        }
      }
    }
  }
</style>
