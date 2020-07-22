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
      count: 1
    };
  },
  components: {
    Banner,
    Content,
    Paging
  },
  created() {
    this.$root.state = "yuleNews";
    sessionStorage.setItem("state", "yuleNews");

    this.$root.showH = true;
    this.$root.showF = true;
  },
  mounted() {
    this.getNews();
  },
  updated() {},
  methods: {
    getList(value) {
      this.newList = value;
      sessionStorage.setItem("newList", "value");
    },

    getNews() {
      axios({
        url: "/details/recreation"
      }).then(data => {
        this.newList = data.data.advList;
        this.count = data.data.lastIndex;
      });
    }
  }
};
</script>

<style scoped></style>
