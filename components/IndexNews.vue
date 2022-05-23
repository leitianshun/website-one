<template>
  <!--Blog One Start-->
  <section class="blog-one">
    <div
      class="blog-one__bg wow animate__animated animate__slideInDown"
      data-wow-delay="100ms"
      data-wow-duration="2500ms"></div>
    <div class="container">
      <div class="sec-title text-center">
        <div class="icon">
          <!-- <img :src="`${cdnUrl}/images/resources/sec-title-icon1.png`" alt="" /> -->
        </div>
        <span class="sec-title__tagline" style="font-weight: bold">News</span>
        <h2 class="sec-title__title">新闻动态</h2>
      </div>
      <div class="row">
        <!--Start Single Blog One-->
        <div
          v-for="item in articleList"
          :key="item.id"
          class="col-xl-4 col-lg-4 wow animate__animated animate__fadeInLeft"
          data-wow-delay="0ms"
          data-wow-duration="1500ms">
          <news-card :item="item" />
        </div>

        <nuxt-link
          style="
            width: 100px;
            height: 40px;
            margin: 0 auto;
            line-height: 40px;
            background-color: green;
            border-radius: 20px;
            color: white;
            text-decoration: none;
            text-align: center;
          "
          class="thm-btn"
          :to="{ path: '/news', query: { pageNum: 1 } }">
          更多内容
        </nuxt-link>

        <!--End Single Blog One-->
      </div>
    </div>
  </section>
  <!--Blog One End-->
</template>

<script>
  import NewsCard from "./NewsCard.vue";
  // import SecTitle from './SecTitle.vue'
  export default {
    name: "IndexNews",
    components: { NewsCard },
    props: {
      articleList: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>

<style lang="scss" scoped>
  .blog-one {
    position: relative;
    display: block;
    background: #ffffff;
    padding: 120px 0px 90px;
    overflow: hidden;
    z-index: 1;
  }

  .blog-one__bg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 557px;
    background: #f6f4ec;
    z-index: -1;
  }

  .blog-one .sec-title {
    margin-bottom: 53px;
  }

  .blog-one--news .news-sidebar__btn {
    margin-top: 10px;
  }
</style>
