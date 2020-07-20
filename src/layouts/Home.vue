<template>
  <div>
    <van-search placeholder="请输入搜索关键词" shape="round" />
    <Banner></Banner>
    <Content :newList="newList"></Content>
    <Paging :num="count" @news="getList"></Paging>
  </div>
</template>

<script>
import axios from "axios";

import Banner from "@/components/banner/banner.vue";
import Content from "@/components/content/content.vue";
import Paging from "@/components/pag/pag.vue";

export default {
  props: {},
  data() {
    return {
      newList: [],
      count: 1,
    };
  },
  components: {
    Banner,
    Content,
    Paging,
  },
  created() {
    this.$root.showH = true;
    this.$root.showF = true;
    //放置session中
    sessionStorage.setItem("state", "homeNews");
    this.$root.state = "homeNews";
  },
  mounted() {
    this.getNews();
  },
  updated() {},
  methods: {
    getList(value) {
      this.newList = value;
    },

    getNews() {
      axios({
        url: "http://localhost/details/home",
      }).then((data) => {
        this.newList = data.data.advList;
        this.count = data.data.lastIndex;
      });
    },
  },
};
</script>

<style scoped></style>
