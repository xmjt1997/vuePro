<template>
  <div>
    <van-pagination
      v-model="currentPage"
      :page-count="counts"
      mode="simple"
      @change="byID(currentPage)"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["counts", "type", "urls"],
  data() {
    return {
      currentPage: 1,
    };
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {
    byID(value) {
      axios({
        url: this.urls,
        params: { _id: value },
      }).then((data) => {
        let a = data.data;
        // this.$root.newdatas = a.advList;
        this.$emit("pag", a.advList);
        this.$store.dispatch(this.$root.state, a.advList);
      });
    },
  },
};
</script>

<style scoped></style>
