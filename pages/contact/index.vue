<template>
  <div class="contact">
    <PageTop :image-url="`${cdnUrl}/images/contact.png`" />
    <div class="contain">
      <div class="contactus">
        <div>
          <h3>联系我们：</h3>
        </div>
        <div>
          <input v-model="name" type="text" class="item" placeholder="请输入姓名" />
        </div>
        <div>
          <input v-model="email" type="email" class="item" placeholder="请输入邮箱" />
        </div>
        <div>
          <input v-model="phone" type="number" class="item" placeholder="请输入手机号" />
        </div>
        <div>
          <input v-model="subject" type="text" class="item" placeholder="请输入主题" />
        </div>
        <div>
          <textarea v-model="message" name="留言" class="textarea" placeholder="留言" cols="30" rows="10"></textarea>
        </div>
        <div class="btn-contain">
          <button class="btn" @click="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-send"
              viewBox="0 0 16 16">
              <path
                d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
            发送信息留言
          </button>
        </div>
      </div>

      <div class="rightbar">
        <!-- <h3>Let's talk about how we can help you</h3> -->
        <h3>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-emoji-smile"
              viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path
                d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
          </i>
          我们将致力于更好的服务
        </h3>
        <h4>公司地址：怀宁县大雄山泉水开发有限公司</h4>
        <h4>水厂地址：安徽省安庆市怀宁县江镇镇新联村</h4>
        <h4>订水电话：0556-4629268</h4>
      </div>
    </div>
  </div>
</template>
<script>
  import PageTop from "../../components/PageTop.vue";
  import { cdnUrl } from "@/common/setting";
  import { sendMessage } from "@/api/contact";

  export default {
    name: "ContactUs",
    components: { PageTop },
    data() {
      return {
        cdnUrl,
        name: "",
        phone: "",
        subject: "",
        email: "",
        message: "",
      };
    },
    methods: {
      submit() {
        if (this.name === "" || this.phone === "" || this.theme === "" || this.email === "" || this.text === "") {
          this.$toast.info("请完整输入内容后提交 ⊙﹏⊙‖∣°");
        } else {
          const params = {
            name: this.name,
            message: this.message,
            phone: this.phone,
            email: this.email,
            subject: this.subject,
          };
          sendMessage(params)
            .then((res) => {
              if (res.code === 200) {
                this.$toast.success("已收到你的留言~@^_^@~");
              }
            })
            .catch((err) => {
              this.$toast.error("提交失败" + err);
            });
        }
      },
    },
  };
</script>
<style lang="scss" scoped>
  .contact {
    width: 100%;
    height: 100%;
    .contain {
      // background-color: rgb(246, 247, 241);
      background-color: white;

      padding: 80px 80px;
      // margin-top: -20px;
      width: 100%;
      height: 750px;
      display: flex;
      .contactus {
        width: 60%;

        .item {
          width: 100%;
          height: 40px;
          margin-top: 30px;
          border: none;
          border-radius: 10px;
          box-shadow: 3px 3px 6px rgb(192, 156, 156);
          // box-shadow: 2px 2px 10px;
          // color: red;
          opacity: 0.6;
          // background-color: rgb(246, 247, 241);

          outline: none;
          color: black;

          font-weight: bold;
          padding: 5px 10px;
          &:hover {
            border: 1px solid rgba(52, 146, 252, 1);
          }
          &:focus {
            border: 1px solid rgba(52, 146, 252, 1);
            background-color: rgba(52, 146, 252, 0.4);
            opacity: 0.5;
            // box-shadow: 2px 3px 5px rgb(192, 156, 156);
          }
        }
        .textarea {
          margin: 30px 0 0;
          border: none;
          outline: none;
          width: 100%;
          height: 150px;
          border-radius: 10px;
          font-size: 20px;
          opacity: 0.6;
          color: black;
          font-weight: bold;
          box-shadow: 2px 3px 6px rgb(192, 156, 156);
          &:hover {
            border: 1px solid rgba(52, 146, 252, 1);
          }
          &:focus {
            border: 1px solid rgba(52, 146, 252, 1);
            // box-shadow: 2px 3px 5px rgb(192, 156, 156);
            background-color: rgba(52, 146, 252, 0.5);
          }
        }
        .btn {
          width: 180px;
          height: 40px;
          border: none;
          outline: none;
          box-shadow: 2px 2px 1px rgb(212, 205, 205);
          border-radius: 15px;
          margin-top: 20px;
          position: relative;
          z-index: 2;
          transition: all 1s;
          &::after {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 0px;
            height: 40px;
            background-color: rgb(255, 255, 255, 0.6);
            z-index: 1;
            border-radius: 15px;
            transition: all 0.8s;
          }
          &:hover {
            // color: rgb(136, 216, 236);
            color: white;
            background-color: rgba(52, 146, 252, 1);
          }

          &:hover::after {
            width: 180px;
            border-radius: 15px;

            opacity: 0.1;
          }
        }
      }
      .rightbar {
        width: 530px;
        // border: 1px solid red;
        margin-left: 50px;
        transition: all 1s;
        // background-color: rgb(238, 241, 226);
        // background-color: rgb(245, 246, 241);
        background: linear-gradient(
          rgba(52, 146, 252, 1),
          rgba(91, 182, 252, 0.8),
          rgba(120, 199, 252, 0.8),
          rgba(164, 221, 254, 0.8)
        );
        border-radius: 20px;

        h3 {
          margin: 100px 0 80px;
          text-align: center;
          color: white;
        }
        &:hover {
          // background-color: rgb(146, 182, 213);
          // background-color: rgb(245, 246, 241);
          // background-color: rgb(235, 241, 209);
          background: linear-gradient(rgba(52, 146, 252), rgba(91, 182, 252), rgba(120, 199, 252), rgba(164, 221, 254));

          transform: translateY(-25px);
          cursor: pointer;
          border-radius: 20px;
        }
        h4 {
          color: white;

          margin-top: 30px;
          padding: 0 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 450px) {
    .contact {
      width: 100%;
      height: 1300px;

      .contain {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 25px 20px;
        .contactus {
          width: 100%;
          .btn-contain {
            width: 100%;
            margin: 20px 0 0;
            text-align: center;
            .btn {
              // margin: 0;
            }
          }
        }
        .rightbar {
          width: 100%;
          // height: 400px;
          margin: 50px 0 0;
          h3 {
            margin: 20px 0 0;
          }
          h4:last-child {
            margin-bottom: 30px;
          }
        }
      }
    }
  }
</style>
