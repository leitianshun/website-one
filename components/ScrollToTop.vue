<template>
  <client-only>
    <span v-show="isVisible" href="#" class="scroll-to-top" @click="scrollToTop">
      <span style="font-size: 10px; display: flex; flex-direction: column">
        <!-- <p style="font-size: 20px; margin: 0">↑</p> -->
        <i style="font-size: 25px; margin-top: -10px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-double-up"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
            <path
              fill-rule="evenodd"
              d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
          </svg>
        </i>
        回到顶部
      </span>
      <!-- <img src="../static/images/hddb3.png" style="width: 100%; height: 100%" alt="" /> -->
      <!-- <i>☝</i> -->
    </span>
  </client-only>
</template>

<script>
  import { debounce } from "vue-debounce";
  export default {
    data() {
      return {
        scrollTop: null,
        isVisible: false,
        visibleDistance: 200,
      };
    },
    mounted() {
      window.addEventListener("scroll", debounce(this.scrollListener, 100), true);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.scrollListener);
    },
    methods: {
      scrollListener() {
        if (window.pageYOffset) {
          this.scrollTop = window.pageYOffset;
        } else {
          this.scrollTop = 0;
        }
        // 控制按鈕顯示
        if (this.scrollTop > this.visibleDistance) {
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      },
      scrollToTop() {
        this.intervalId = setInterval(() => {
          if (window.pageYOffset === 0) {
            clearInterval(this.intervalId);
          }
          window.scroll(0, window.pageYOffset - 200);
        }, 10);
      },
    },
  };
</script>

<style lang="scss">
  :root {
    --thm-font: "DM Sans", sans-serif;
    --thm-font-2: "Averia Sans Libre", cursive;
    --thm-font-3: "Shadows Into Light", cursive;
    --thm-base: #f1cf69;
    --thm-base-rgb: 241, 207, 105;
    --thm-primary: #334b35;
    --thm-primary-rgb: 51, 75, 53;
    --thm-secondary: #6d8c54;
    --thm-secondary-rgb: 109, 140, 84;
    --thm-color-1: #687469;
    --thm-color-1-rgb: 104, 116, 105;
  }
  .scroll-to-top {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 70px;
    // background: var(--thm-base);
    // background: red;
    position: fixed;
    bottom: 91px;
    right: 20px;
    z-index: 99;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    text-align: center;
    transition: all 0.6s ease;

    // display: none;

    overflow: hidden;
    background-color: white;
    cursor: pointer;
    span {
      // background-color: white;
      margin-top: 10px;
      display: block;
      color: #fff;
      // line-height: 70px;
      font-weight: bold;
    }

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100px;
      // background: rgba(var(--thm-primary-rgb), 0.15);
      background: rgb(0, 121, 104);

      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      content: "";
      transform: scale(1);
      transition: 700ms ease;
      z-index: -1;
    }

    &:hover:before {
      height: 100%;
      opacity: 1;
      transform: scale(1.5);
      border-radius: 0;
      // background: var(--thm-primary);
      background: rgb(0, 121, 104);
      // color: red;
    }

    // i {
    //   position: relative;
    //   display: inline-block;
    //   // color: var(--thm-primary);
    //   font-size: 18px;
    //   line-height: 70px;
    //   transform: rotate(-90deg);
    // }

    &:hover {
      background-color: green;

      i {
        color: #fff;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    .scroll-to-top {
      position: fixed;
      bottom: 40px;
      left: 290px;
      // display: none;
    }
    // @media only screen and (max-width: 381px) {
    //   .scroll-to-top {
    //     position: fixed;
    //     bottom: 60px;
    //     left: 290px;
    //     // display: none;
    //   }
    // }
  }
</style>
