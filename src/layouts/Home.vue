<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" />
    <Banner></Banner>

    <Content :data="newdatas"></Content>
    <Paging :counts="count" @pag="newsPag" :urls="getUrl"></Paging>
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
      value: "",
      count: "",
      newdatas: [],
      type: "top",
      getUrl: "http://localhost/details",
    };
  },
  components: {
    Banner,
    Content,
    Paging,
  },

  mounted() {
    axios({
      url: "http://localhost/details",
    }).then((data) => {
      let a = data.data;
      this.count = a.lastIndex;
      this.newdatas = a.advList;
      this.$store.dispatch("homeNews", a.advList);
    });
  },
  updated() {},
  methods: {
    //翻页
    newsPag(value) {
      this.newdatas = value;
      this.$store.dispatch("homeNews", value);
    },
  },
};
</script>

<style scoped></style>
