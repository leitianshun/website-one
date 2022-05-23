<template>
  <div class="page-wrapper">
    <PageHeader />

    <nuxt />
    <PageFooter />

    <scroll-to-top />
  </div>
</template>

<script>
  import PageFooter from "../components/PageFooter.vue";
  import PageHeader from "../components/PageHeader.vue";
  import ScrollToTop from "@/components/ScrollToTop.vue";

  export default {
    name: "DefaultLayout",
    components: { ScrollToTop, PageFooter, PageHeader },
    methods: {},
  };
</script>
<style lang="scss">
  // body {
  //   scroll-behavior: smooth;
  // }
  // html,
  // body {
  //   scroll-behavior: smooth;
  //   overflow-x: scroll;
  //   &::-webkit-scrollbar {
  //     display: none;
  //   }
  // }
  @media only screen and (max-width: 450px) {
    .page-wrapper {
      width: 100%;
    }
  }
</style>
