<template>
  <div>
    <!-- title="新闻中心" top-text="NEWS"  -->
    <PageTop :image-url="`${cdnUrl}/images/news.png`" />

    <!-- <nuxt-link to="/news/666">go to details</nuxt-link> -->
    <section class="blog-one blog-one--news">
      <div
        class="blog-one__bg wow animate__animated animate__slideInDown"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"></div>
      <div class="container">
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
          <!--End Single Blog One-->
        </div>
        <div class="" style="display: flex; justify-content: space-around">
          <div v-if="pageNum != 1" class="" style="text-align: center">
            <div class="news-sidebar__btn">
              <a class="thm-btn" @click="getPre()">上一页</a>
            </div>
          </div>
          <div class="" style="text-align: center">
            <div class="news-sidebar__btn">
              <a class="thm-btn" @click="getNext()">下一页</a>
            </div>
          </div>
          <!-- /.col-lg-12 text-center -->
        </div>
        <!-- /.row -->
      </div>
    </section>
  </div>
</template>
<script>
  // import { get } from "http";

  import PageTop from "../../components/PageTop.vue";
  import { cdnUrl } from "@/common/setting";

  import NewsCard from "@/components/NewsCard.vue";
  import { getArticlesList } from "@/api/article";
  export default {
    name: "NewS",
    components: { PageTop, NewsCard },
    async asyncData({ query }) {
      try {
        const articleResponse = await getArticlesList(query.pageNum, 9, {});
        return {
          articleList: articleResponse.data.records,
          pageNum: query.pageNum,
        };
      } catch (e) {}
    },
    data() {
      return { pageNum: 1, cdnUrl };
    },
    watchQuery: true,

    methods: {
      // look() {
      //   this.$router.push({
      //     path: "/news/4",
      //     query: { name: "hello", id: 2 },
      //   });
      // },
      getNext() {
        this.$router.push({
          path: "/news",
          query: {
            pageNum: ++this.pageNum,
          },
        });
      },
      getPre() {
        this.$router.push({
          path: "/news",
          query: {
            pageNum: --this.pageNum,
          },
        });
      },
    },
  };
</script>
<style lang="scss" scoped>
  .news-sidebar__btn {
    position: relative;
    display: block;
    margin-top: 30px;
    background-color: green;
    width: 80px;
    height: 35px;
    border-radius: 20px;
    line-height: 35px;
    a {
      text-decoration: none;
      color: #ffffff;
      cursor: pointer;
    }
  }
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
  /* 修改移动端内容间距 */
  @media only screen and (max-width: 450px) {
    .blog-one--news {
      padding: 20px 0 90px;
    }
  }
</style>
