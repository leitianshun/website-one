<template>
  <div id="home">
    <PageSwiper />
    <PageSource />

    <MetaSiliCate />

    <PageGife />
    <IndexNews :article-list="articleList" />
    <!-- <CommonSense /> -->
    <!-- <BrandCulture /> -->
  </div>
</template>

<script>
  import PageSwiper from "../components/PageSwiper.vue";
  import PageSource from "../components/PageSource.vue";
  // import ProductCenter from "../components/ProductCenter.vue";
  // import ProductionBase from "../components/ProductionBase.vue";

  // import BrandCulture from "../components/BrandCulture.vue";
  import PageGife from "../components/PageGife.vue";
  import MetaSiliCate from "../components/MetaSiliCate.vue";
  import IndexNews from "../components/IndexNews.vue";
  import { getArticlesList } from "@/api/article";
  // import CommonSense from "../components/CommonSense.vue";

  export default {
    name: "IndexPage",
    components: {
      PageSwiper,
      PageSource,
      // ProductCenter,
      // BrandCulture,
      PageGife,
      MetaSiliCate,
      IndexNews,
    },
    async asyncData() {
      try {
        const articleResponse = await getArticlesList(1, 3, {});
        return {
          articleList: articleResponse.data.records,
        };
      } catch (e) {
        return {
          articleList: [],
        };
      }
    },
  };
</script>

<style lang="scss" scoped></style>
