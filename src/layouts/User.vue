<template>
  <div>
    <Goback></Goback>
    <Reg v-if="this.$root.cut"></Reg>
    <Login v-else></Login>
  </div>
</template>

<script>
import Goback from "@/components/goback/goback.vue";
import Reg from "@/components/user/reg.vue";
import Login from "@/components/user/login.vue";

export default {
  props: {},
  data() {
    return {};
  },
  components: {
    Reg,
    Login,
    Goback,
  },
  mounted() {
    if (sessionStorage.getItem("username")) {
    }
    this.$root.showF = false;
    this.$root.showH = false;
  },
  updated() {},
  methods: {},
};
</script>

<style scoped>
.content {
  position: relative;
  top: 0px;
}
</style>
