<template>
  <div id="app">
    <van-image
      class="headImg"
      round
      width="1.5rem"
      height="1.5rem"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <p class="font">{{ this.$root.cut | reglogin }}</p>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        autocomplete="off"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <van-button
      color="linear-gradient(to bottom, #4bb0ff, #6149f6)"
      @click="turn"
      >前去注册</van-button
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {
    onSubmit(values) {
      if (this.username == "" && this.password == "") {
        this.$notify({
          message: "请输入完整的账号密码",
          duration: 1500,
          type: "warning",
        });
      } else {
        axios({
          method: "post",
          url: "http://localhost/user/login",
          data: {
            username: this.username,
            password: this.password,
          },
        }).then((data) => {
          if (data.data.ok == -3) {
            this.$notify({
              message: "账号或密码错误",
              duration: 1500,
              type: "danger",
              className: "succTop",
            });
          }
          if (data.data.ok == 1) {
            sessionStorage.setItem("username", data.data.username);

            this.$notify({
              message: "登录成功",
              duration: 1000,
              type: "success",
              className: "succTop",
            });
            let route = this.$router;
            setTimeout(function() {
              route.replace("/preson");
            }, 1000);
          }
        });
      }
    },
    turn() {
      this.$root.cut = 1;
    },
  },
};
</script>

<style scoped>
#app {
  height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.font {
  font-size: 19px;
  font-family: "宋体";
  font-weight: bold;
}
.van-popup {
  line-height: 100px !important;
}
</style>
