<template>
  <div class="contain">
    <hr />
    <h2>生产基地</h2>
    <div class="column">
      <div class="item">
        <h3>
          坚持水源地灌装
          <br />
          大雄山泉提升品质生活
        </h3>
        <p>
          大雄山位于安徽省怀宁县境内，为怀宁县第二高峰。以大雄山为界，山南为平山镇，山北为声名远播的馒头之乡江镇镇，江镇镇新联村雄山自然村，有一口千年自涌古泉虽然历经岁月沧桑，依旧清澈如碧，潺流不息。井水主要为岩溶水，富含多种微量元素，偏硅酸含量达到35mg/L，超出矿泉水标准值25mg/L,为充分发挥资源优势，打造“一村一品”，助力乡村振兴，九个挑夫与江镇镇人民政府联手，立足泉水资源，共同开发“大雄山泉”，让养育了一代又一代村民的千年古泉，成为当地老百姓增收致富的常青产业。
        </p>
        <!-- <p>
          为了健康，即便节食，也还是要规律地吃一些食物，同时喝点苏打水。而减肥还是用运动代替单纯的节食，运动后就不要为了一时畅爽喝碳酸饮料了，除了喝健康的运动饮料，苏打水也是不错的选择。
        </p> -->
      </div>
      <div class="swiper">
        <swiper class="swiper-container" :options="swiperOption" style="">
          <swiper-slide class="slide">
            <div>
              <img :src="`${cdnUrl}/images/backgrounds/base.png`" style="" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="slide">
            <div>
              <img :src="`${cdnUrl}/images/dxsq.jpg`" style="" alt="" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";

  import "swiper/css/swiper.css";
  import { cdnUrl } from "@/common/setting";

  export default {
    name: "PageSwiper",
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        cdnUrl,
        swiperOption: {
          loop: true,
          effect: "fade",
          slidesPerView: 1,
          pagination: {
            el: "#main-slider-pagination",
            type: "bullets",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          autoplay: {
            delay: 1800,
          },
        },
      };
    },
  };
</script>
<style lang="scss" scoped>
  .contain {
    text-align: center;
    padding: 0 30px;
    .column {
      display: flex;
      margin-top: 40px;
      justify-content: space-around;
      .item {
        width: 700px;
        p {
          width: 600px;
          margin-top: 50px;
          text-align: left;
          font-size: 20px;
          color: gray;
          text-indent: 2em;
        }
      }
      .swiper {
        .swiper-container {
          width: 600px;
          height: 400px;
          .slide {
            width: 100%;
            height: 400px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 450px) {
    .contain {
      width: 100%;
      height: 780px;
      padding: 0 30px;
      .column {
        display: flex;
        flex-direction: column;

        .item {
          width: 100%;
          h3 {
            text-align: center;
            width: 100%;
          }
          p {
            text-align: left;
            width: 100%;
            font-size: 15px;
            text-indent: 3em;
          }
        }
        .swiper {
          width: 100%;
          height: 300px;

          .swiper-container {
            width: 100%;
            height: 300px;

            .slide {
              width: 100%;
              height: 300px;
              // margin-right: 30px;
              img {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
</style>
