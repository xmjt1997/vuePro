<template>
  <div>
    <van-pagination v-model="pagcount" :page-count="num" mode="simple" @change="getNews(pagcount)" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["num"],
  data() {
    return {
      pagcount: 1
    };
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {
    getNews(value) {
      let type = this.$route.path;
      let str = type.slice(1);
      axios({
        //请求地址
        url: "/details/" + str,
        params: { _id: value } //当前页码数
      }).then(data => {
        // console.log(data.data.advList);
        this.$emit("news", data.data.advList);
      });
    }
  }
};
</script>

<style scoped></style>
