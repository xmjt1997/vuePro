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
