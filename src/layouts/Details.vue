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
          {{ msg.author }}
        </span>
      </template>
      <template #right-icon>
        <van-button icon="star-o" type="primary" size="mini" color="#ed556a"
          >关注</van-button
        >
      </template>
    </van-cell>

    <!-- <section>
			<p class="txtstyle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis minus vitae aspernatur voluptas corporis deleniti qui nesciunt natus blanditiis id maiores amet dolor adipisci nam dolorem unde eos doloribus ratione dignissimos quis quas deserunt ducimus aliquid aut velit veniam debitis repellendus temporibus quo cum! Possimus suscipit atque nihil harum vero at dolorem voluptatibus vel soluta debitis! Id illo nemo expedita accusantium consequuntur saepe aspernatur odit nisi pariatur deleniti soluta ea ratione quos fugit consequatur deserunt error laborum dolorum sint doloribus omnis nobis voluptas harum dolor accusamus maxime quisquam corporis. Sapiente necessitatibus eaque eligendi earum aliquam sequi non consequatur consectetur quam rem nostrum commodi perferendis repellendus molestiae sint officiis beatae voluptates aperiam magni totam accusantium voluptatum error distinctio nemo voluptatibus quaerat similique vel. Voluptate quaerat aspernatur molestiae et fugiat ut corporis reiciendis cumque alias pariatur labore sed id sint quidem doloremque accusantium nemo quibusdam. Aperiam voluptas fugit necessitatibus alias accusantium ea blanditiis tempore ab odio tempora reiciendis ipsum natus ad ratione earum rerum dolorum consectetur! Incidunt voluptatibus sapiente laborum natus dignissimos voluptatem corporis vel veritatis aliquid mollitia! Facilis tempore nam labore numquam in facere quaerat possimus at voluptatem earum culpa deleniti unde exercitationem laboriosam adipisci maxime error ad quam quia perferendis!</p>
    </section>-->
    <img width="100%" :src="msg.img2" alt />
    <section>
      <p class="txtstyle" v-text="msg.contxt"></p>
    </section>
    <van-divider dashed>END</van-divider>
    <van-cell title="立即分享给好友吧" @click="showShare = true" />

    <van-share-sheet
      class="share"
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />

    <van-tabbar v-model="active">
      <van-tabbar-item icon="good-job-o">点赞</van-tabbar-item>
      <van-tabbar-item icon="star-o">收藏</van-tabbar-item>
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
      active: 0,

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
  mounted() {
    // axios({
    //   url: "http://localhost/news",
    //   params: {
    //     type: this.$root.state,
    //     _id: sessionStorage.getItem("_id"),
    //   },
    // }).then((data) => {
    //   console.log(data);
    // });
    let typeState = this.$root.state;
    let index = this.$route.params.id;
    this.msg = this.$store.state[typeState][index];
  },
  updated() {},
  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
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
