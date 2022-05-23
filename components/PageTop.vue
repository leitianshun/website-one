<template>
  <div>
    <section class="page-header image-size clearfix" :style="`background-image: url(` + imageUrl + `)`">
      <div class="container">
        <div class="page-header__inner text-center">
          <ul class="thm-breadcrumb">
            <li>
              <a href="#">{{ topText }}</a>
            </li>
            <!-- <li>{{ topTitle }}</li> -->
          </ul>
          <h2 :class="{ red: isRed }">{{ title }}</h2>
        </div>
      </div>
    </section>
    <!-- <div>
      <img :src="imgUrl" style="width: 100%" alt="" />
    </div> -->
  </div>
</template>

<script>
  // import { cdnUrl } from '@/common/setting'
  export default {
    name: "PageTop",
    props: {
      title: { type: String, default: "" },
      topTitle: { type: String, default: "" },
      imageUrl: { type: String, default: "" },
      topText: {
        type: String,
        default: "",
      },
      imgUrl: {
        type: String,
        default: "",
      },
      isRed: {
        type: Boolean,
        default: false,
      },
      // isChange:{
      //   type:Boolean,
      //   default:false
      // }
    },
    data() {
      return {
        // cdnUrl,
      };
    },
  };
</script>

<style scoped lang="scss">
  .page-header {
    height: 530px;
    // width: 100%;
    z-index: 1;
    position: relative;
    display: block;
    background-attachment: scroll;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 120px 0px 120px;
    overflow: hidden;
    // &::before {
    //   content: "";
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   bottom: 0;
    //   right: 0;
    //   background: rgba(var(--thm-primary-rgb), 0.2);
    //   background: rgba(255, 255, 255, 0.2);
    //   z-index: -1;
    // }
  }
  .page-header__inner {
    position: relative;
    display: block;
    .thm-breadcrumb {
      position: relative;
      display: inline-block;
      margin-bottom: 11px;
      overflow: hidden;
      &::before {
        content: "";
        position: absolute;
        left: 40px;
        bottom: 0;
        right: 0;
        height: 1px;
        background: #ffffff;
      }
      li {
        position: relative;
        display: inline-block;
        color: #ffffff;
        font-size: 14px;
        line-height: 24px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        // font-family: var(--thm-font);
        + {
          li {
            padding-left: 13px;
          }
        }
        a {
          color: white;
          transition: all 200ms linear;
          transition-delay: 0.1s;
          text-decoration: none;
          &:hover {
            color: rgb(237, 240, 54);
          }
        }
      }
    }
    h2 {
      color: #ffffff;

      font-size: 50px;
      line-height: 1em;
      letter-spacing: -0.04em;
    }
  }
  // 移动端page-header展示
  @media only screen and (max-width: 450px) {
    .page-header {
      width: 100%; //让文字居中
      height: 170px;
      z-index: 1;
      background-size: cover;
      vertical-align: middle;
      background-position: center center;
      background-attachment: scroll;
      padding: 0;
      //   margin-bottom: 20px;
      display: flex;
      justify-content: center;
    }
    // .page-header:before {
    //   width: 0px;
    // }
  }
</style>
