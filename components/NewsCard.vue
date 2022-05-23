<template>
  <div class="blog-one__single">
    <div class="blog-one__single-img">
      <img :src="item.thumbImg" alt="" style="width: 370px; height: 250px" />
      <div class="date-box">
        <span>{{ item.releaseTime | formatDate }}</span>
      </div>
      <div class="overlay-icon">
        <nuxt-link v-if="item.type == 1" :to="`/news/${item.id}`">
          <span class="icon-plus"></span>
        </nuxt-link>
        <a v-else :href="item.sourceUrl">
          <span class="icon-plus"></span>
        </a>
      </div>
    </div>

    <div class="blog-one__single-content">
      <ul class="meta-info">
        <li>
          <a href="#">
            <i class="fa fa-user-circle"></i>
            {{ item.authorName }}
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-eye"></i>
            {{ item.viewCount }}
          </a>
        </li>
      </ul>
      <h2 class="text-truncate" style="position: relative">
        <nuxt-link v-if="item.type == 1" style="text-decoration: none" :to="`/news/${item.id}`">
          {{ item.title }}
        </nuxt-link>
        <a v-else :href="item.sourceUrl">
          {{ item.title }}
        </a>
      </h2>
    </div>
  </div>
</template>

<script>
  // import {formatDate} from '../filters/index'
  export default {
    props: {
      item: { type: Object, default: () => {} },
    },
  };
</script>

<style lang="scss" scoped>
  .blog-one__single {
    position: relative;
    display: block;
    margin-bottom: 30px;
  }

  .blog-one__single-img {
    position: relative;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
    z-index: 1;

    img {
      width: 100%;
      transform: scale(1);
      transition-delay: 0.1s;
      transition-timing-function: ease-in-out;
      transition-duration: 0.7s;
    }
  }

  .blog-one__single:hover .blog-one__single-img img {
    transform: scale(1.2) rotate(1deg);
  }

  .blog-one__single-img::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: rgba(var(--thm-primary-rgb), 0.5);
    transition-delay: 0.1s;
    transition-timing-function: ease-in-out;
    transition-duration: 0.5s;
    transition-property: all;
    opacity: 1;
    transform-origin: top;
    transform-style: preserve-3d;
    transform: scaleY(0);
    z-index: 1;
  }

  .blog-one__single:hover .blog-one__single-img::before {
    transform: scaleY(1);
  }

  .blog-one__single-img {
    .date-box {
      position: absolute;
      left: 40px;
      bottom: 0;
      background: green;
      padding: 3px 20px 3px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      line-height: 0;
      z-index: 5;

      span {
        // color: var(--thm-primary);
        color: white;
        font-size: 12px;
        line-height: 22px;
        font-weight: 700;
      }
    }

    .overlay-icon {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      transition: 0.9s;
      transform: perspective(400px) scaleY(0);
      transform-origin: bottom;
    }
  }

  .blog-one__single {
    &:hover .blog-one__single-img .overlay-icon {
      transform: perspective(400px) scaleY(1);
    }

    .blog-one__single-img .overlay-icon {
      a {
        position: relative;
        display: inline-block;
      }

      span {
        color: #ffffff;
        font-size: 30px;
        line-height: 30px;
      }
    }
  }

  .blog-one__single-content {
    position: relative;
    display: block;
    background: #ffffff;
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.05);
    padding: 20px 40px 32px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all 200ms linear;
    transition-delay: 0.1s;

    &:hover {
      box-shadow: 0px 10px 60px 0px rgb(0, 0, 0, 0.1);
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

    h2 {
      font-size: 24px;
      line-height: 34px;
      font-family: var(--thm-font);

      a {
        color: var(--thm-primary);
        transition: all 200ms linear;
        transition-delay: 0.1s;

        &:hover {
          color: var(--thm-base);
        }
      }
    }
  }

  .blog-one--news .news-sidebar__btn {
    margin-top: 10px;
  }

  @media only screen and (max-width: 767px) {
    .blog-one__single {
      max-width: 500px;
      width: 100%;
      margin: 0 auto 30px;
    }

    .blog-one__single-content {
      padding: 20px 30px 32px;
    }

    .blog-one__single-content h2 {
      font-size: 23px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .blog-one__single-content {
      padding: 20px 30px 32px;
    }

    .blog-one__single-content h2 {
      font-size: 23px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .blog-one__single {
      max-width: 500px;
      width: 100%;
      margin: 0 auto 30px;
    }
  }
</style>
