<template>
  <div>
    <van-image
      class="headImg"
      round
      width="1.5rem"
      height="1.5rem"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />

    <br />
    <h1>{{ name }}</h1>
    <br />
    <h3>欢迎您~</h3>
    <div class="main">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="(item, index) in style"
          :key="index"
          :icon="item.icon"
          :text="item.type"
        />
      </van-grid>
    </div>
    <div class="button">
      <van-button type="danger" @click="toNotify">立即退出</van-button>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer";
export default {
  props: {},
  data() {
    return {
      name: "",
      //   type: [{"我的收藏",'star-o'}, {"我的点赞"}, "关注", "粉丝数", "获赞", "浏览记录"],
      style: [
        { type: "我的收藏", icon: "star-o" },
        { type: "我的点赞", icon: "good-job-o" },
        { type: "关注数", icon: "fire-o" },
        { type: "粉丝数", icon: "friends-o" },
        { type: "获赞", icon: "medal-o" },
        { type: "浏览记录", icon: "clock-o" },
      ],
    };
  },
  components: {
    Footer,
  },
  mounted() {
    this.$root.showH = false;
    this.$root.showF = false;
    this.name = sessionStorage.getItem("username");
  },
  updated() {},
  methods: {
    toNotify() {
      let router = this.$router;

      this.$dialog
        .alert({
          showCancelButton: true,
          title: "温馨提示",
          message: "真的要退出吗",
        })
        .then(() => {
          this.$notify({
            message: "注销成功",
            type: "warning",
            duration: 1000,
          });
          setTimeout(function() {
            sessionStorage.removeItem("username");
            router.replace("/user");
          }, 1000);
        })
        .catch(() => {
          return;
        });
    },
  },
};
</script>

<style scoped>
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
.topMsg {
  width: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  align-items: center;
}
.main {
  width: 90%;
  margin-top: 0.6rem;
}
.headImg {
  margin-top: 0.5rem;
}
.button {
  margin-top: 1rem;
}
</style>
