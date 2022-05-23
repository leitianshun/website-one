<template>
  <div class="contains" style="">
    <h2>{{ title }}</h2>
    <div class="contain" style="">
      <div class="bg" style="">
        <h2 style="margin-top: 110px">{{ typeOne }}</h2>
        <p>{{ textOne }}</p>
        <div>
          <!-- <button class="btns">+</button> -->
        </div>
      </div>
      <div class="bgs">
        <h2 style="margin-top: 110px">{{ typeTwo }}</h2>
        <p>{{ textTwo }}</p>
        <div>
          <!-- <button class="btns">+</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { cdnUrl } from "../common/setting";

  export default {
    name: "ProductCenter",
    props: {
      title: { type: String, default: "" },
      typeOne: { type: String, default: "" },
      textOne: { type: String, default: "" },
      typeTwo: { type: String, default: "" },
      textTwo: { type: String, default: "" },
    },
    data() {
      return {
        cdnUrl,
      };
    },
  };
</script>
<style lang="scss" scoped>
  .contains {
    text-align: center;
    height: 600px;
    padding: 40px 0 0;

    // .btns {
    //   position: relative;
    //   width: 100px;
    //   height: 40px;
    //   border-radius: 15px;
    //   border: none;
    //   outline: none;
    //   transition: all 0.5s;
    //   &:hover {
    //     background-color: rgb(131, 255, 127);
    //   }
    //   // &::after {
    //   //   content: "";
    //   //   display: block;
    //   //   width: 0px;
    //   //   height: 34px;
    //   //   position: absolute;
    //   //   background-color: red;
    //   //   left: 0;
    //   //   border-radius: 15px;
    //   //   right: 0;
    //   //   bottom: 0;
    //   //   &:hover {
    //   //     width: 100px;
    //   //   }
    //   // }
    // }
    .contain {
      display: flex;
      justify-content: space-around;
      margin-top: 60px;
      .bg {
        position: relative;
        background-image: url(/images/dxsq2.png);
        width: 600px;
        height: 350px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.9s;

        // h2 {
        //   @keyframes change {
        //     0% {
        //       color: rgb(255, 255, 255, 0.1);
        //     }
        //     30% {
        //       color: rgb(255, 255, 255, 0.3);
        //     }
        //     50% {
        //       color: rgb(255, 255, 255, 0.5);
        //     }
        //     80% {
        //       color: rgb(255, 255, 255, 0.8);
        //     }
        //     100% {
        //       color: rgb(19, 241, 67);
        //     }
        //   }
        // }
        // &:hover {
        //   animation: change 1.5s ease-out 0s infinite alternate;
        // }
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 600px;
          height: 3px;
          background-color: rgba(255, 255, 255, 0.2);
          transition: all 1.1s;
        }

        &:hover::before {
          height: 350px;
        }
        &:hover {
          transform: scale(1.2);
        }
        &:hover h2 {
          transform: scale(1.3);
        }
        &:hover p {
          transform: scale(1.4);
        }
      }
      .bgs {
        position: relative;
        background-image: url(/images/dxsqs.png);
        width: 600px;
        height: 350px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.9s;
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 600px;
          height: 3px;
          background-color: rgba(255, 255, 255, 0.2);
          transition: all 1.1s;
        }

        &:hover::before {
          height: 350px;
        }
        &:hover {
          transform: scale(1.2);
        }
        &:hover h2 {
          transform: scale(1.3);
        }
        &:hover p {
          transform: scale(1.4);
        }
      }
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 450px) {
    .contains {
      width: 100%;
      height: 500px;
      margin-bottom: 230px;
      .contain {
        width: 100%;
        padding: 0 25px;

        display: flex;
        flex-direction: column;
        margin-top: 10px;
        .bg {
          width: 100%;

          height: 300px;

          background-size: contain;
        }
        .bgs {
          width: 100%;

          height: 300px;

          margin-top: 10px;
          background-size: contain;
        }
      }
    }
  }
</style>
