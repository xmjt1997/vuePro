<template>
  <div>
    <van-card
      v-for="(item, index) in this.data"
      :tag="item.category"
      price="200"
      :desc="item.author_name"
      :thumb="item.thumbnail_pic_s"
      @click="goDetails(index, item._id)"
      :key="index"
    >
      <template #title>
        <h1 class="title">{{ item.title }}</h1>
      </template>
      <template #num>发布时间：{{ item.date }}</template>
      <template #price>阅读次数:123</template> -->
    </van-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["data"],
  data() {
    return {};
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {
    goDetails(value, id) {
      console.log(value, id);
      sessionStorage.setItem("_id", id);
      this.$router.push("/details/" + value);
    },
  },
};
</script>

<style scoped>
.van-card {
  height: 130px;
}

.van-card__desc {
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
</style>
