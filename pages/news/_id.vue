<template>
  <div>
    <PageTop :image-url="`${cdnUrl}/images/news.png`" />
    <div class="news">
      <h3><span>新闻详情</span></h3>
    </div>
    <section class="news-details">
      <div class="container">
        <div class="row">
          <!--Start News Details Laft-->
          <div class="col-xl-8 col-lg-7">
            <div class="news-details__left">
              <!--Start Single Blog One-->
              <div class="blog-one__single">
                <div class="blog-one__single-img">
                  <img :src="newsDetail.thumbImg" alt="" style="max-width: 100%" />
                </div>

                <div class="blog-one__single-content">
                  <ul class="meta-info">
                    <li>
                      <a href="#"></a>
                      <i class="fa fa-clock"></i>
                      {{ newsDetail.releaseTime | formatDate }}
                      <!-- </a> -->
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-user-circle"></i>
                        {{ newsDetail.authorName }}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-eye"></i>
                        {{ newsDetail.viewCount }}
                      </a>
                    </li>
                  </ul>
                  <h2>
                    {{ newsDetail.title }}
                  </h2>
                  <p>
                    <span v-dompurify-html="newsDetail.content"></span>
                  </p>
                </div>
              </div>

              <div class="tag-social-link">
                <div class="tag-social-link__tag">
                  <div class="title">
                    <h4>标签</h4>
                  </div>
                  <div class="tag-social-link__tag-list">
                    <ul v-for="item in newsDetail.tagList" :key="item.id">
                      <li>
                        <a href="#">{{ item.name }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tag-social-link__social-links">
                  <ul>
                    <li>
                      <a href="#"><i class="fab fa-qq"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-weixin"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-weibo"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!--End News Sidebar Laft-->

          <!--Start News Sidebar Sidebar-->
          <div class="col-xl-4 col-lg-5">
            <div class="sidebar">
              <div
                class="sidebar__single sidebar__latest-posts wow animate__animated animate__fadeInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1200m">
                <div class="title">
                  <h2>最新文章</h2>
                </div>
                <ul v-for="item in recentNewsList" :key="item.id" class="sidebar__latest-posts-list">
                  <li class="sidebar__latest-posts-list-item">
                    <div class="img-box"></div>
                    <div class="title">
                      <p>
                        <i class="fa fa-comments"></i>
                        {{ item.viewCount }}回复
                      </p>
                      <h4>
                        <nuxt-link :to="`/news/${item.id}`" text-truncate>{{ item.title }}</nuxt-link>
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>

              <div
                class="sidebar__single sidebar__tag wow fadeInUp animated animated animated"
                data-wow-delay="0.4s"
                data-wow-duration="1200m">
                <div class="title">
                  <h2>标签</h2>
                </div>
                <ul v-for="item in tagList" :key="item.id" class="sidebar__tag-list">
                  <li>
                    <a href="#">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--End News Details Sidebar-->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import PageTop from "../../components/PageTop.vue";
  import { cdnUrl } from "@/common/setting";

  import { getArticleDetail, getArticleCategoryList, getArticleTagList, getArticlesList } from "@/api/article";
  export default {
    components: { PageTop },
    async asyncData({ params }) {
      const { id } = params;
      // 并发请
      const [articleRes, cateRes, tagRes, articleListRes] = await Promise.all([
        getArticleDetail(id),
        getArticleCategoryList(),
        getArticleTagList(),
        getArticlesList(1, 3, {}),
      ]);
      return {
        newsDetail: articleRes.data,
        categoryList: cateRes.data.records,
        tagList: tagRes.data.records,
        recentNewsList: articleListRes.data.records,
      };
    },
    data() {
      return { cdnUrl };
    },
  };
</script>
<style lang="scss" scoped>
  .news {
    background-color: #f8f7ef;
    text-align: center;
    h3 {
      width: 150px;
      height: 50px;
      text-align: center;
      margin: auto;
      line-height: 50px;
      background-color: rgb(122, 184, 255);
      color: white;
    }
  }
  .sidebar {
    position: relative;
    display: block;
  }
  .sidebar__single {
    position: relative;
    display: block;
    margin-bottom: 30px;
  }
  .sidebar__single .title {
    position: relative;
    display: block;
    margin-bottom: 22px;
  }
  .sidebar__single .title h2 {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.02em;
  }
  .sidebar__search {
    position: relative;
    display: block;
  }
  .sidebar__search-form {
    position: relative;
  }
  .sidebar__search-form input[type="search"] {
    display: block;
    border: none;
    outline: none;
    background-color: var(--thm-base);
    color: var(--thm-primary);
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
    padding-left: 50px;
    height: 70px;
    border-radius: 10px;
    width: 100%;
    padding-right: 80px;
  }
  .sidebar__search-form ::-webkit-input-placeholder {
    color: var(--thm-primary);
    opacity: 1;
  }
  .sidebar__search-form ::-moz-placeholder {
    color: var(--thm-primary);
    opacity: 1;
  }
  .sidebar__search-form :-ms-input-placeholder {
    color: var(--thm-primary);
    opacity: 1;
  }
  .sidebar__search-form ::-ms-input-placeholder {
    color: var(--thm-primary);
    opacity: 1;
  }
  .sidebar__search-form ::placeholder {
    color: var(--thm-primary);
    opacity: 1;
  }
  .sidebar__search-form :-ms-input-placeholder {
    color: var(--thm-primary);
  }
  .sidebar__search-form ::-ms-input-placeholder {
    color: var(--thm-primary);
  }
  .sidebar__search-form button[type="submit"] {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20px;
    color: var(--thm-primary);
    font-size: 22px;
    width: 80px;
    outline: none;
    border: none;
    padding: 0;
    background-color: transparent;
  }
  .sidebar__search-form button span::before {
    position: relative;
    display: inline-block;
    line-height: 70px;
    font-weight: 700;
  }
  .sidebar__latest-posts {
    position: relative;
    display: block;
    background: #f6f4ec;
    border-radius: 10px;
    padding: 41px 50px 23px;
  }
  .sidebar__latest-posts-list {
    position: relative;
    display: block;
  }
  .sidebar__latest-posts-list-item {
    position: relative;
    display: flex;
    align-items: flex-start;
    margin-bottom: 8px;
  }
  .sidebar__latest-posts-list-item:last-child {
    margin-bottom: 0;
  }
  .sidebar__latest-posts-list-item .img-box {
    position: relative;
    display: block;
    border-radius: 10px;
    overflow: hidden;
  }
  .sidebar__latest-posts-list-item .title {
    position: relative;
    display: block;
    line-height: 0;
    padding-left: 20px;
  }
  .sidebar__latest-posts-list-item .title p {
    font-size: 14px;
    margin-bottom: 5px;
  }
  .sidebar__latest-posts-list-item .title p i::before {
    position: relative;
    display: inline-block;
    color: var(--thm-secondary);
    font-size: 12px;
    padding-right: 5px;
  }
  .sidebar__latest-posts-list-item .title h4 {
    font-size: 18px;
    line-height: 26px;
  }
  .sidebar__latest-posts-list-item .title h4 a {
    color: var(--thm-primary);
    transition: all 200ms linear;
    transition-delay: 0.1s;
  }
  .sidebar__latest-posts-list-item .title h4 a:hover {
    color: var(--thm-base);
  }
  .sidebar__categories {
    position: relative;
    display: block;
    background: #f6f4ec;
    border-radius: 10px;
    padding: 42px 30px 35px;
  }
  .sidebar__categories .title {
    position: relative;
    display: block;
    margin-bottom: 7px;
    padding-left: 20px;
  }
  .sidebar__categories-list {
    position: relative;
    display: block;
  }
  .sidebar__categories-list li {
    position: relative;
    display: block;
    margin-bottom: 5px;
  }
  .sidebar__categories-list li:last-child {
    margin-bottom: 0;
  }
  .sidebar__categories-list li a {
    position: relative;
    display: block;
    color: var(--thm-color-1);
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    font-family: var(--thm-font);
    padding: 7px 20px 7px;
    border-radius: 10px;
    background: transparent;
    transition: all 100ms linear;
    transition-delay: 0.1s;
    z-index: 1;
  }
  .sidebar__categories-list li a:hover,
  .sidebar__categories-list li a.active {
    color: var(--thm-primary);
    font-weight: 700;
  }
  .sidebar__categories-list li a::before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: "";
    z-index: -1;
    opacity: 1;
    transform: perspective(400px) rotateX(90deg);
    transform-origin: bottom;
    transition: all 300ms linear;
    transition-delay: 0.1s;
    background: #ffffff;
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  .sidebar__categories-list li a:hover::before,
  .sidebar__categories-list li a.active::before {
    opacity: 1;
    transform: perspective(400px) rotateX(0deg);
    transition: all 300ms linear;
    transition-delay: 0.1s;
  }
  .sidebar__categories-list li a span::before {
    position: relative;
    display: inline-block;
    color: var(--thm-color-1);
    font-size: 10px;
    line-height: 26px;
    float: right;
    font-weight: 700;
    transition: all 300ms linear;
    transition-delay: 0.1s;
  }
  .sidebar__categories-list li a:hover span::before {
    color: var(--thm-base);
  }
  .sidebar__categories-list li a.active span::before {
    color: var(--thm-base);
  }
  .sidebar__tag {
    position: relative;
    display: block;
    background: #f6f4ec;
    border-radius: 10px;
    padding: 42px 50px 40px;
  }
  .sidebar__tag-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin-left: -5px;
    margin-right: -5px;
  }
  .sidebar__tag-list li {
    position: relative;
    display: inline-block;
    float: left;
    margin: 0px 4px 10px;
  }
  .sidebar__tag-list li a {
    position: relative;
    display: inline-block;
    color: var(--thm-color-1);
    font-size: 12px;
    line-height: 22px;
    font-weight: 700;
    font-family: var(--thm-font);
    text-transform: uppercase;
    border-radius: 10px;
    background: #ffffff;
    padding: 8px 20px 8px;
    letter-spacing: 0.1em;
    transition: all 200ms linear;
    transition-delay: 0.1s;
  }
  .sidebar__tag-list li a:hover {
    color: var(--thm-primary);
    background: var(--thm-base);
  }
  .sidebar__recent-comments {
    position: relative;
    display: block;
    background: #f6f4ec;
    border-radius: 10px;
    padding: 42px 50px 47px;
  }
  .sidebar__recent-comments .title {
    margin-bottom: 18px;
  }
  .sidebar__recent-comments-list {
    position: relative;
    display: block;
  }
  .sidebar__recent-comments-list-item {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 23px;
  }
  .sidebar__recent-comments-list-item:last-child {
    margin-bottom: 0;
  }
  .sidebar__recent-comments-list-item .icon {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    text-align: center;
    background: var(--thm-primary);
    color: #ffffff;
    font-size: 15px;
    transition: all 200ms linear;
    transition-delay: 0.1s;
  }
  .sidebar__recent-comments-list-item .icon:hover {
    color: var(--thm-primary);
    background: var(--thm-base);
  }
  .sidebar__recent-comments-list-item .icon span::before {
    position: relative;
    display: inline-block;
    line-height: 45px;
  }
  .sidebar__recent-comments-list-item .text {
    position: relative;
    display: block;
    padding-left: 18px;
  }
  .sidebar__recent-comments-list-item .text p {
    font-size: 16px;
    line-height: 26px;
  }
  .sidebar__recent-comments-list-item .text p span {
    color: var(--thm-primary);
  }
  .news-details {
    position: relative;
    display: block;
    padding: 120px 0px 120px;
  }

  .news-details__left {
    position: relative;
    display: block;

    .blog-one__single-img::before {
      display: none;
    }

    .blog-one__single {
      .blog-one__single-img {
        border-radius: 10px;
      }

      &:hover .blog-one__single-img img {
        transform: scale(1) rotate(0deg);
      }
    }

    .blog-one__single-content {
      box-shadow: none;
      padding: 20px 0px 3px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;

      h2 {
        font-size: 26px;
        margin-bottom: 20px;
      }
    }
  }

  .news-details__left-text1 {
    position: relative;
    display: block;
    margin-bottom: 33px;
  }

  .news-details__left-text2 {
    position: relative;
    display: block;
    margin-bottom: 53px;
  }

  .tag-social-link {
    position: relative;
    display: block;
    border-top: 1px solid #eceae0;
    padding-top: 30px;
  }

  .tag-social-link__tag {
    position: relative;
    display: flex;
    align-items: center;

    .title {
      position: relative;
      display: block;

      h4 {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }

  .tag-social-link__tag-list {
    position: relative;
    display: block;
    margin-left: 20px;

    ul {
      position: relative;
      display: block;

      li {
        position: relative;
        display: inline-block;
        float: left;
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }

        a {
          position: relative;
          display: inline-block;
          color: var(--thm-color-1);
          font-size: 12px;
          line-height: 22px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background: #f6f4ec;
          padding: 8px 20px 8px;
          border-radius: 10px;
          transition: all 200ms linear;
          transition-delay: 0.1s;

          &:hover {
            color: var(--thm-primary);
            background: var(--thm-base);
          }
        }
      }
    }
  }

  .tag-social-link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tag-social-link__social-links {
    position: relative;
    display: block;
    overflow: hidden;

    ul {
      position: relative;
      display: block;

      li {
        position: relative;
        display: inline-block;
        float: left;
        margin-right: 30px;

        &:last-child {
          margin-right: 0;
        }

        a {
          position: relative;
          display: inline-block;
          color: var(--thm-color-1);
          font-size: 20px;
          transition: all 200ms linear;
          transition-delay: 0.1s;

          &:hover {
            color: var(--thm-base);
          }

          i::before {
          }
        }
      }
    }
  }

  .news-details__pagenation {
    position: relative;
    display: block;
    margin-top: 30px;
  }

  .news-details__pagenation-single {
    position: relative;
    display: block;
    background: #f6f4ec;
    padding: 52px 55px 52px;
    border-radius: 10px;
    transition: all 200ms linear;
    transition-delay: 0.1s;

    &.active {
      background: var(--thm-secondary);

      h2 a {
        color: #ffffff;
      }
    }

    &:hover {
      background: var(--thm-secondary);
    }

    h2 {
      font-size: 20px;
      line-height: 34px;
      font-family: var(--thm-font);

      a {
        color: var(--thm-primary);
        transition: all 200ms linear;
        transition-delay: 0.1s;
      }
    }

    &:hover h2 a {
      color: #ffffff;
    }
  }

  .meta-info {
    position: relative;
    display: block;
    margin-bottom: 12px;

    li {
      position: relative;
      display: inline-block;
      padding-left: 5px;

      &:first-child {
        padding-left: 0;
      }

      a {
        color: var(--thm-color-1);
        font-size: 14px;
        line-height: 24px;
        transition: all 200ms linear;
        transition-delay: 0.1s;

        &:hover {
          color: var(--thm-base);
        }

        i::before {
          position: relative;
          display: inline-block;
          color: var(--thm-secondary);
          font-size: 15px;
          padding-right: 5px;
          transition: all 200ms linear;
          transition-delay: 0.1s;
        }

        &:hover i::before {
          color: var(--thm-base);
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .news-details__pagenation-single.style2 {
      margin-bottom: 20px;
    }

    .news-details__left .blog-one__single {
      max-width: none;
    }

    .news-details {
      position: relative;
      display: block;
      padding: 120px 0px 90px;
    }

    .tag-social-link {
      display: block;
    }

    .tag-social-link__social-links {
      margin-top: 20px;
    }

    .news-details__pagenation-single {
      padding: 52px 30px 52px;
    }

    .news-details__pagenation-single h2 {
      font-size: 18px;
    }

    .comment-one__image {
      position: relative;
    }

    .comment-one__content {
      margin-left: 0px;
      margin-top: 15px;
    }
  }
  @media only screen and (min-width: 1200px) and (max-width: 1220px) {
    .sidebar__recent-comments-list-item .text {
      padding-left: 13px;
    }

    .news-details__pagenation-single {
      padding: 52px 50px 52px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .news-details__left .blog-one__single-content h2 {
      font-size: 20px;
    }

    .news-details__pagenation-single.style2 {
      margin-bottom: 20px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .news-details__pagenation-single.style2 {
      margin-bottom: 20px;
    }

    .news-details__left .blog-one__single {
      max-width: none;
    }

    .news-details {
      position: relative;
      display: block;
      padding: 120px 0px 90px;
    }
  }
  @media only screen and (max-width: 450px) {
    .news-details {
      padding: 10px 0 90px;
    }
    .news {
      margin: 0 18px;
    }
  }
</style>
