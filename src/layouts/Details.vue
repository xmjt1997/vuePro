<template>
  <div class="inline">
    <div class="top">
      <Goback class="goback"></Goback>
    </div>
    <h1>{{ msg.title }}</h1>
    <van-cell value center>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <van-image
          round
          width="0.8rem"
          height="0.8rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <van-tag plain type="success">原创</van-tag>
        <span class="text" style="color: #ccc; font-size: 12px;">
          {{ msg.author_name }}
        </span>
      </template>
      <template #right-icon>
        <van-button
          icon="star-o"
          type="primary"
          size="mini"
          color="#ed556a"
          @click="about"
          >关注</van-button
        >
      </template>
    </van-cell>

    <img width="100%" :src="msg.thumbnail_pic_s02" alt />
    <section>
      <p class="txtstyle">{{ msg.content }}</p>
    </section>
    <van-divider dashed>END</van-divider>
    <van-cell title="立即分享给好友吧" @click="showShare = true" />

    <van-share-sheet
      class="share"
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
    />

    <van-tabbar v-model="active">
      <van-tabbar-item icon="good-job-o" @click="likeNew(msg.add)"
        >点赞{{ msg.add }}</van-tabbar-item
      >
      <van-tabbar-item icon="star-o" @click="collectNew(msg.collect)"
        >收藏{{ msg.collect }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import Goback from "@/components/goback/goback.vue";
import axios from "axios";
export default {
  props: [],
  data() {
    return {
      msg: "",
      active: "",
      addCount: true,

      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
        ],
      ],
    };
  },
  components: {
    Goback,
  },
  created() {
    this.$root.showH = false;
    this.$root.showF = false;
    this.msg = "";
    this.show();
  },
  mounted() {},
  updated() {},
  methods: {
    //获取新闻页面信息
    show() {
      axios({
        url: "http://localhost/news",
        params: {
          type: this.$root.state,
          _id: this.$root.newId,
          // type: sessionStorage.getItem("state"),
          // _id: sessionStorage.getItem("newList"),
          date: Date(),
        },
      }).then((data) => {
        this.msg = data.data[0];
      });
    },

    //点赞功能
    likeNew(value) {
      if (this.$root.addCount) {
        this.msg.add++;
        axios({
          method: "put",
          url: "http://localhost/update/add",
          params: {
            num: value,
            type: this.$root.state,
            _id: this.$root.newId,
          },
        });
        this.$root.addCount = false;
      } else return;

      let name = sessionStorage.getItem("username");

      axios({
        method: "post",
        url: "http://localhost/person",
        data: {
          list: this.msg,
          username: name,
          type: "add",
        },
      }).then(() => {});
    },

    //收藏功能
    collectNew(value) {
      let name = sessionStorage.getItem("username");
      axios({
        method: "post",
        url: "http://localhost/person",
        data: {
          list: this.msg,
          username: name,
          type: "collect",
        },
      }).then(() => {});
    },
    //关注功能
    about() {
      let name = sessionStorage.getItem("username");

      axios({
        method: "post",
        url: "http://localhost/person",
        data: {
          list: this.msg.author_name,
          username: name,
          type: "about",
        },
      }).then(() => {});
    },
  },
};
</script>

<style scoped>
.van-cell__title {
  text-align: center;
  line-height: 0.9rem;
  height: 0.9rem;
  /* background-color: #8fb2c9; */
  border-radius: 5%;
  color: #8fb2c9;
  font-size: 18px;
}
.em {
  width: 100%;
  height: 100px;
}

.txtstyle {
  font-size: 16px;
  text-align: justify;
  text-indent: 32px;
  line-height: 32px;
  margin: 20px 10px 0 10px;
}

.inline {
  height: 100%;
  position: relative;
  top: 0px;
  height: auto;
  margin-top: 0.7rem;
  background-color: white;
  overflow-y: auto;
}
.top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

.content {
  height: 100%;
}
h1 {
  margin-top: 0.3rem;
  text-align: center;
}
</style>
