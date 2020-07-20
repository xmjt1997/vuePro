<template>
  <div id="app">
    <Header v-if="this.$root.showH"></Header>

    <router-view class="content"></router-view>

    <Footer v-if="this.$root.showF"></Footer>
  </div>
</template>

<script>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";

export default {
  props: {},
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
  mounted() {},
  updated() {},

  methods: {},

  watch: {
    $route(to, form) {
      let path = to.path;

      if (/home|society|inter|money|recreation/.test(path)) {
        this.$root.showF = this.$root.showH = true;
      } else {
        this.$root.showH = this.$root.showF = false;
      }
      if (/home/.test(path)) {
        this.$root.state = "homeNews";
      }
      if (/inter/.test(path)) {
        this.$root.state = "interNews";
      }
      if (/money/.test(path)) {
        this.$root.state = "moneyNews";
      }
      if (/society/.test(path)) {
        this.$root.state = "societyNews";
      }
      if (/recreation/.test(path)) {
        this.$root.state = "recreationNews";
      }
    },

    deep: true,
  },
};
</script>

<style scoped>
#app {
  position: relative;
  width: 100%;
  height: 100%;
}
.content {
  position: relative;
  top: 0.6rem;
  margin-bottom: 0.8rem;
  overflow: hidden;
}
</style>
