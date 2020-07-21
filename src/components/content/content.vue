<template>
  <div>
    <van-card
      v-for="(item, index) in newList"
      :key="item._id"
      :tag="item.category"
      :thumb="item.thumbnail_pic_s"
      @click="truns(item._id)"
    >
      <template #title>
        <h1 class="title">{{ item.title }}</h1>
      </template>
      <template #num>
        <span>发布时间:{{ item.date }}</span>
      </template>
      <template #desc>
        <p class="author">
          作者:
          <span class="authorColor">{{ item.author_name }}</span>
        </p>
      </template>
      <template #price>
        <span>阅读次数:{{ item.read }}</span>
      </template>
    </van-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["newList"],
  data() {
    return {};
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {
    truns(value) {
      //放置session中
      sessionStorage.setItem("newId", value);
      this.$root.newId = value;
      this.$router.push("/details/" + value);
    },
  },
};
</script>

<style scoped>
.van-card {
  height: 130px;
}

.author {
  font-size: 16px;
  margin: 0.2rem 0 0.2rem 0;
  text-indent: 0.3rem;
}

.title {
  font-size: 20px;
  width: 100%;
  font-weight: bold;
  margin-top: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.authorColor {
  color: slateblue;
  font-size: 14px;
}
</style>
