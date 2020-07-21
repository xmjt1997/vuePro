<template>
  <div>
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      this.$root.addCount = true;
    },
  },
};
</script>

<style scoped></style>
