<!-- Please remove this file from your project -->
<template>
  <div class="contain" style="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light navs">
      <!-- <a class="navbar-brand" href="#" style="font-size: 30px; font-weight: bold">大雄山泉</a> -->
      <img :src="`${cdnUrl}/images/dxsqtext.png`" style="width: 100px; height: 30px" alt="" />
      <!-- <a class="nav-link" href="#">首页</a> -->
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->

      <div class="collapse navbar-collapse list">
        <ul class="navbar-nav mr-auto items">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link">首页</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about" class="nav-link">关于我们</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/center" class="nav-link">产品中心</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="{ path: '/news', query: { pageNum: 1 } }" class="nav-link">行业新闻</nuxt-link>
          </li>
          <!-- <li class="nav-item">
            <nuxt-link to="/customized" class="nav-link">企业定制</nuxt-link>
          </li> -->
          <li class="nav-item">
            <nuxt-link to="tojoinin" class="nav-link">招商加盟</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="contact" class="nav-link">联系我们</nuxt-link>
          </li>

          <li class="nav-items">
            <img :src="`${cdnUrl}/images/logo.png`" style="height: 45px; width: 140px; margin: -5px 0 0 110px" alt="" />
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> -->
          <!-- <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li> -->
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="输入内容" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
        </form> -->
        <h5 style="width: 270px; color: green; cursor: pointer; padding-left: 15px">
          服务热线
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
          </i>
          0556-4629268
        </h5>
      </div>
    </nav>

    <div class="mobile">
      <div class="header">
        <a href="/">
          <img :src="`${cdnUrl}/images/dxsqtext.png`" style="width: 100px; height: 30px" alt="dxsq" />
        </a>
        <span class="iconfont open" @click="(active = true), (isShow = true)">&#xe606;</span>
      </div>

      <div v-if="active" class="menu">
        <div class="silder-bar">
          <div class="menu-header" style="">
            <img :src="`${cdnUrl}/images/dxsqtext.png`" style="width: 150px; height: 40px; color: white" alt="" />
            <span class="iconfont close" @click="active = false">&#xe646;</span>
          </div>
          <ul class="menu-list">
            <li></li>
            <li class="nav-item" @click="active = false">
              <nuxt-link to="/" class="nav-link">首页</nuxt-link>
            </li>
            <li class="nav-item" @click="active = false">
              <nuxt-link to="/about" class="nav-link">关于我们</nuxt-link>
            </li>
            <li class="nav-item" @click="active = false">
              <nuxt-link to="/center" class="nav-link">产品中心</nuxt-link>
            </li>
            <li class="nav-item" @click="active = false">
              <nuxt-link :to="{ path: '/news', query: { pageNum: 1 } }" class="nav-link">行业新闻</nuxt-link>
            </li>
            <!-- <li class="nav-item" @click="active = false">
              <nuxt-link to="/customized" class="nav-link">企业定制</nuxt-link>
            </li> -->
            <li class="nav-item" @click="active = false">
              <nuxt-link to="/tojoinin" class="nav-link">招商加盟</nuxt-link>
            </li>
            <li class="nav-item" @click="active = false">
              <nuxt-link to="/contact" class="nav-link">联系我们</nuxt-link>
            </li>
          </ul>
        </div>
        <div style="color: white; padding: 0 20px; text-align: left">
          <span>
            <i style="margin-right: 10px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </i>
            0556-4629268
          </span>
          <div style="margin-top: 10px">
            <hr />
            <span>
              <i style="margin-right: 10px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16">
                  <path
                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </i>
              安徽省安庆市怀宁县江镇镇新联村
            </span>
          </div>
          <hr />
          <div>
            <p>版权所有：怀宁县大雄山泉水有限公司</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { cdnUrl } from "../common/setting";

  export default {
    name: "PageHeader",
    data() {
      return {
        cdnUrl,
        active: false,
        isShow: false,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .contain {
    border-bottom: 1px solid gray;
    position: sticky;
    top: 0;
    width: 100%;
    height: auto;
    z-index: 99;
    .navs {
      .items {
        // background-color: beige;
        li {
          cursor: pointer;
          a {
            margin: 0 12px;
            transition: all 0.6s;
            position: relative;
            @keyframes change {
              0% {
                color: rgb(255, 255, 255, 0.1);
              }
              30% {
                color: rgb(255, 255, 255, 0.3);
              }
              50% {
                color: rgb(255, 255, 255, 0.5);
              }
              80% {
                color: rgb(255, 255, 255, 0.8);
              }
              100% {
                color: rgb(255, 255, 25, 1);
              }
            }
            &:hover {
              animation: change 1.1s linear 0s infinite alternate;
            }
            &:hover {
              background-color: orange;
              transform: scale(1.2);
            }
            &:focus {
              color: rgb(235, 97, 0);
            }
            &::after {
              content: "";
              position: absolute;
              // top: 0;
              left: 5px;
              right: 0;
              bottom: 5px;
              height: 2px;
              width: 0;
              background-color: rgb(177, 247, 86);
              transition: all 1s;
              @keyframes width {
                0% {
                  width: 0;
                }
                30% {
                  width: 30%;
                }
                50% {
                  width: 50%;
                }
                80% {
                  width: 80%;
                }
                100% {
                  width: calc(100% - 10px);
                }
              }
            }
            &:hover::after {
              // width: calc(100% - 10px);
              animation: width 1s linear 0s infinite alternate;
            }
          }
        }
      }
    }
    .mobile {
      display: none;
    }
  }
  @media only screen and (max-width: 450px) {
    .contain {
      width: 100%;
      position: sticky;
      top: -1px;
      // height: 50px;
      // z-index: 10;
      // .navs {
      //   .list {
      //     .items {
      //       // display: none;
      //       // border: 1px solid red;
      //     }
      //   }
      // }
      .navs {
        width: 100%;
        display: none;
      }
      .mobile {
        // position: fixed;
        // top: 0;
        // left: 0;
        // width: 100%;
        // z-index: 999;
        border-bottom: 1px solid rgb(161, 160, 160);
        background-color: white;
        display: block;

        // .header {
        //   width: 450px;
        // }

        img {
          margin: 10px;
        }
        .open {
          float: right;
          margin: 1px 50px;
          font-size: 25px;
          line-height: 50px;
          font-weight: bold;
          // width: 20px;
        }

        .menu {
          // width: 65%;
          // border: 1px solid red;
          height: 100%;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 20;
          background-color: rgb(81, 121, 69);
          // opacity: 1;
          transform: translateX(0);
          // visibility: visible;
          transition: all 0.9s;
          // position: relative;
          // &::after {
          //   content: "";

          //   position: absolute;
          //   top: 0;
          //   left: 0;
          //   right: 0;
          //   bottom: 0;
          //   background-color: #000000;
          //   opacity: 0.5;
          // }
          .silder-bar {
            padding: 30px 0 0;
            // .menu-header {
            //   // width: 400px;
            //   padding: 0 10px;
            // }
            .close {
              float: right;
              font-size: 25px;
              margin: 10px 20px;
              color: white;
              font-weight: bold;
            }
            .menu-list {
              list-style: none;
              padding: 0;
              margin-top: 30px;
              .nav-item {
                .nav-link {
                  color: white;
                  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
                  height: 50px;
                  // line-height: 50px;
                }
              }
            }
          }
        }
      }
    }
  }
  // @media only screen and (max-width: 375px) {
  //   .mobile {
  //     .menu {
  //       .menu-header {
  //         width: 350px;
  //       }
  //     }
  //   }
  // }
  @media only screen and (min-width: 1850px) {
    .contain {
      .navs {
        .nav-items {
          margin-left: 246px;
        }
      }
    }
  }
</style>
